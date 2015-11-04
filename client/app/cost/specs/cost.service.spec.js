'use strict';

describe('Service: costService', function () {

  // load the service's module
  beforeEach(module('monefyApp'));

  // instantiate service
  var cost, httpBackend;
  beforeEach(inject(function (_costService_, $httpBackend) {
    cost = _costService_;
    httpBackend = $httpBackend;
  }));

  it('expect costService should to be truthy', function () {
    expect(!!cost).toBe(true);
  });

});
