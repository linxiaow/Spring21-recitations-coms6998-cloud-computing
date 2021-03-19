# AWS SageMaker


## Introduction

We can use AWS SageMaker to Build, Test and Tune and Deploy ML/DL models.

A ML application backed by AWS SageMaker may contain the following components:

- **S3 Bucket**

  Store and read training data and trained models.

- **EC2 Container Registry**

  Provide the runnable images with the execution environment for training and inferring.

- **Notebook Instance**

  A Jupyter Notebook instance that provides an interactive environment for the users. 

- **ML Training Service**

  Computing services for training models.

- **ML Hosting Service**

  Provide endpoints for users to enjoy the model services. The users can put their test data to the endpoint to get results from the models.

The architecture will be like the figure below:

<img src="https://docs.aws.amazon.com/sagemaker/latest/dg/images/sagemaker-architecture.png" width="800">

First, let's use the Jupyter Notebook instance to build and deploy a model. You will perform the following steps:

1. Create a notebook instance
2. Prepare the data
3. Train the model
4. Deploy the model
5. Evaluate your ML model

https://aws.amazon.com/getting-started/hands-on/build-train-deploy-machine-learning-model-sagemaker/


## Build an online ML service 

After deploying the model, we will get a reachable endpoint. 
In the next step, We will integrate the application with the ML model through the endpoint. As the figure shows below, we will create a Lambda Function and an api endpoint using API Gateway. 

<img src="https://i.imgur.com/jA2DgKZ.png" width="600">

### Create a Lambda function.

The sample code follows:

```Python
import boto3
import json

ENDPOINT_NAME = "xgboost-2021-03-15-05-32-10-051" //replace with your endpoint name.
runtime= boto3.client('runtime.sagemaker')

def lambda_handler(event, context):

    data = json.loads(json.dumps(event))
    payload = data["data"]
    
    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,
                                       ContentType='text/csv',
                                       Body=payload)
    
    result = json.loads(response['Body'].read().decode())
    print("result: ", result)

    return result
```

The sample of the testing data in this example follows:

```
{"data": "56,1,999,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0"}
```

We also need to give our Lambda "sagemaker:InvokeEndpoint" permission to invoke a SageMaker model endpoint. 

### Set up API Gateway
We need to build a resource with a POST method. After deploying your api, we can use the api endpoint to test our data.
