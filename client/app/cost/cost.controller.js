'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$http', 'costService', 'Modal', function ($scope, $log, $http, costService, Modal) {
    
    $scope.costs = [];
    $scope.cost = {
        'ammount': '',
        'description': ''
    };

    /*
        Pouvoir saisir des montant avec des centimes et des euros,  {unit, cents, symbole}
    */
    $scope.ammountMaxLength = 8;
    $scope.symbole = '€';

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

  }]);
