'use strict';

angular.module('monefyApp')
  .directive('time', function ($filter) {
    return {
      templateUrl: 'app/time/time.html',
      restrict: 'E',
      scope: {
        format: '@'
      },
      link: function (scope, element, attrs) {
        var now = new Date();
      	scope.time = $filter('date')(now, scope.format);
      }
    };
  });