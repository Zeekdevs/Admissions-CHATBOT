const mongoose = require('mongoose');
const {Schema} = mongoose;
const popularCourses = new Schema({
    course: String,
    counter:{type: Number, default: 1}

})

mongoose.model('popular-courses', popularCourses);