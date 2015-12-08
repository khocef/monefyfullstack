'use strict';

describe('Service: paymentMethodService', function () {

  // load the service's module
  beforeEach(module('monefyApp'));

  // instantiate service
  var paymentMethodService;
  beforeEach(inject(function (_paymentMethodService_) {
    paymentMethodService = _paymentMethodService_;
  }));

  it('should do something', function () {
    expect(!!paymentMethodService).toBe(true);
  });

});
