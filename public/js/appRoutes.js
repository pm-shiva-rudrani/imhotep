angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/networks', {
			templateUrl: 'views/networks.html',
			controller: 'NetworksListController'
		})
		.when('/networks/:network', {
			templateUrl: 'views/networks.html',
			controller: 'NetworksDetailsController'
		})
		.when('/networks/category/:network', {
			templateUrl: 'views/networks.html',
			controller: 'NetworksListController'
		})
		.when('/shows/',{
			templateUrl: 'views/shows.html',
			controller: 'ShowsController'
		}) 
		.when('/shows/:show', {
			templateUrl: 'views/shows.html',
			controller: 'ShowsController'	
		});

	$locationProvider.html5Mode(true);

}]);