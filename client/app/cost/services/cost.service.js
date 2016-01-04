'use strict';

angular.module('monefyApp')
  .service('costService', function ($http, Auth, moment) {
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


    this.selectedMonth = {
        'month': {'month': '', name: ''},
        'moment' : moment()
      };

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

    this.setSelectedMonth = function(month) {
      this.selectedMonth = month;
    };

    this.loadAllCosts = function(start, end) {
      return $http({
        method: 'GET',
        url: '/api/costs',
        params: {
          userId: this.cost.user._id,
          from: start,
          to: end
        }
      });
    };

    this.loadAllCostsByPaymentMethod = function(selectedPaymentMethod, start, end) {
	    return $http({
	    	method: 'GET',
	    	url: '/api/costs/paymentmethod',
        params: {
          userId: this.cost.user._id,
          paymentMethodId : selectedPaymentMethod._id,
          from: start,
          to: end
        }
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
