const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const getAccessibleRouteList = require('./filter').getAccessibleRouteList;
const path = require('path');
const fs = require('fs');

// passport
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
const fn = './config.json';
const key = fs.readFileSync(fn);
const conf = JSON.parse(key);
const apiKey = conf.API_KEY;
const sampleUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=Columbia+University&destination=Hudson+Yards,+New+York,+NY&mode=transit&alternatives=true&key='+apiKey;

// schema
const User = require('./db.js');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// mongoose
// avoid deprecation warning for old url parser
mongoose.connect('mongodb://localhost/transportation', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if (err) {
    console.log('Could not connect to database');
  }
});

// avoid deprecation warning for collection.ensureIndex
mongoose.set('useCreateIndex', true);

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