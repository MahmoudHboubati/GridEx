//this is unit test file

describe('gridController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.zero', function() {
    it('returns zero value', function() {
      var $scope = {};
      var controller = $controller('gridController', { $scope: $scope });
      expect($scope.zero();).toEqual(0);
    });
  });
});