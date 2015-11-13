'use strict';

describe('Service: categoryService', function () {

  // load the service's module
  beforeEach(module('monefyApp'));

  // instantiate service
  var category;
  beforeEach(inject(function (_categoryService_) {
    category = _categoryService_;
  }));

  it('should do something', function () {
    expect(!!category).toBe(true);
  });

});
