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
      	
      	$scope.addNumber = function(number) {
      		if ($scope.text.length < $scope.maxLength) {
      			$scope.text += number;
          }
          if ($scope.text.length === $scope.maxLength) {
            $scope.disableNumpad = true;
          }
      	};

      	$scope.clear = function() {
      		$scope.text = "";
          $scope.disableNumpad = false;
      	};
      	
      	$scope.removeLast = function() {
      		if ($scope.text.length >= 1) {
            $scope.text = $scope.text.substring(0, $scope.text.length - 1);
            $scope.disableNumpad = false;
          }
      	};

      }],
      link: function (scope, element, attrs) {
      }
    };
  });