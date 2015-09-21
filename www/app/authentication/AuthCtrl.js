(function () {
    'use strict';

    angular.module('starter').controller('AuthCtrl', ['$scope','$state','$rootScope','$ionicHistory', AuthCtrl]);

    function AuthCtrl($scope,$state,$rootScope,$ionicHistory ) {       
     
     $scope.login = function(){
     	$state.go('app.home');
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