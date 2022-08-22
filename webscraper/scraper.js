const PORT = 8000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const exp = express()
const siteUrl = 'https://www.hull.ac.uk/study#0'

courses = {
    undergraduate:{
        computerScience: {
            about: {},
            fees: {},
        },
        nursing: {
            about: {},
            fees: {},
        },



    },
    postgraduate:{
        history: {
            about: {},
            fees: {},
        },
        artificialIntelligence: {
            about: {},
            fees: {},
        },

    },
    research:{
        chemistryResearch: {
            about: {},
            fees: {},
        },
        criminologyResearch: {
            about: {},
            fees: {},
        },

    }
}

axios(siteUrl)
    .then(response =>{
        const html = response.data
        const $ = cheerio.load(html)
        const courses = []

        $('section:nth-child(3)', html).each(function (){
            const undergrad = $(this).find('.columns-2').find('ul, li').text()//.replace(/\s+/g, "")

            courses.push({
                      undergraduate: undergrad
            })

        })
        console.log(courses)
    }).catch(err => console.log(err))
exp.listen(PORT, () => console.log(`server running on port ${PORT}`))