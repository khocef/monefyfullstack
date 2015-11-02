'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

var validateAmmountProperty = function (ammount) {
    return ammount > 0;
};

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
        validate: [validateAmmountProperty, 'Please fill in the ammount']
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


module.exports = mongoose.model('Cost', CostSchema);