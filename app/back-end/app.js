const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');

//app.use(cors);

const sampleUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=Times+Square&destination=80+Lafayette+St,+New+York,+NY&mode=transit&key=API_KEY';

app.get('/data', (req, res) => {
  fetch(sampleUrl, {method: "Get"})
    .then(res => res.json())
    .then((json) => {
      const routesObject = json.routes;
      res.send(routesObject);
    });
});


module.exports = app;