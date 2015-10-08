(function () {
    'use strict';

    angular.module('starter').controller('PlaylistsCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', PlaylistsCtrl]);

    function PlaylistsCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
     
   $scope.allChpters  = function(){

   	serviceApi.getChpters().then(function (response) {
$scope.playlists = []; 
   		$scope.playlists = response;
   		console.log($scope.playlists);
   		$state.go('app.playlists');
   	});

   }

 			


    }
})();