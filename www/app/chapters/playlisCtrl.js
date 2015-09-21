.controller('PlaylistsCtrl', function($scope,Chapters) {
  $scope.playlists = Chapters.all();
  

})