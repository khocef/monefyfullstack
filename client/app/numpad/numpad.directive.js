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

      	$scope.addNumber = function(number) {
      		if ($scope.text.length < $scope.maxLength && $scope.floatCount < 2) {
      			$scope.text += number;
          }
          if ($scope.text.length === $scope.maxLength) {
            $scope.disableNumpad = true;
          }
          if ($scope.floated && $scope.floatCount < 2) {
            $scope.floatCount++;
          }
      	};

        $scope.addSymbole = function(symbole) {
          if (symbole === '.' && !$scope.floated) {
            if ($scope.text.length === 0) {
              $scope.addNumber(0);
            }
            $scope.text += symbole;
            $scope.floated = true;
          }
        };

      	$scope.clear = function() {
      		$scope.text = "";
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

      }],
      link: function (scope, element, attrs) {
      }
    };
  });