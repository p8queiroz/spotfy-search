angular.module('starter',['ngRoute','starter.controllers','starter.services'])
.config(['$routeProvider', function($routeProvider) {

$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'templates/home.html',
		controller  : 'mainController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'templates/about.html',
		controller  : 'aboutController'
	}) 
	
	.otherwise({
			redirectTo: '/'
	});	

}]);
