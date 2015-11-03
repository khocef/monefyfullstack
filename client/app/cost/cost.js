'use strict';

angular.module('monefyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cost', {
        url: '/cost',
        templateUrl: 'app/cost/views/cost.html',
        controller: 'CostCtrl'
      });
  });