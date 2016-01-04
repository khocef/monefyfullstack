'use strict';

var _ = require('lodash');
var Cost = require('./cost.model');

// Get list of costs by user
exports.index = function(req, res) {
  var userId = req.query.userId;
  var from = req.query.from;
  var to = req.query.to;

  Cost.find( { $and: [
                {'user': userId},
                { $and: [
                  {'created': {$gte: from}},
                  {'created': {$lte: to}}
                  ] 
                }]
              })
    .sort('-created')
    .populate('user', 'name')
    .populate('category', 'name')
    .populate('paymentMethod', 'name')
    .exec(function (err, costs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(costs);
  });
};

// Get list of costs by user and payment method
exports.findByUserAndPaymentMethod = function(req, res) {
  var from = req.query.from;
  var to = req.query.to;
  var userId = req.query.userId;
  var paymentMethodId = req.query.paymentMethodId;
  
  Cost.find({ $and: [
                {'user': userId},
                {'paymentMethod': paymentMethodId},
                { $and: [
                  {'created': {$gte: from}},
                  {'created': {$lte: to}}
                  ] 
                }
              ]
            })
    .sort('-created')
    .populate('user', 'name')
    .populate('category', 'name')
    .populate('paymentMethod', 'name')
    .exec(function (err, costs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(costs);
  });
};

// Get a single cost
exports.show = function(req, res) {
  Cost.findById(req.params.id, function (err, cost) {
    if(err) { return handleError(res, err); }
    if(!cost) { return res.status(404).send('Not Found'); }
    return res.json(cost);
  });
};

// Creates a new cost in the DB.
exports.create = function(req, res) {
  Cost.create(req.body, function(err, cost) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(cost);
  });
};

// Updates an existing cost in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Cost.findById(req.params.id, function (err, cost) {
    if (err) { return handleError(res, err); }
    if(!cost) { return res.status(404).send('Not Found'); }
    var updated = _.merge(cost, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(cost);
    });
  });
};

// Deletes a cost from the DB.
exports.destroy = function(req, res) {
  Cost.findById(req.params.id, function (err, cost) {
    if(err) { return handleError(res, err); }
    if(!cost) { return res.status(404).send('Not Found'); }
    cost.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}