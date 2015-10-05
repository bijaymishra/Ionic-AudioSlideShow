(function () {
    'use strict';

    angular.module('starter').controller('AuthCtrl', ['$scope','$state','$rootScope','$cookieStore','$ionicHistory', AuthCtrl]).directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {

      $timeout(function() {
        element[0].focus(); 
      },750);
    }
  };
});


    function AuthCtrl($scope,$state,$rootScope,$ionicHistory,$cookieStore ) {       
     
     $scope.login = function(){
     	$state.go('app.home');
     };

      $scope.goTologin = function(){

        $state.go('login');
     }; 


      $scope.goTosignup = function(){
     	$state.go('signup');
     }; 

     $scope.goToIntro = function(){
        $state.go('intro');
     }; 

    
         Waves.displayEffect();
    setTimeout(function() {
        Mi.motion.panInLeft({
            selector: '.animate-pan-in-left'
        });
    }, 500);
    
   $scope.user = {
    username: '',
    email:'',
    password : '',
    postcode :''
  }

  $scope.signIn = function(form) {
    console.log(form);
    if(form.$valid) {
    console.log('Sign-In', $scope.user.username);
    $state.go('app.home');
    }
  };



 
  $scope.signUp = function(form) {
    console.log(form);
    if(form.$valid) {
    console.log('Sign-Up', $scope.user.email);
    $state.go('app.home');
    }
  };



   /**
     * SOCIAL LOGIN
     * Facebook and Google
     */
    // FB Login
    $scope.fbLogin = function () {
        FB.login(function (response) {
            if (response.authResponse) {
                getUserInfo();
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        }, {scope: 'email,user_photos,user_videos'});

        function getUserInfo() {
            // get basic info
            FB.api('/me', function (response) {
                console.log('Facebook Login RESPONSE: ' + angular.toJson(response));
                // get profile picture
                FB.api('/me/picture?type=normal', function (picResponse) {
                    console.log('Facebook Login RESPONSE: ' + picResponse.data.url);
                    response.imageUrl = picResponse.data.url;
                    // store data to DB - Call to API
                    // Todo
                    // After posting user data to server successfully store user data locally
                    var user = {};
                    user.name = response.name;
                    user.email = response.email;
                    if(response.gender) {
                        response.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    user.profilePic = picResponse.data.url;
                    $cookieStore.put('userInfo', user);
                    $state.go('app.home');

                });
            });
        }
    };
    // END FB Login

    // Google Plus Login
    $scope.gplusLogin = function () {
        var myParams = {
            // Replace client id with yours
            'clientid': '711459126511-68kqj1k2q7t9587j07c7h5i82lol3sm9.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': loginCallback,
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(myParams);

        function loginCallback(result) {
            if (result['status']['signed_in']) {
                var request = gapi.client.plus.people.get({'userId': 'me'});
                request.execute(function (resp) {
                    console.log('Google+ Login RESPONSE: ' + angular.toJson(resp));
                    $rootScope.userLoginName = resp.displayName;
                    var userEmail;
                    if (resp['emails']) {
                        for (var i = 0; i < resp['emails'].length; i++) {
                            if (resp['emails'][i]['type'] == 'account') {
                                userEmail = resp['emails'][i]['value'];
                            }
                        }
                    }
                    // store data to DB
                    var user = {};
                    user.name = resp.displayName;
                    user.email = userEmail;
                    if(resp.gender) {
                        resp.gender.toString().toLowerCase() === 'male' ? user.gender = 'M' : user.gender = 'F';
                    } else {
                        user.gender = '';
                    }
                    user.profilePic = resp.image.url;
                   // $cookieStore.put('userInfo', user);
                    $state.go('app.home');
                });
            }
        }
    };
    // END Google Plus Login



    }
})();