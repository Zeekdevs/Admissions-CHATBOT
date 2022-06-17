const PORT = 8000
const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')

const exp = express()
const siteUrl = 'https://www.hull.ac.uk/study#0'

axios(siteUrl)
    .then(response =>{
        const html = response.data
        const $ = cheerio.load(html)
        const courses = []

        $('#main-content section:nth-child(5)', html).each(function (){
            const postgradresearch = $(this).find('a').text();


            /* const degClass = $('.grid', html).find(' #ug, #pgt, #pgr').text()*/
           /* const title = $(this).find('ul').children().first().text()*/

            courses.push({

                postgradresearch

            })

        })
        console.log(courses)
    }).catch(err => console.log(err))
exp.listen(PORT, () => console.log(`server running on port ${PORT}`))