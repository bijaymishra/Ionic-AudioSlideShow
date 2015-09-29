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

         Waves.displayEffect();
    setTimeout(function() {
        Mi.motion.panInLeft({
            selector: '.animate-pan-in-left'
        });
    }, 500);
    
   $scope.user = {
    username: '',
    password : ''
  }
  $scope.signIn = function(form) {
    console.log(form);
    if(form.$valid) {
    console.log('Sign-In', $scope.user.username);
    $state.go('app.home');
    }
  };



    }
})();