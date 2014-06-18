var mainServices = angular.module('MainService', []);

mainServices.service('MainFactory', ['$http', function($http){
	var shows = {};
	return {
		getList : function() {
			return $http.get('/api/shows/list').
						success(function(data,status,headers,config){
							angular.copy(data.shows,shows)
						});
		},
		shows: shows
	}
}]);