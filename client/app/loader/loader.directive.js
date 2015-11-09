'use strict';

angular.module('monefyApp')
  .directive('loader', function ($rootScope, $log, $timeout) {
    return {
      templateUrl: 'app/loader/loader.html',
      restrict: 'EA',
      scope: {},
      link: function (scope, element, attrs) {
      	$rootScope.$on('HTTP_CALL_STARTED', function() {
          //$(element).removeClass('hide');
      		$(element).show();
          $log.info('HTTP_CALL_STARTED directive');
      	});

      	$rootScope.$on('HTTP_REPONSE_RECIEVED', function() {
          $timeout(function() {
            //$(element).addClass('hide');
            $(element).hide();
          }, 1000);
          $log.info('HTTP_REPONSE_RECIEVED directive');
      	});
      }
    };
  });