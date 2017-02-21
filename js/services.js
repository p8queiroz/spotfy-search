angular.module('starter.services', [])

.factory('LoaderService', function($rootScope, $ionicLoading) {
    return {
        show : function() {

            $rootScope.loading = $ionicLoading.show({
                content: '<i class="icon ion-loading-c"></i>',
                animation: 'fade-in',
                showBackdrop: false,
                minWidth: 200,
                showDelay: 10
            });
        },

        hide : function(){
            $ionicLoading.hide();
        }
    }
})
.factory('AlbumService', function($http, $q) {

        // these are functions exposed to public
        return {
             /**
            * Fetches tracks of a specific album
            * @param   {String}  albumId 
            * @returns {Promise}
            */
            fetchTracks: function (albumId) {

				var deffered = $q.defer();
				
				$http({
				  method: 'GET',
				  url: 'https://api.spotify.com/v1/albums/' + albumId
				  
				}).success(function (data, status, headers, config) {
				  //chamar uma callback
				  deffered.resolve(data);
				  
				}).error(function (data, status, headers, config) {
				 
				  deffered.reject(status);
				  
				});

				return deffered.promise;
		  
		  
            },
            /**
            * Search for albums that match the query
            * @param   {String}  query 
            * @returns {Promise}
            */
            searchAlbums: function (query) {
			   
               var deffered = $q.defer();
			   
				$http({
				  url: 'https://api.spotify.com/v1/search',
				  params: {
						q: query,
						type: 'album'
					}
				}).success(function (data, status, headers, config) {
				  deffered.resolve(data);
				}).error(function (data, status, headers, config) {
				  deffered.reject(status);
				});

				return deffered.promise;
            }
          }
	 
});
