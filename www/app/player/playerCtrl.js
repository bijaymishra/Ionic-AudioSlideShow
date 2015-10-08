 
(function () {
    'use strict';

    angular.module('starter').controller('playerCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', playerCtrl]);

    function playerCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
 

 $scope.$on("$ionicView.enter", function() {

   setTimeout(function(){
   // document.getElementsByClassName("audio")[0].play();

 
  /*Reveal.initialize({
        controls: true,
        //progress: true,
        //history: true,
        center: true,
        audioPrefix: 'audio/',
        audioSuffix: '.mp3',
        //audioDefaultDuration: 5,
        audioPlayerOpacity: 0.5,


                 backgroundTransition: 'slide'
            });*/


   Reveal.initialize({
    
    controls: true,
        progress: true,
        //history: true,
        center: true,
        audioPrefix: 'audio/',
        audioSuffix: '.mp3',
        audioDefaultDuration: 5,
        audioPlayerOpacity: 0.5,


        // transition: 'slide',
        // transitionSpeed: 'slow',
        // backgroundTransition: 'slide'
        dependencies: [
         // Remote control your reveal.js presentation using a touch device
        { src: 'plugin/audio-slideshow/audio-slideshow.js', async: false },

    ]
      });
   Reveal.sync(); 
 }, 0);
});

  $scope.$on("$ionicView.afterLeave", function() {
    $ionicHistory.clearCache();
    $state.go($state.current, {}, {reload: true});
  });

      
}

    
})();