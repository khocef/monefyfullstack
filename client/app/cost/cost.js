'use strict';

angular.module('monefyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('costs', {
      	abstract: true,
        url: '/costs',
        template: '<ui-view/>',
        controller: 'CostCtrl'
      })
      .state('costs.list', {
      	url: '',
      	templateUrl: 'app/cost/views/list-costs.html'
      })
      .state('costs.create', {
      	url: '/create',
      	templateUrl: 'app/cost/views/create-cost.html'
      })
      .state('costs.edit', {
        url: '/:costId/edit',
        templateUrl: 'app/cost/views/edit-cost.html'
      });
  });