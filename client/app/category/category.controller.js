'use strict';

angular.module('monefyApp')
  .controller('CategoryCtrl', ['$scope', '$log', '$state', 'categoryService', 'Auth', 'Modal', '$uibModal','costService', 
  	function ($scope, $log, $state, categoryService, Auth, Modal, $uibModal, costService) {
    $scope.message = 'Hello';

    $scope.categories = [];
    $scope.isAdmin = Auth.isAdmin();

    $scope.loadAllCategories = function() {
    	categoryService.loadAllCategoriesByUser().then(function (res) {
        	$scope.categories = res.data;
        }, function() {
            
        });
    };

    $scope.disableCategory = Modal.confirm.delete(function(category) {
		$log.info(category);
	});
  	
  	$scope.selectCategory = function(category) {
      if (category.active) {
        costService.setCategory(category);
        $state.go('costs.create');
      }
  	};

}]);
