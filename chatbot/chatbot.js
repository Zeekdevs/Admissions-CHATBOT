"use strict"
const structjson = require('./structjson')
const dialogflow = require('dialogflow')
const config = require('../config/Keys')

const projectID = config.googleProjectID
const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};
const sessionClient = new dialogflow.SessionsClient({projectID, credentials})
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogflowSessionID)




module.exports = {
    queryText: async function(text, parameters ={}){
        let self = module.exports
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    // The query to send to the dialogflow agent
                    text: text,
                    // The language used by the client (en-US)
                    languageCode: config.dialogflowsessionlang,
                },
                queryParams:{
                    payload: {
                        data: parameters
                    }
                }
            },
        };
        let responses = await sessionClient.detectIntent(request) //detect an intent that returns a promise
        responses = await self.handleAction(responses)
        return responses
    },

    queryEvent: async function(event, parameters ={}){
        let self = module.exports
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    // The query to send to the dialogflow agent
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters),
                    // The language used by the client (en-US)
                    languageCode: config.dialogflowsessionlang,
                },
            }
        };
        let responses = await sessionClient.detectIntent(request) //detect an intent that returns a promise
        responses = await self.handleAction(responses)
        return responses
    },

    handleAction: function(responses){
        return responses;
    }


}
