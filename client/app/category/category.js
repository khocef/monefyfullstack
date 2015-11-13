'use strict';

angular.module('monefyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories', {
      	abstract: true,
        url: '/categories',
        template: '<ui-view/>'
      })
      .state('categories.list', {
      	url: '',
      	templateUrl: 'app/category/views/list-categories.html'
      })
      .state('categories.create', {
      	url: '/create',
      	templateUrl: 'app/category/views/create-category.html'
      })
      .state('categories.edit', {
        url: '/:categoryId/edit',
        templateUrl: 'app/category/views/edit-category.html'
      });
  });