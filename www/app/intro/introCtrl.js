(function () {
    'use strict';

    angular.module('starter').controller('IntroCtrl', ['$scope','$state','$rootScope','$ionicHistory', IntroCtrl]);

    function IntroCtrl($scope,$state,$rootScope,$ionicHistory ) {       
     
     $scope.login = function(){
     	$state.go('tabs.home');
     };

      $scope.goTologin = function(){
     	$state.go('login');
     }; 


      $scope.goTosignup = function(){
     	$state.go('signup');
     }; 

     

     $rootScope.$ionicGoBack = function() {
    $ionicHistory.goBack();
    
        };
    }
})();