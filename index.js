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

app.use(bodyParser.json())
require('./routes/dFRoutes')(app)
require('./routes/fulfillmentRoutes')(app)

if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));// hander front end files(css,js,html)

    const path = require('path'); // handler for front unhandled routes
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}




const port = process.env.PORT || 4000; //specifies the heroky port
app.listen(port, () => console.log(`server running on port ${port}`))