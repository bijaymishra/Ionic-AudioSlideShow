(function () {
    'use strict';

    angular.module('starter').controller('HomeCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', HomeCtrl]);

    function HomeCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
     
   $scope.allChpters =function(){

   	serviceApi.getChpters().then(function (response) {
$scope.mainList = []; 
   		$rootScope.mainList = response;
  
   		console.log($scope.mainList);
   		$state.go('app.playlists' );
   	});

   }

 			
}

    
})();