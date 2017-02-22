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
				resultsPlaceholder.innerHTML = template($scope.data);
				console.log($scope.data);
			});
			
			results.addEventListener('click', function (e) {
				var target = e.target;
				if (target !== null && target.classList.contains('cover')) {
					if (target.classList.contains(playingCssClass)) {
						audioObject.pause();
					} else {
						if (audioObject) {
							audioObject.pause();
						}
						AlbumService.fetchTracks(target.getAttribute('data-album-id')).then(function (data) {
							audioObject = new Audio(data.tracks.items[0].preview_url);
							audioObject.play();
							target.classList.add(playingCssClass);
							audioObject.addEventListener('ended', function () {
								target.classList.remove(playingCssClass);
							});
							audioObject.addEventListener('pause', function () {
								target.classList.remove(playingCssClass);
							});
							
						}, function(error){
							console.log(error);
						});
					}
				}
			});
	
		}, false);

}).controller('aboutController', function($scope) {
	$scope.Message = "this is a message set in the aboutController";
	
});










