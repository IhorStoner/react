const { Router } = require('express');
const request = require('request-promise')
const weatherRouter = Router();

const key = '27dd86c06ee0058cdea528fcf006a5df';

weatherRouter.get('/',(req,res) => {
  const city = req.query.q;
  const icon = req.query.icon;

  request(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(
      body => {
        if(icon){
          const bodyParse = JSON.parse(body)
          const imgURL = `http://openweathermap.org/img/w/${bodyParse.weather[0].icon}.png`;
          request(imgURL).pipe(res)
        } else {
          res.send(body)
        }
      }
    )
})

module.exports = weatherRouter;