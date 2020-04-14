const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const getAccessibleRouteList = require('./filter').getAccessibleRouteList;

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

const sampleUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=Times+Square&destination=50+E+28th+St,+New+York,+NY&mode=transit&alternatives=true&key=';

app.get('/data', (req, res) => {
  fetch(sampleUrl, {method: "Get"})
    .then(res => res.json())
    .then((json) => {
      const array = getAccessibleRouteList(json);
      res.send(array);
    })
    .catch(console.error);
});


module.exports = app;