'use strict';

angular.module('monefyApp')
  .controller('CategoryCtrl', ['$scope', '$log', '$location', 'categoryService', 'Auth', 'Modal', '$uibModal', function ($scope, $log, $location, categoryService, Auth, Modal, $uibModal) {
    $scope.message = 'Hello';

    $scope.categories = [];
    $scope.isAdmin = Auth.isAdmin();


    $scope.loadAllCategories = function() {
    	categoryService.loadAllCategories().then(function (res) {
        	$scope.categories = res.data;
        }, function() {
            
        });
    };

    $scope.disableCategory = Modal.confirm.delete(function(category) {
		$log.info(category);
	});
  

}]);
