const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const getAccessibleRouteList = require('./filter').getAccessibleRouteList;

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));

const sampleUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=Columbia+University&destination=Hudson+Yards,+New+York,+NY&mode=transit&alternatives=true&key=API_KEY';

app.post('/data', (req, res) => {
  
  console.log("POST request received")
  // const body = req.body
  // console.log(req)

  var requestBody = ""

  req.on('data', function (data) {
    requestBody += data;
var jsonData = JSON.parse(requestBody);
console.log(jsonData["origin"])
console.log(jsonData["destination"])
});
  res.send('Success')


});



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