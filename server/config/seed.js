/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Cost = require('../api/cost/cost.model');
var Category = require('../api/category/category.model');

/**
 * Users 
**/

var admin = new User({
  provider: 'local',
  role: 'admin',
  name: 'Admin',
  email: 'admin@admin.com',
  password: 'admin'
});

var khocef = new User({
  provider: 'local',
  name: 'khocef',
  email: 'khocef@monefy.com',
  password: 'test'
});

User.find({}).remove(function() {
  User.create(admin, khocef, function(){ console.log('finished populating users'); });
});

/**
 * Categories 
**/

var communications = new Category({
  name: 'Communications'
});

var home = new Category({
  name: 'Home',
  active: false
});

var food = new Category({
  name: 'Food',
  user: admin,
  isUserDefined: true
});

var trasport = new Category( {
  name: 'Transport',
  user: khocef,
  isUserDefined: true
});

var clothes = new Category({
  name: 'Clothes',
  active: false
});

Category.find({}).remove(function() {
  Category.create(communications, home, food, trasport, clothes, function() { console.log('finished populating categories'); });
});

/**
 * Costs 
**/

Cost.find({}).remove(function() {

  Cost.create({
    ammount: 570,
    description: 'Appartment rent.',
    user: khocef,
    category: home
  }, {
    ammount: 400,
    description: 'Food.',
    user: khocef,
    category: food
  }, {
    ammount: 30,
    description: 'Electricity.',
    user: khocef,
    category: home
  }, function() {
    console.log('finished populating costs')
  });
});
