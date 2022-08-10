/*https://afternoon-castle-90465.herokuapp.com/*/

const express = require ('express')
const bodyParser = require('body-parser')//for reading request data and parsing
const app = express()

app.use(bodyParser.json())
require('./Routes/dFRoutes')(app)

const PORT = process.env.PORT || 4000; //specifies the heroky port
app.listen(PORT, () => console.log(`server running on port ${PORT}`))