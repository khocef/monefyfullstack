'use strict';

angular.module('monefyApp')
  .directive('loader', function ($rootScope, $log, $timeout) {
    var isolateScope = $rootScope.$new();  // creates a new isolate copy of $rootScope
    return {
      templateUrl: 'app/loader/loader.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	isolateScope.$on('HTTP_CALL_STARTED', function() {
      		$log.info('HTTP_CALL_STARTED directive');
      		$(element).show();
      	});

      	isolateScope.$on('HTTP_REPONSE_RECIEVED', function() {
      		$log.info('HTTP_REPONSE_RECIEVED directive');
          $timeout(function() {
            $(element).hide();
          }, 1000);
      	});
      }
    };
  });