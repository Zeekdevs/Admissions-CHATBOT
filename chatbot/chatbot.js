// calls to dialog flow

"use strict"
const structjson = require('./structjson')
const dialogflow = require('dialogflow')
const config = require('../config/Keys')
const mongoose = require('mongoose')

const projectID = config.googleProjectID
const sessionID = config.dialogflowSessionID
const languageCode = config.dialogflowsessionlang

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
};
const sessionClient = new dialogflow.SessionsClient({projectID, credentials})

const Reg = mongoose.model('registration')



module.exports = {
    queryText: async function(text, userID, parameters ={}){
        let sessionPath = sessionClient.sessionPath(projectID, sessionID+userID)
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

    queryEvent: async function(event, userID, parameters ={}){
        let sessionPath = sessionClient.sessionPath(projectID, sessionID+userID)
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
        let self = module.exports
        let queryResult = responses[0].queryResult;

        switch (queryResult.action){
            case 'quickreplies-yes':
                if (queryResult.allRequiredParamsPresent){
                    self.saveRegistration(queryResult.parameters.fields)


                }
                break;
        }

        return responses;
    },

    saveRegistration: async function (fields){
        const registration = new Reg({
            name: fields.name.stringValue,
            email: fields.email.stringValue,
            datereg: Date.now()
        });
        try{
            let reg = await registration.save().then(r => {console.log('filed registration')});
            console.log(reg)

        }catch (err){
            console.log(err)
        }


    }


}
