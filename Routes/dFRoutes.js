const chatbot = require('../Chatbot/chatbot')
module.exports = app =>{
    app.get('/', (req, res)=>{
        res.send({'hello':'freak'})
    })

    app.post('/api/text_query', async (req, res)=>{
        let responses = await chatbot.queryText(req.body.text, req.body.parameters)
        res.send(responses[0].queryResult)
    })

    app.post('/api/event_query', async (req, res)=>{
        let responses = await chatbot.queryEvent(req.body.event, req.body.parameters)
        res.send(responses[0].queryResult)
    })
}