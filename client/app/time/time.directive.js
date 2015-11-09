'use strict';

angular.module('monefyApp')
  .directive('time', function () {
    return {
      templateUrl: 'app/time/time.html',
      restrict: 'E',
      scope: {},
      link: function (scope, element, attrs) {
      	scope.time = 'monday 09';
      }
    };
  });