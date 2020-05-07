const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();
// passport
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { getAccessibleRouteList } = require('./filter');


const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.urlencoded({extended: false}));
//const fn = './config.json';
//const key = fs.readFileSync(fn);
//const conf = JSON.parse(key);
//const apiKey = conf.API_KEY;
app.use(express.urlencoded({ extended: false }));

const apiKey = process.env.API_KEY;

// schema
const User = require('./db.js');

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// connecting to db
let dbUrl = '';
// testing environment
if (process.env.PRODUCTION === '0') {
  dbUrl = `mongodb://localhost/group_project`;
} else {
  dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
}
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log('Could not connect to database');
  }
  console.log('Successfully connected to DB');
});

// avoid deprecation warning for collection.ensureIndex
mongoose.set('useCreateIndex', true);

const replaceSpace = (location) => {
  let newLocation = '';
  for (let i = 0; i < location.length; i += 1) {
    if (location.charAt(i) === ' ') {
      newLocation += '+';
    } else {
      newLocation += location.charAt(i);
    }
  }
  return newLocation;
};

app.get('/data', (req, res) => {
  const origin = replaceSpace(req.query.origin);
  const destination = replaceSpace(req.query.destination);
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination},+New+York,+NY&mode=transit&alternatives=true&key=${apiKey}`;
  fetch(url, { method: 'Get' })
    .then((res) => res.json())
    .then((json) => {
      const array = getAccessibleRouteList(json);
      res.send(array);
    })
    .catch(console.error);
});

app.get('/authenticate', (req, res) => {
  const { email } = req.query;
  const { password } = req.query;
  req.body.username = email;
  req.body.password = password;
  passport.authenticate('local', {}, (err, user, info) => {
    if (user) {
      res.send('authenticated');
    } else {
      res.send('authentication failure');
    }
  })(req, res);
});

app.get('/signup', (req, res) => {
  const { firstname } = req.query;
  const { lastname } = req.query;
  const { email } = req.query;
  const { password } = req.query;

  User.register(new User({
    username: email,
    email,
    firstname,
    lastname,
  }), password, (err, user) => {
    if (err) {
      res.send('error');
    } else {
      res.send('added');
    }
  });
});


module.exports = {
  app,
  replaceSpace,
};
