'use strict';

angular.module('monefyApp')
  .directive('time', function ($filter, costService) {
    return {
      templateUrl: 'app/time/time.html',
      restrict: 'E',
      scope: {
        format: '@'
      },
      link: function (scope, element, attrs) {
        scope.now = costService.cost.created;

        scope.datePickerOptions = {
          'opened': false
        };

        scope.openCalendar = function() {
          scope.datePickerOptions.opened = true;
        };

        scope.update = function() {
          costService.setCreated(scope.now);
        };
      }
    };
});