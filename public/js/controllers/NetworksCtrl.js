var networkControllers = angular.module('NetworksCtrl', []);

networkControllers.controller('NetworksListController', function($scope,$http,$routeParams) {

	$scope.selectedTab = 2;

	$scope.fansdata = [
				{ day: '2013-12-29', value: 1500 },
				{ day: '2013-12-30', value: 3000 },
				{ day: '2013-12-31', value: 2500 },
				{ day: '2014-01-01', value: 2000 },
				{ day: '2014-01-02', value: 1500 },
				{ day: '2014-01-03', value: 1750 }
				];
	$scope.engagementdata = [
				{ day: '2013-12-29', value: 151000 },
				{ day: '2013-12-30', value: 301000 },
				{ day: '2013-12-31', value: 251000 },
				{ day: '2014-01-01', value: 201000 },
				{ day: '2014-01-02', value: 151000 },
				{ day: '2014-01-03', value: 171000 }
				];
	$scope.postsdata = [
				{ day: '2013-12-29', value: 15 },
				{ day: '2013-12-30', value: 30 },
				{ day: '2013-12-31', value: 25 },
				{ day: '2014-01-01', value: 20 },
				{ day: '2014-01-02', value: 15 },
				{ day: '2014-01-03', value: 17 }
				];

	if($routeParams.network != null){
		query = {"meta.category":$routeParams.network}
		$scope.category = $routeParams.network
	}else{
		query = {}
	}
	
	$http({
		url: "/api/networks/list",
		method: "GET",
		params: query
	}).success(function(data){
			$scope.networks = data;
	});

}).directive('networkschart',function(){
	return {
		restrict: 'E',
		template: '<div></div>',
		replace: true,
		link: function($scope, element, attrs) {
			var data = $scope[attrs.data],
				// The name of the data record attribute that contains x-values.
				xkey = 'day',
				xLabels = 'day',
				// A list of names of data record attributes that contain y-values.
				ykeys = ['value'],
				// Labels for the ykeys -- will be displayed when you hover over the
				// chart.
				labels = ['Value'];

				Morris.Line({
                    element: element,
                    data: data,
                    xkey: xkey,
                    ykeys: ykeys,
                    labels: labels
                });
		}
	}
});

networkControllers.controller('NetworksDetailsController', ['$scope','$routeParams',function($scope,$routeParams){
	$scope.network = $routeParams.network;
	//console.log($scope.network);
}]);