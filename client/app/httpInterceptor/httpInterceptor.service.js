'use strict';

angular.module('monefyApp')
  .factory('httpInterceptor', function ($q, $rootScope, $log) {
    // Public API here
    return {
      request: function(config) {
        if(config.url.indexOf('/api/') !== -1) {
          $log.info('httpInterceptor send ' + config.method + ' request to ' + config.url);
          $rootScope.$broadcast('HTTP_CALL_STARTED');
        }
        return config;
      },
      response: function(response) {
        if(response.config.url.indexOf('/api/') !== -1) {
          $log.info('httpInterceptor got response from ' + response.config.url);
          $rootScope.$broadcast('HTTP_REPONSE_RECIEVED');
        }
        return response;
      },
      responseError: function(rejection) {
        if(rejection.config.url.indexOf('/api/') !== -1) {
          $log.info('httpInterceptor got response error from ' + rejection.config.url);
          $rootScope.$broadcast('HTTP_RESPONSE_ERROR');
        }
        return $q.reject(rejection);
      }
    };
  }).config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
}]);
