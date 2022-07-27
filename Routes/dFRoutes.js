const dialogflow = require('dialogflow')
const config = require('../config/Keys');
const sessionClient = new dialogflow.SessionsClient()
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogflowSessionID)

module.exports = app =>{
    app.get('/', (req, res)=>{
        res.send({'hello':'zeek'})
    })

    app.post('/api/text_query', async (req, res)=>{

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: req.body.text,
                    // The language used by the client (en-US)
                    languageCode: config.dialogflowsessionlang,
                },
            },
        };
        let responses = await sessionClient
            .detectIntent(request) //detect an intent that returns a promise
        res.send(responses[0].queryResult)
    })

    app.post('/api/event_query', (req, res)=>{
        res.send({'do':'text query'})
    })
}