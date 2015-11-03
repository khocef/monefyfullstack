'use strict';

describe('Service: cost', function () {

  // load the service's module
  beforeEach(module('monefyApp'));

  // instantiate service
  var cost;
  beforeEach(inject(function (_cost_) {
    cost = _cost_;
  }));

  it('should do something', function () {
    expect(!!cost).toBe(true);
  });

});
