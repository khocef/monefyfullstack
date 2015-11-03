'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$http', 'costService', function ($scope, $log, $http, costService) {
    $scope.costs = [];


    costService.getCosts().then(function (args) {
    	console.log(args);
    	$scope.costs = args.data;
    }, function() {

    });

    $scope.delete = function(cost) {
    	$log.info(cost);
    };
  }]);
