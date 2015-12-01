'use strict';

angular.module('monefyApp')
  .service('categoryService', function ($http, Auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.loadAllCategories = function() {
	    return $http({
	    	method: 'GET',
	    	url: '/api/categories'
	    });
    };

    this.loadAllCategoriesByUser = function() {
    	var userId = Auth.getCurrentUser()._id;
	    return $http({
	    	method: 'GET',
	    	url: '/api/categories/me/' + userId
	    });
    };
  });
