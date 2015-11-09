'use strict';

describe('Directive: time', function () {

  // load the directive's module and view
  beforeEach(module('monefyApp'));
  beforeEach(module('app/time/time.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<time></time>');
    element = $compile(element)(scope);
    scope.$apply();
    //expect(element.text()).toBe('this is the time directive');
  }));
});