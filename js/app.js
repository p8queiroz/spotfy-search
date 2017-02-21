angular.module('starter',['ngRoute','starter.controllers'])
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

	// route for the services page
	.when('/services', {
		templateUrl : 'templates/services.html',
		controller  : 'servicesController'
	}) 
	
	// route for the gallery page
	.when('/gallery', {
		templateUrl : 'templates/gallery.html',
		controller  : 'galleryController'
	}) 
	
	
	// route for the contact page
	.when('/contact', {
		templateUrl : 'templates/contact.html',
		controller  : 'contactController'
	})
	
	.otherwise({
			redirectTo: '/'
	});	

}]);
