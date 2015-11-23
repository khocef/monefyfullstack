'use strict';

describe('Directive: loader', function () {

  // load the directive's module and view
  beforeEach(module('monefyApp'));
  beforeEach(module('app/loader/loader.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

});