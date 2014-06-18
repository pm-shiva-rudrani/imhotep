angular.module('fstvApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'MainService' , 'NetworksCtrl' , 'NetworksService', 'ShowsCtrl', 'ShowsService'])
		.filter('slug', function () {
    return function (input) {
      if (input) {
        return input.toLowerCase().replace(/[^a-z_]/g, '_');
      }
    };
});