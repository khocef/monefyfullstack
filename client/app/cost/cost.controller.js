'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$http', 'costService', 'Modal', function ($scope, $log, $http, costService, Modal) {
    $scope.costs = [];

    $scope.loadAllCost = function() {
        costService.getCosts().then(function (args) {
        	console.log(args);
        	$scope.costs = args.data;
        }, function() {

        });
    };

    $scope.delete = Modal.confirm.delete(function(cost) {
    	$log.info(cost);
    });

    $scope.loadAllCost();
  }]);
