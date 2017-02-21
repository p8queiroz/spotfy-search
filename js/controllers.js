angular.module('starter.controllers', [])

.controller('mainController', function($scope, AlbumService) {
	
		var templateSource = document.getElementById('results-template').innerHTML,
		template = Handlebars.compile(templateSource),
		resultsPlaceholder = document.getElementById('results'),
		playingCssClass = 'playing',
		audioObject = null;
		
		
		document.getElementById('search-form').addEventListener('submit', function (e) {
			e.preventDefault();
			AlbumService.searchAlbums(document.getElementById('query').value).then(function(data){
				$scope.data = data;
				console.log($scope.data);
				resultsPlaceholder.innerHTML = template($scope.data);
			});
			
	
		}, false);
	

}).controller('aboutController', function($scope) {
	$scope.Message = "this is a message set in the aboutController";
	
});










