const User = require('../db.js');
const app = require('../app').app;
const replaceSpace = require('../app').replaceSpace;
const isAccessible = require('../filter').isAccessible;
const filterRoutes = require('../filter').filterRoutes;

const supertest = require('supertest');
const mongoose = require('mongoose');
const assert = require('assert');
const fs = require('fs');

// stub (case where there is no accessible route that uses the subway)
const stubRouteFile = fs.readFileSync('./test/stubRoute.json');
const stubRoute = JSON.parse(stubRouteFile);
// stub (case where there are accessible routes that uses the subway)
const stubRouteFile2 = fs.readFileSync('./test/stubRoute2.json');
const stubRoute2 = JSON.parse(stubRouteFile2);

let request = null;
let server = null;
const mockUserEmail = 'test@email.com';
const mockUserPassword = 'p';

// test setup
before(function(done) {
  server = app.listen(done);
  request = supertest.agent(server);
});

// teardown
after(function(done) {
  User.findOneAndDelete({email: mockUserEmail}, (err, doc) => {
    if (err) {
      console.log(err);
    }
    server.close(done);
    mongoose.connection.close();
  });
});

// test for /signup route
describe('test signing up a user', () => {
  it('should return a confirmation', function(done) {
    request.get('/signup')
      .query({firstname: 'fn', lastname: 'ln', email: mockUserEmail, password: 'password'})
      .end((err, res) => {
        assert(res.body, 'added');
        done();
      });
  });
  // attempt to signin with the same username should return an error message
  it('should return an error message', function(done) {
    request.get('/signup')
      .query({firstname: 'fn', lastname: 'ln', email: mockUserEmail, password: 'password'})
      .end((err, res) => {
        assert(res.body, 'error');
        done();
      });
  });
});

// test for /authenticate route
describe('test authenticating a user', () => {
  it('it should return a confirmation', function(done) {
    request.get('/authenticate')
      .query({email: mockUserEmail, password: 'p'})
      .end((err, res) => {
        assert(res.body, 'authenticated');
        done();
      });
  });
  // attempt to login with invalid username/password pair should return an error message
  it('it should return an error message', function(done) {
    request.get('/authenticate')
      .query({email: mockUserEmail, password: 'fakePassword'})
      .end((err, res) => {
        assert(res.body, 'authentication failure');
        done();
      });
  });
});

describe('function to modify query string', () => {
  it('should return a string without space', function() {
    const origin = 'Hudson Yards';
    const modifiedOrigin = replaceSpace(origin);
    assert.equal(modifiedOrigin.includes(' '), false);
  });
  // an input of empty origin field should return an empty string
  it('should return an empty string', function() {
    const modifiedOrigin = replaceSpace('');
    assert.equal(modifiedOrigin, '');
  })
});

// test for filter.js
describe('function to check if a station is accessible', () => {
  it('should return true for an input of accessible station', function() {
    assert.equal(isAccessible('161 St - Yankee Stadium'), true);
  });
  it('should return false for an input of inaccessible station', function() {
    assert.equal(isAccessible('167th St'), false);
  });
});

describe('function to filter out inaccessible routes', () => {
  it('should return an empty array when there is no accessible route that uses the subway', function() {
    const value = filterRoutes(stubRoute);
    assert(value.length === 0);
  });
  it('should return an array when there are accessible routes that uses the subway', function() {
    const value = filterRoutes(stubRoute2);
    assert(value.length > 0);
  });
});