angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicHistory ) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Tutorial 1', id: 1 }
    
  ];
 
})


.controller('sample', function($scope,$timeout,$ionicHistory,$state,$window) {
   
   $scope.$on("$ionicView.enter", function() {
   setTimeout(function(){
    document.getElementsByClassName("audio")[0].play();
}, 500);
 
  Reveal.initialize({
        controls: true,
        //progress: true,
        //history: true,
        center: true,
        audioPrefix: 'audio/',
        audioSuffix: '.mp3',
        //audioDefaultDuration: 5,
        audioPlayerOpacity: 0.5,


                 //transition: 'slide',
                // transitionSpeed: 'slow',
                 backgroundTransition: 'slide'
            });
  
  });

Reveal.addEventListener( 'slidechanged', function( event ) {
  var state = Reveal.getState();
  var getaudio
  console.log(state);
    setTimeout(function(){
    document.getElementsByClassName("audio")[state.indexh].play();
    event.stopPropagation();

}, 1500);
} );


    $scope.$on("$ionicView.unloaded", function() {
      // To reset the slide to starting position. 
          Reveal.slide(0, 0, 0);
    });

});

