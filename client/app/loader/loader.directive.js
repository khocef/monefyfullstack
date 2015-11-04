'use strict';

angular.module('monefyApp')
  .directive('loader', function ($log) {
    return {
      templateUrl: 'app/loader/loader.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	scope.$on('HTTP_CALL_STARTED', function() {
      		$log.info('HTTP_CALL_STARTED directive');
      		return element.show();
      	});

      	scope.$on('HTTP_REPONSE_RECIEVED', function() {
      		$log.info('HTTP_CALL_STARTED directive');
      		return element.hide();
      	});
      }
    };
  });