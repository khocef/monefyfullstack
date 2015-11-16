'use strict';

angular.module('monefyApp')
  .directive('loader', function ($rootScope, $log, $timeout) {
    return {
      templateUrl: 'app/loader/loader.html',
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {
        // hide the loader by default
        $timeout(function() {
            $(element).hide();
          }, 1000);

      	$rootScope.$on('HTTP_CALL_STARTED', function() {
      		$(element).show();
          $log.info('HTTP_CALL_STARTED directive');
      	});

      	$rootScope.$on('HTTP_REPONSE_RECIEVED', function() {
          $timeout(function() {
            $(element).hide();
          }, 1000);
          $log.info('HTTP_REPONSE_RECIEVED directive');
      	});
      }
    };
  });