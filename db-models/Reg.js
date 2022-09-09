const mongoose = require('mongoose')
const { Schema } = mongoose;

const regSchema = new Schema({
   name: String,
   email: String,
   datereg: Date
});

mongoose.model('registration', regSchema);

