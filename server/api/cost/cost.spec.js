'use strict';

var should = require('should');
var assert = require('chai').assert;
var app = require('../../app');
var request = require('supertest');
var User = require('../user/user.model');
var Cost = require('./cost.model');


/**
 * Globals
 */
var credentials, user, cost;

describe('Cost CRUD tests - /api/costs', function() {


      beforeEach(function(done) {

        // Create user credentials
        credentials = {
            email: 'test@test.com',
            password: 'password'
        };

        // Create a new user
        user = new User({
              provider: 'local',
              name: 'Fake User',
              email: credentials.email,
              password: credentials.password
            });

        // Save the user in the db and create a new cost.
        user.save(function() {
            cost = new Cost({
                ammount: 400,
                description: 'Road trip',
                user: user
            });

            done();
        });
    });

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/costs')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });

  it('should be able to save a cost if logged in', function(done) {
    request(app)
    .post('/auth/local')
    .send(credentials)
    .expect(200)
    .end(function(signinErr, signinRes) {
      if (signinErr) return done(signinErr);
      
      var userId = user._id;

      request(app)
      .post('/api/costs')
      .send(cost)
      .expect(201)
      .end(function(costsaveErr, costsaveRes) {
        if (costsaveErr) return done(costsaveErr);

        request(app)
        .get('/api/costs')
        .expect(200)
        .end(function(costsgetErr, costsgetRes) {
          if (costsgetErr) return done(costsgetErr);

          var costs = costsgetRes.body;

          (costs[0].ammount).should.equal(400);
          (costs[0].user._id).should.equal(userId);          
        })
      });
    })
  });

   afterEach(function(done) {
        User.remove().exec(function() {
            Cost.remove().exec(done);
        });
    });
});