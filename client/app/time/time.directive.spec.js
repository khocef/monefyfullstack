'use strict';

describe('Directive: time', function () {

  // load the directive's module and view
  beforeEach(module('monefyApp'));
  beforeEach(module('app/time/time.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

});