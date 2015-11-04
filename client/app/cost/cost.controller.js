'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$http', 'costService', 'Modal', function ($scope, $log, $http, costService, Modal) {
    $scope.costs = [];

    $scope.loadAllCost = function() {
        costService.loadAllCosts().then(function (args) {
        	$scope.costs = args.data;
        }, function() {
            
        });
    };

    $scope.create = function() {

    };

    $scope.delete = Modal.confirm.delete(function(cost) {
    	$log.info(cost);
    });

    $scope.loadAllCost();
  }]);
