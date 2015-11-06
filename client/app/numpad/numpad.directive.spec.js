'use strict';

describe('Directive: numpad', function () {

  // load the directive's module and view
  beforeEach(module('monefyApp'));
  beforeEach(module('app/numpad/numpad.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<numpad></numpad>');
    element = $compile(element)(scope);
    scope.$apply();
    //expect(element.text()).toBe('this is the numpad directive');
  }));
});