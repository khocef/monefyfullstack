'use strict';

angular.module('monefyApp')
  .service('categoryService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.loadAllCategories = function() {
	    return $http({
	    	method: 'GET',
	    	url: '/api/categories'
	    });
    };
  });
