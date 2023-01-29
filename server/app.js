const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const Axios = require('axios');
const cors = require('cors');
const path = require('path');

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


const PORT = process.env.PORT || 3000;

// ICON URL
// https://openweathermap.org/img/wn/13d.png

app.get('/forcast', async(req, res) => {
    try {
        const key = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=${process.env.WEATHERAPPLICATIONAPIKEY}`

        const data = await Axios.get(key).then(res => res.data);

        const weatherData = {
            description: data.weather[0].description,
            main: data.weather[0].main,
            temp: data.main.temp,
            windSpeed: data.wind.speed,
            icon: data.weather[0].icon,
            city: data.name
        }

        console.log('Lets see');
        res.status(200).send({...weatherData});

    } catch(e) {
        res.status(400).send({msg: 'Something went wrong!', e});
    }
});


app.listen(PORT, () =>{
    console.log(`Application is up and running on port: ${PORT}`);
});