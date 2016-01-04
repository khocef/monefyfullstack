'use strict';

angular.module('monefyApp')
  .controller('CostCtrl', ['$scope', '$log', '$state', '$controller', 'costService', 'paymentMethodService', 'Auth', 'Modal', 'utils', 
    function ($scope, $log, $state, $controller, costService, paymentMethodService, Auth, Modal, utils) {
    
    /*$controller('PaymentMethodCtrl', {
        $scope: $scope
    });*/

    $scope.costs = [];
    $scope.cost = costService.cost;

    /*
        Pouvoir saisir des montant avec des centimes et des euros,  {unit, cents, symbole}
    */
    $scope.ammountMaxLength = 8;
    $scope.symbole = '€';

    $scope.errors = {};

    $scope.paymentMethods = [];
    $scope.displayedCostsSelectedPaymentMethod = costService.displayedCostsSelectedPaymentMethod;

    $scope.selectedDate = '';



    $scope.loadAllCost = function() {
        var year = costService.selectedMonth.moment.get('year');
        var month = costService.selectedMonth.moment.get('month');
        var range = utils.getMonthDateRange(year, month);

        paymentMethodService.loadAllPaymentMethods().then(function (res) {
            if ($scope.displayedCostsSelectedPaymentMethod === undefined || $scope.displayedCostsSelectedPaymentMethod === null) {
                $scope.paymentMethods = res.data;
                $scope.paymentMethods.push({_id: '-1', name: 'All'});
                $scope.displayedCostsSelectedPaymentMethod = $scope.paymentMethods[$scope.paymentMethods.length - 1];
            } 
            if ($scope.displayedCostsSelectedPaymentMethod._id === '-1') {
                costService.loadAllCosts(range.start, range.end).then(function (res) {
                    $scope.costs = res.data;
                }, function(err) {
                    // handle error for cost loading 
                });
            } else {
                costService.loadAllCostsByPaymentMethod($scope.displayedCostsSelectedPaymentMethod, range.start, range.end).then(function (res) {
                    $scope.costs = res.data;
                }, function(err) {
                    // handle error for cost loading 
                });
            }

        }, function(err) {
          // handle error for payment methods loading
        });
    };

    $scope.setDisplayedCostsPaymementMethod = function(method) {
        if ($scope.displayedCostsSelectedPaymentMethod._id !== method._id) {
            $scope.displayedCostsSelectedPaymentMethod = method;
            $scope.loadAllCost();
        } else {
            $log.info('Payment Method "'+ method.name + '" unchanged.')
        }
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

    $scope.loadAllPaymentMethods = function() {
        paymentMethodService.loadAllPaymentMethods().then(function (res) {
            $scope.paymentMethods = res.data;
            if(costService.cost.paymentMethod === null || costService.cost.paymentMethod === undefined) {
                $scope.setPaymementMethod(res.data[0]);
            }
        }, function(err) {
            // handle paymentmethods loading error
        });
    };

    $scope.setPaymementMethod = function(method) {
        costService.setPaymentMethod(method);
    };

  }]);
