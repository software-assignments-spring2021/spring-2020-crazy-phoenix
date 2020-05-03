const User = require('../db.js');
const app = require('../app');

const supertest = require('supertest');
const mongoose = require('mongoose');
const assert = require('assert');

let request = null;
let server = null;
/*
before(function(done) {
  server = app.listen(done);
  request = supertest.agent(server);
  request
    .get('/signup')
    .query({firstname: 'fn', lastname: 'ln', email: 'test@email.com', password: 'password'})
    .then((res) => {
      User.findOne({username: 'test@email.com'}, (err, doc) => {
        console.log(doc);
      });
    });
});
after(function(done) {
  // delete user
  User.findOneAndDelete({firstname: 'fn'}, (err) => {
    console.log(err);
    server.close(done);
    mongoose.connection.close();
    console.log('finished');
  });
});*/

before(function(done) {
  server = app.listen(done);
  request = supertest.agent(server);
});
after(function(done) {
  User.findOneAndDelete({email: 'test@email.com'}, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
      server.close(done);
      mongoose.connection.close();
    }
  });
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
describe('test signing up a user', () => {
  it('should return a confirmation', function(done) {
    request.get('/signup')
      .query({firstname: 'fn', lastname: 'ln', email: 'test@email.com', password: 'password'})
      .end((err, res) => {
        assert(res.body, 'added');
        done();
      });
  });
});

/*
describe('test authenticating a user', () => {
  it('should return a confirmation', function(done) {
    request.get('/authenticate')
      .query({username: 'un', password: 'password'})
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        } else {
          assert(res.body, 'authenticated');
        }
        done();
      });
  });
});*/