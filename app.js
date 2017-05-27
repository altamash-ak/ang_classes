var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('Controller1', ['$scope', function($scope){
	$scope.message = "hey u all";
	$scope.ninjas1 = ['yoshi', 'ryu', 'shaun', 'crystal'];
  $scope.numbers = ['1', '2', '3', '4', '5'];
}]);
