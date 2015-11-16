'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$state', 'costService', 'Auth', 'Modal', 
    function ($scope, $log, $state, costService, Auth, Modal) {
    
    $scope.costs = [];
    $scope.cost = costService.cost;

    /*
        Pouvoir saisir des montant avec des centimes et des euros,  {unit, cents, symbole}
    */
    $scope.ammountMaxLength = 8;
    $scope.symbole = '€';

    $scope.errors = {};

    $scope.loadAllCost = function() {
        costService.loadAllCosts().then(function (res) {
        	$scope.costs = res.data;
        }, function() {
            
        });
    };

    $scope.create = function(form) {

        if(form.$valid) {
            //$scope.cost.user = Auth.getCurrentUser();
            costService.createCost($scope.cost).then(function(res) {
                costService.clear();
                $state.go('costs.list');
            }, function(err) {
                $log.error('unable to save cost');
            });
        }
    };

    $scope.selectCategory = function(cost) {
        //angular.copy(cost, costService.cost);
        $state.go('categories.list');
    };

    $scope.delete = Modal.confirm.delete(function(cost) {
    	$log.info(cost);
    });

  }]);
