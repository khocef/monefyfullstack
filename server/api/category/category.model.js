'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

var CategorySchema = new Schema({
  name: {
  	type: String
  },
  active: {
      type: Boolean,
      default: true
  }, isUserDefined: {
      type: Boolean,
      default: false
  }, user: {
      type: Schema.ObjectId,
      ref: 'User'
  }, icon: {
    type: String,
    default: ''
  }
});

// Validate empty name
CategorySchema
  .path('name')
  .validate(function(name) {
    return name.length > 0;
  }, 'Please fill in the category name.');

module.exports = mongoose.model('Category', CategorySchema);