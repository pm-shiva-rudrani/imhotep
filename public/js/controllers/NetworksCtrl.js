var networkControllers = angular.module('NetworksCtrl', []);

networkControllers.controller('NetworksListController', function($scope) {

	$scope.tagline = 'Nothing beats a pocket protector!';

});

networkControllers.controller('NetworksDetailsController', ['$scope','$routeParams',function($scope,$routeParams){
	$scope.network = $routeParams.network;
	console.log($scope.network);
}]);