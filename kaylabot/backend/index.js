const PORT = 4000
const express = require ('express')
const app = express()

app.get('/', (req, res)=>{

    res.send({'hello':'there'})

})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))