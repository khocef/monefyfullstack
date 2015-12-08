'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$state', '$controller', 'costService', 'paymentMethodService', 'Auth', 'Modal', 
    function ($scope, $log, $state, $controller, costService, paymentMethodService, Auth, Modal) {
    
    $scope.costs = [];
    $scope.cost = costService.cost;

    /*
        Pouvoir saisir des montant avec des centimes et des euros,  {unit, cents, symbole}
    */
    $scope.ammountMaxLength = 8;
    $scope.symbole = '€';

    $scope.errors = {};


    $scope.paymentMethods = [];
    $scope.selectedPaymentMethod = costService.selectedPaymentMethod;


    $scope.loadAllCost = function() {

        paymentMethodService.loadAllPaymentMethods().then(function (res) {
            if ($scope.selectedPaymentMethod === undefined || $scope.selectedPaymentMethod === null) {
                $scope.paymentMethods = res.data;
                $scope.paymentMethods.push({_id: '-1', name: 'All'});
                $scope.selectedPaymentMethod = $scope.paymentMethods[$scope.paymentMethods.length - 1];
            } 
            if ($scope.selectedPaymentMethod._id === '-1') {
                costService.loadAllCosts().then(function (res) {
                    $scope.costs = res.data;
                }, function(err) {
                    // handle error for cost loading 
                });
            } else {
                costService.loadAllCostsByPaymentMethod($scope.selectedPaymentMethod).then(function (res) {
                    $scope.costs = res.data;
                }, function(err) {
                    // handle error for cost loading 
                });
            }

        }, function(err) {
          // handle error for payment methods loading
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


    $scope.setPaymementMethod = function(method) {
        $scope.selectedPaymentMethod = method;
        $scope.loadAllCost();
    };

  }]);
