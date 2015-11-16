'use strict';

angular.module('monefyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('costs', {
      	abstract: true,
        url: '/costs',
        template: '<ui-view/>'
      })
      .state('costs.list', {
      	url: '',
      	templateUrl: 'app/cost/views/list-costs.html',
        authenticate: true
      })
      .state('costs.create', {
      	url: '/create',
      	templateUrl: 'app/cost/views/create-cost.html',
        authenticate: true
      })
      .state('costs.edit', {
        url: '/:costId/edit',
        templateUrl: 'app/cost/views/edit-cost.html',
        authenticate: true
      });
  });