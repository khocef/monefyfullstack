'use strict';

angular.module('monefyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('paymentMethod', {
        url: '/paymentMethods',
        templateUrl: 'app/paymentMethod/views/paymentMethod.html',
        controller: 'PaymentMethodCtrl'
      });
  });