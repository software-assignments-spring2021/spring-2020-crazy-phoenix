const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const getAccessibleRouteList = require('./filter').getAccessibleRouteList;
const path = require('path');
const fs = require('fs');

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

const fn = './config.json';
const key = fs.readFileSync(fn);
const conf = JSON.parse(key);
const apiKey = conf.API_KEY;

const sampleUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=Columbia+University&destination=Hudson+Yards,+New+York,+NY&mode=transit&alternatives=true&key='+apiKey;

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