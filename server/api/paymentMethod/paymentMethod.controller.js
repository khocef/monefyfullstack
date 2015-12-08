'use strict';

var _ = require('lodash');
var PaymentMethod = require('./paymentMethod.model');

// Get list of paymentMethods
exports.index = function(req, res) {
  PaymentMethod.find(function (err, paymentMethods) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(paymentMethods);
  });
};

// Get a single paymentMethod
exports.show = function(req, res) {
  PaymentMethod.findById(req.params.id, function (err, paymentMethod) {
    if(err) { return handleError(res, err); }
    if(!paymentMethod) { return res.status(404).send('Not Found'); }
    return res.json(paymentMethod);
  });
};

// Creates a new paymentMethod in the DB.
exports.create = function(req, res) {
  PaymentMethod.create(req.body, function(err, paymentMethod) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(paymentMethod);
  });
};

// Updates an existing paymentMethod in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PaymentMethod.findById(req.params.id, function (err, paymentMethod) {
    if (err) { return handleError(res, err); }
    if(!paymentMethod) { return res.status(404).send('Not Found'); }
    var updated = _.merge(paymentMethod, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(paymentMethod);
    });
  });
};

// Deletes a paymentMethod from the DB.
exports.destroy = function(req, res) {
  PaymentMethod.findById(req.params.id, function (err, paymentMethod) {
    if(err) { return handleError(res, err); }
    if(!paymentMethod) { return res.status(404).send('Not Found'); }
    paymentMethod.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}