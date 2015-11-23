'use strict';

describe('Directive: numpad', function () {

  // load the directive's module and view
   beforeEach(module('monefyApp'));
   beforeEach(module('app/numpad/numpad.html'));

 var scope, compiledElement, isolatedScope;

     beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();

        var element = angular.element("<numpad></numpad>");
        compiledElement  = $compile(element)(scope);
        scope.$digest();

        isolatedScope = compiledElement.isolateScope();

        isolatedScope.text = '';
        isolatedScope.maxLength= 4;
        isolatedScope.disableNumpad = false;

     }));
 
     it('should not be floated when initialized', inject(function() {
        expect(scope.floated).toBeFalsy();
     }));

     it('should addNumber', inject(function() {

      isolatedScope.addNumber(1);
      expect(isolatedScope.text).toEqual('1');

      isolatedScope.addNumber(2);
      isolatedScope.addNumber(3);
      isolatedScope.addNumber(4);
      expect(isolatedScope.text).toEqual('1234');

     }));

     it('should clear numpad', inject(function() {

      expect(isolatedScope.disableNumpad).toBeFalsy();

      isolatedScope.addNumber(1);
      isolatedScope.addNumber(2);
      isolatedScope.addNumber(3);
      isolatedScope.addNumber(4);

      expect(isolatedScope.text).toEqual('1234');
      expect(isolatedScope.disableNumpad).toBeTruthy();

      isolatedScope.clear();

      expect(isolatedScope.text).toEqual('');
      expect(isolatedScope.disableNumpad).toBeFalsy();
     }));

     it('should remove the last number', inject(function() {

      expect(isolatedScope.disableNumpad).toBeFalsy();

      isolatedScope.addNumber(1);
      isolatedScope.addNumber(2);
      isolatedScope.addNumber(3);
      isolatedScope.addNumber(4);

      expect(isolatedScope.text).toEqual('1234');
      expect(isolatedScope.disableNumpad).toBeTruthy();

      isolatedScope.removeLast();

      expect(isolatedScope.text).toEqual('123');
      expect(isolatedScope.disableNumpad).toBeFalsy();

      isolatedScope.removeLast();

      expect(isolatedScope.text).toEqual('12');

      isolatedScope.removeLast();
      isolatedScope.removeLast();

      expect(isolatedScope.text).toEqual('');

      isolatedScope.addNumber(1);

      expect(isolatedScope.text).toEqual('1');

     }));

     it('should add 0. when the . symbole is added at first', inject(function() {
      isolatedScope.addSymbole('.');
      expect(isolatedScope.text).toEqual('0.');
     }));

});