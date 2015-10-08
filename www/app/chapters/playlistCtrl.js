(function () {
    'use strict';

    angular.module('starter').controller('PlaylistsCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', PlaylistsCtrl]);

    function PlaylistsCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
     
   $scope.getLessons =function(id){

   	serviceApi.getLessonsData(id).then(function (response) {
    $scope.lessionsList = []; 
   		$rootScope.lessons = response;
   		console.log($scope.lessons);
   		$state.go('app.chapter-detail');
   	});

   }

 			
}

    
})();