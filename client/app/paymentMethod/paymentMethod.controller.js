'use strict';

angular.module('monefyApp')
  .controller('PaymentMethodCtrl', ['$scope', 'paymentMethodService', 'costService', 
  	function ($scope, paymentMethodService, costService) {

  		$scope.paymentMethods = [];
  		$scope.selectedPaymentMethod = costService.cost.paymentMethod;

  		$scope.loadAllPaymentMethods = function() {
        	paymentMethodService.loadAllPaymentMethods().then(function (res) {
        		$scope.paymentMethods = res.data;
        		$scope.selectedPaymentMethod = $scope.paymentMethods[0];
        	}, function(err) {
        		// handle paymentmethods loading error
        	});
    	};

    	$scope.setPaymementMethod = function(method) {
    		$scope.selectedPaymentMethod = method;
    	};

  }]);
