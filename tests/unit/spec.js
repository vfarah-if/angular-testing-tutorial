describe('TestOneController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestOneController', {
      $scope: $scope
    });
  }));

  it('initially has a greeting', function () {
    assert.equal($scope.greeting, "Hello, World!");
  });

  it('clicking the button changes the changes the greeting if text is inputed', function () {
    $scope.newText = "Hi!";
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hi!");
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hello, World!");
  });

});

describe('TestTwoController', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestTwoController', {
      $scope: $scope
    });
  }));

  it('initially has a total', function () {
    assert.equal($scope.total, 6);
  });

  it('initially has items', function () {
    assert.isArray($scope.items);
    assert.deepEqual($scope.items, [1, 2, 3]);
  });

  it('updates the `total` and `items` array when a value is added', function () {
    $scope.newItem = 7;
    $scope.add();
    assert.equal($scope.total, 13);
    assert.deepEqual($scope.items, [1, 2, 3, 7]);
  });

  it('does not update the `total` and `items` array when an empty value is added', function () {
    $scope.newItem = undefined;
    $scope.add();
    assert.equal($scope.total, 6);
    assert.deepEqual($scope.items, [1, 2, 3]);
    $scope.newItem = 22;
    $scope.add();
    assert.equal($scope.total, 28);
    assert.deepEqual($scope.items, [1, 2, 3, 22]);
  });

});