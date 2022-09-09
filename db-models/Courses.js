const mongoose = require('mongoose')
const { Schema } = mongoose;

const Courses = new Schema({});

const Course = mongoose.model('courses', Courses);
module.exports = Course;