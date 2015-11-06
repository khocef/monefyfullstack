'use strict';

angular.module('monefyApp')
  .directive('numpad', function () {
    return {
      templateUrl: 'app/numpad/numpad.html',
      restrict: 'E',
      scope: {
     	text: '=',
     	maxLength: '='
      },
      controller: ['$scope', '$log', function($scope, $log) {
      	
      	$scope.addNumber = function(number) {
      		if ($scope.text.length < $scope.maxLength) {
      			$scope.text += number;
  			};
      	};

      	$scope.clear = function() {
      		$scope.text = "";
      	};
      	
      	$scope.removeLast = function() {
      		if ($scope.text.length >= 1) {
                $scope.text = $scope.text.substring(0, $scope.text.length - 1);
            }
      	};

      }],
      link: function (scope, element, attrs) {
      }
    };
  });