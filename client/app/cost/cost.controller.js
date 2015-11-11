'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$location', 'costService', 'Auth', 'Modal', function ($scope, $log, $location, costService, Auth, Modal) {
    
    $scope.costs = [];
    $scope.cost = {
        'ammount': '',
        'description': '',
        'user': Auth.getCurrentUser()
    };

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
                $location.url('/costs');
            }, function(err) {
                $log.error('unable to save cost');
            });
        }
    };

    $scope.delete = Modal.confirm.delete(function(cost) {
    	$log.info(cost);
    });

  }]);
