/*https://afternoon-castle-90465.herokuapp.com/*/

const express = require ('express')
//const cors = require('cors')
const bodyParser = require('body-parser')//for reading request data and parsing
const app = express()
//app.use(cors())
app.use(bodyParser.json())
require('./routes/dFRoutes')(app)



const port = process.env.PORT || 4000; //specifies the heroky port
app.listen(port, () => console.log(`server running on port ${port}`))