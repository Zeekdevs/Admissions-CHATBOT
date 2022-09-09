/*https://afternoon-castle-90465.herokuapp.com/*/

const express = require ('express')
const bodyParser = require('body-parser')//for reading request data and parsing
const app = express()
const config = require('./config/Keys')
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {useNewUrlParser: true});
require('./db-models/Reg')
require('./db-models/PopularCourses')
require('./db-models/Courses')
const Course = require("./db-models/Courses");
app.use(bodyParser.json())
require('./routes/dFRoutes')(app)
require('./routes/fulfillmentRoutes')(app)






const port = process.env.PORT || 4000; //specifies the heroky port
app.listen(port, () => console.log(`server running on port ${port}`))