'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model'),
    Category = require('../category/category.model');

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
    }, 
    category: {
        type: Schema.ObjectId,
        ref: 'Category'
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
  }, 'Please fill in the cost ammount.');


CostSchema
    .path('description')
    .validate(function(description) {
        return description.length > 0;
    }, 'Please fill in the cost description.');

module.exports = mongoose.model('Cost', CostSchema);