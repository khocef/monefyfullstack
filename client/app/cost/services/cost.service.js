'use strict';

angular.module('monefyApp')
  .service('costService', function ($http, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.costs = [];
    this.cost = {
      'ammount': '',
      'description': '',
      'user': Auth.getCurrentUser(),
      'category': null
    };

    this.clear = function() {
      this.cost = {
        'ammount': '',
        'description': '',
        'user': Auth.getCurrentUser(),
        'category': null
      };
    };

    this.setCategory = function(category){
      this.cost.category = category;
    };

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