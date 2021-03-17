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

After deploying the model, you will get a reachable endpoint. You will need to integrate the application with the ML model through the endpoint.

<img src="https://i.imgur.com/jA2DgKZ.png" width="600">


First, let's use the Jupyter Notebook instance to build and deploy a model. You will perform the following steps:

1. Create a notebook instance
2. Prepare the data
3. Train the model
4. Deploy the model
5. Evaluate your ML model

https://aws.amazon.com/getting-started/hands-on/build-train-deploy-machine-learning-model-sagemaker/
