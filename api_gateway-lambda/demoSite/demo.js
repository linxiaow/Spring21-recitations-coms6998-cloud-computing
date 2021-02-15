$(document).ready(function() {
    var button = $('#button');
    console.log('button', button)

    button.click(function() {
        makePost()
    })

    function makePost() {
        const text = $('#textbox').val();
        console.log('text', text);
        // newEntryPost takes (params, body, additionalParams)
        sdk.newEntryPost({}, {
            entry: 'here'
        }, {})
        .then(response => console.log('response', response))
    }
})