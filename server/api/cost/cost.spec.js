'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Cost = require('./cost.model');
var User = require('../user/user.model');
var Category = require('../category/category.model');
var PaymentMethod = require('../paymentMethod/paymentMethod.model');


/**
 * Globals
 */
/*var credentials, user, cost, category, paymentMethod;

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
       
        category = new Category({
          name: 'Communications'
        });

        paymentMethod = new PaymentMethod({
          name: 'Card',
          active: true
        });

        // Save the user in the db and create a new cost.
        user.save(function() {

          paymentMethod.save(function() {
            category.save(function() {
              cost = new Cost({
                ammount: 400,
                description: 'Road trip',
                user: user,
                category: category,
                paymentMethod: paymentMethod,
                created: new Date(2015,12,31)
              });

              done();
            })
          })            
        });       
    });

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/costs/')
      .query({from: '2015-12-31T23:00:00.000Z'})
      .query({to: '2016-01-31T22:59:59.999Z'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
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

      request(app)
      .post('/api/costs/')
      .send(cost)
      .expect(201)
      .end(function(costsaveErr, costsaveRes) {
        if (costsaveErr) return done(costsaveErr);

        request(app)
        .get('/api/costs/')
        .expect(200)
        .end(function(costsgetErr, costsgetRes) {
          if (costsgetErr) return done(costsgetErr);

          var costs = costsgetRes.body;
          
          costs.should.have.length(1);
          (costs[0].ammount).should.equal(400);
          (costs[0].user.name).should.equal(user.name);

          done();
        })
      });
    })
  });

   afterEach(function(done) {
        User.remove().exec(function() {
            Cost.remove().exec(done);
        });
    });
});*/