'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    User = require('../user/user.model'),
    Cost = require('./cost.model');

/**
 * Globals
 */
var user, cost;

/**
 * Unit tests
 */
describe('Cost Model Unit Tests:', function() {
    beforeEach(function(done) {
        var user = new User({
              provider: 'local',
              name: 'Fake User',
              email: 'test@test.com',
              password: 'password'
            });

        user.save(function() {
            cost = new Cost({
                ammount: 400,
                description: 'Road trip',
                user: user
            });

            done();
        });
    });

    describe('Method Save', function() {
        it('should be able to save without problems', function(done) {
            return cost.save(function(err) {
                should.not.exist(err);
                done();
            });
        });


        it('should be able to show an error when try to save without ammount', function(done) {
            cost.ammount = '';

            return cost.save(function(err) {
                should.exist(err);
                done();
            });
        });


    });

    afterEach(function(done) {
        Cost.remove().exec();
        User.remove().exec();

        done();
    });
});
