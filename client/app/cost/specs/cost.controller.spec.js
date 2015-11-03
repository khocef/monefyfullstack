'use strict';

describe('Controller: CostCtrl', function () {

  // load the controller's module
  beforeEach(module('monefyApp'));

  var CostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CostCtrl = $controller('CostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
