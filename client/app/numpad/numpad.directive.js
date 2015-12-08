'use strict';

angular.module('monefyApp')
  .directive('numpad', function () {
    return {
      templateUrl: 'app/numpad/numpad.html',
      restrict: 'E',
      scope: {
     	  text: '=',
     	  maxLength: '=',
        disableNumpad: '='
      },
      controller: ['$scope', '$log', function($scope, $log) {
      	
        $scope.floated = false;
        $scope.floatCount = 0;

        $scope.disableNumpad = false;

        $scope.memoryA = 0;
        $scope.memoryB = 0;
        $scope.clearValue = true;

        $scope.selectedOperation = null;


        $scope.operationKeys = [
          {label: "+", operation: function (a, b) {return a + b}},
          {label: "-", operation: function (a, b) {return a - b}},
          {label: "*", operation: function (a, b) {return a * b}},
          {label: "/", operation: function (a, b) {return a / b}}
        ];


        /**
         * @param  {number}
         * @return {void}
         */
      	$scope.digit = function(number) {
      		if ($scope.clearValue) {
             	$scope.text = number;
              	$scope.clearValue = false;
	        } else {
              	$scope.text += number;
          	}

            $scope.memoryB = $scope.text;
			
    			if ($scope.floated && $scope.floatCount < 2) {
    				$scope.floatCount++;
    			}
    			
    			if ($scope.text.length === $scope.maxLength || $scope.floatCount === 2) {
    				$scope.disableNumpad = true;
    			}
      	};

        $scope.add = function() {
          	$scope.selectedOperation = $scope.operationKeys[0].operation;
          	$scope.memorize();
          	$scope.init();
        };

        $scope.substract = function() {
          	$scope.selectedOperation = $scope.operationKeys[1].operation;
          	$scope.memorize();
          	$scope.init();
        };

        $scope.multiply = function() {
        	$scope.selectedOperation = $scope.operationKeys[2].operation;
          	$scope.memorize();
          	$scope.init();
        };

        $scope.divide = function() {
	        $scope.selectedOperation = $scope.operationKeys[3].operation;
          	$scope.memorize();
          	$scope.init();
        };

        $scope.calculate = function() {
          if($scope.selectedOperation!=null) {
          	if ($scope.memoryB === '0' && $scope.selectedOperation.label === "/") {
        		  $scope.text = '0';
            } else {
            	$scope.text = $scope.selectedOperation(parseFloat($scope.memoryA), parseFloat($scope.memoryB));
            }
            if ($scope.text.contains('.')) {
	            $scope.text = $scope.text.toFixed(2);
            }
            $scope.memoryA = $scope.text;
            $scope.init();
          }
        };

        $scope.floatingPoint = function() {
			    if ($scope.text.length === 0 || $scope.clearValue) {
        		$scope.digit('0');
        	}
        	if (!$scope.floated) {
          	$scope.text += '.';
          	$scope.floated = true;
        	}
        };

      	$scope.clear = function() {
      		$scope.text = '';

        	$scope.memoryA = 0;
        	$scope.memoryB = 0;
        	$scope.clearValue = true;
	        $scope.selectedOperation = null;

          	$scope.init();
      	};

      	$scope.memorize = function() {
      		$scope.memoryA = $scope.text;
          $scope.memoryB = $scope.text;
      	};

      	$scope.init = function() {
      		$scope.clearValue = true;
          	$scope.disableNumpad = false;
          	$scope.floated = false;
          	$scope.floatCount = 0;
      	};
      	
      	$scope.removeLast = function() {
      		if ($scope.text.length >= 1) {

            if ($scope.floatCount > 0 && $scope.floated) {
              $scope.floatCount--;
            }

            if ($scope.text.charAt($scope.text.length - 1) === '.') {
              $scope.floated = false;
            }

            $scope.text = $scope.text.substring(0, $scope.text.length - 1);
            $scope.disableNumpad = false;
          }
      	};

      }]
    };
  });