/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Cost = require('../api/cost/cost.model');
var Category = require('../api/category/category.model');
var PaymentMethod = require('../api/paymentMethod/paymentMethod.model');

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
 * Payment Methods
 */

var card = new PaymentMethod({
  name: 'Card',
  active: true
});

var cash = new PaymentMethod({
  name: 'Cash',
  active: true
});

var cash = new PaymentMethod({
  name: 'Cheque',
  active: true
});

PaymentMethod.find({}).remove(function() {
  PaymentMethod.create(card, cash, function() { console.log('finished populating PaymentMethods')})
});

/**
 * Costs 
**/

Cost.find({}).remove(function() {

  Cost.create({
    ammount: 570,
    description: 'Appartment rent.',
    user: khocef,
    category: home,
    paymentMethod: card,
    created: new Date(2015, 11, 17)
  }, {
    ammount: 400,
    description: 'Food.',
    user: khocef,
    category: food,
    paymentMethod: cash
  }, {
    ammount: 30,
    description: 'Electricity.',
    user: khocef,
    category: home,
    paymentMethod: card
  }, function() {
    console.log('finished populating costs')
  });
});
