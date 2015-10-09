 
(function () {
    'use strict';

    angular.module('starter').controller('playerCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', playerCtrl]);

    function playerCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
 

 $scope.$on("$ionicView.beforeEnter", function() {

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

        // ... 

        { src: 'plugin/audio-slideshow/slideshow-recorder.js', condition: function( ) { return !!document.body.classList; } },              
        { src: 'plugin/audio-slideshow/audio-slideshow.js', condition: function( ) { return !!document.body.classList; } }
    ]   
      });
   Reveal.sync(); 
 }, 100);
});

  $scope.$on("$ionicView.enter", function() {
    $state.go($state.current, {}, {reload: true});
    Reveal.addEventListener( 'slidechanged', function( event ) {
      Reveal.sync();
      
    });
    
  });

      
}

    
})();