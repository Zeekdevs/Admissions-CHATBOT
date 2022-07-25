/*https://stark-bayou-46010.herokuapp.com/*/

const express = require ('express')
const app = express()

app.get('/', (req, res)=>{

    res.send({'hello':'there'})

})
const PORT = process.env.PORT || 4000;//specifies the heroky port
app.listen(PORT, () => console.log(`server running on port ${PORT}`))