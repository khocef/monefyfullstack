'use strict';

angular.module('monefyApp')
  .service('costService', function ($http, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.costs = [];
    this.cost = {
      'ammount': '',
      'description': '',
      'user': Auth.getCurrentUser(),
      'category': null,
      'paymentMethod': null,
      'created': new Date()
    };

    this.selectedPaymentMethod = null;

    this.total = '';

    this.clear = function() {
      this.cost = {
        'ammount': '',
        'description': '',
        'user': Auth.getCurrentUser(),
        'category': null,
        'paymentMethod': null,
        'created': new Date()
      };
    };

    this.setPaymentMethod = function(paymentMethod){
      this.cost.paymentMethod = paymentMethod;
    };

    this.setCategory = function(category){
      this.cost.category = category;
    };

    this.setCreated = function(created) {
      this.cost.created = created;
    };

    this.loadAllCosts = function() {
      return $http({
        method: 'GET',
        url: '/api/costs/' + this.cost.user._id
      });
    };

    this.loadAllCostsByPaymentMethod = function(selectedPaymentMethod) {
	    return $http({
	    	method: 'GET',
	    	url: '/api/costs/' + this.cost.user._id + '/' + selectedPaymentMethod._id
	    });
    };

    this.createCost = function(cost) {
      console.log(cost);
      return $http({
        method: 'POST',
        url: '/api/costs',
        data: cost
      });
    };
  });
