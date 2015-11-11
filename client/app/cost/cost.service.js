'use strict';

angular.module('monefyApp')
  .service('costService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.loadAllCosts = function() {
	    return $http({
	    	method: 'GET',
	    	url: '/api/costs'
	    });
    };

    this.createCost = function(cost) {
      return $http({
        method: 'POST',
        url: '/api/costs',
        data: cost
      });
    };

  });
