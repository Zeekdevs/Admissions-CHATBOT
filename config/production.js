module.exports = {
    googleProjectID: process.env.GOOGLE_PROJECT_ID,
    dialogflowSessionID: process.env.DF_SESSION_ID,
    dialogflowsessionlang: process.env.DF_LANG_CODE,
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    googlePrivateKey: JSON.parse(process.env.GOOGLE_PRIVATE_KEY),
    mongoURI: process.env.MONGO_URI,
};