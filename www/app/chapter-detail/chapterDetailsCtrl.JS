(function () {
    'use strict';

    angular.module('starter').controller('ChapterDetailCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', ChapterDetailCtrl]);

    function ChapterDetailCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
     
   $scope.playLesson =function(id){

   	serviceApi.playLssonsData(id).then(function (response) {
    	$rootScope.sections = response;
   		console.log($rootScope.sections);
   		$state.go('app.part1');
   	});

   }

 			
}

    
})();