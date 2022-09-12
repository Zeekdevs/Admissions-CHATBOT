const {WebhookClient} = require('dialogflow-fulfillment-helper');
const mongoose = require('mongoose')
const PopularCourses = mongoose.model('popular-courses')

const Course = require("../db-models/Courses");


module.exports = app =>{


    app.post('/', async (req,res)=>{ // dialogflow post requests are caught here
        const kayla = new WebhookClient({request: req, response: res});



        function coursesUnavailable(kayla){
            PopularCourses.findOne({'course': kayla.parameters.courses}, function (err, course){
                if (course !== null){
                    course.counter++
                    course.save();
                }else {
                    const popular = new PopularCourses({course: kayla.parameters.courses});
                    popular.save();
                }
            });
            let feedback = `If you need information about ${kayla.parameters.courses}.
                    You can find it here: https://www.hull.ac.uk/study#0`
            kayla.add(feedback);
        }



        function fallback(kayla){
            kayla.add(`Please repeat that`);
            kayla.add(`I'm sorry, repeat one more time`);
        }
        let mapIntent = new Map(); // intents waiting to be handled


        mapIntent.set('Default Fallback Intent', fallback); // default fallback when know intent is matched


        kayla.handleRequest(mapIntent);
    });
}