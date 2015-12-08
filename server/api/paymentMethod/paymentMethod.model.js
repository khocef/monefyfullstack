'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PaymentMethodSchema = new Schema({
  name: {
  	type: String
  },
  active: {
  	type: Boolean,
  	default: true
  }
});

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);