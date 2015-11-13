'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
  	type: String
  },
  active: {
  	type: Boolean,
  	default: true
  }
});

// Validate empty name
CategorySchema
  .path('name')
  .validate(function(name) {
    return name.length > 0;
  }, 'Please fill in the category name.');

module.exports = mongoose.model('Category', CategorySchema);