exports.handler = function(event, context, callback){
    console.log('event: ',event.body)

    callback(null, {
        statusCode: 200,
        body: JSON.stringify({msg:'This came from the serverless function! '+ event.body})
    })
}