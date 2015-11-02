'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

/**
 * Cost Schema
 */
var CostSchema = new Schema({
    // Cost model fields   
    created: {
        type: Date,
        default: Date.now
    },
    ammount: {
        type: Number,
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */

// Validate empty ammount
CostSchema
  .path('ammount')
  .validate(function(ammount) {
    return ammount > 0;
  }, 'Please fill in the ammount');


module.exports = mongoose.model('Cost', CostSchema);