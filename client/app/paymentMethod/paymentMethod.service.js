'use strict';

angular.module('monefyApp')
  .service('paymentMethodService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    this.paymentMethods = [];

    this.loadAllPaymentMethods = function() {
	    return $http({
	    	method: 'GET',
	    	url: '/api/paymentmethods'
	    });
    };
  });
