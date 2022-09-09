
//setting up api calls from backend to dialogflow
const chatbot = require('../chatbot/chatbot')
module.exports = app =>{
    app.get('/', (req, res)=>{
        res.send({'hello':'freaks'})
    })

    //texts request handler
    app.post('/api/text_query', async (req, res)=>{
        let responses = await chatbot.queryText(req.body.text, req.body.userID, req.body.parameters)
        res.send(responses[0].queryResult)
    })

    // event request handler
    app.post('/api/event_query', async (req, res)=>{
        let responses = await chatbot.queryEvent(req.body.event, req.body.userID, req.body.parameters)
        res.send(responses[0].queryResult)
    })
}