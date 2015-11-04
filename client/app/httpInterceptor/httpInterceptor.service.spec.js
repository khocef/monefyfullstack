'use strict';

describe('Service: httpInterceptor', function ($q, $rootScope, $log) {

  // load the service's module
  beforeEach(module('monefyApp'));

  // instantiate service
  var httpInterceptor;
  beforeEach(inject(function (_httpInterceptor_) {
    httpInterceptor = _httpInterceptor_;
  }));

  it('should do something', function () {
    expect(!!httpInterceptor).toBe(true);
  });

});
