'use strict';

angular.module('monefyApp')
  .service('costService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getCosts = function() {
    	
	    return $http({
	    	method: 'GET',
	    	url: '/api/costs'
	    });
    }

  });
