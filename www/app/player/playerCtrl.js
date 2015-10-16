 
(function () {
    'use strict';

    angular.module('starter').controller('playerCtrl', ['$scope','$state','$rootScope','$ionicHistory','serviceApi', playerCtrl]);

    function playerCtrl($scope,$state,$rootScope,$ionicHistory,serviceApi ) {       
 
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
        center:false,
        embedded:true,
        minScale:0,
        maxScale:0,


                 //transition: 'slide',
                // transitionSpeed: 'slow',
                 backgroundTransition: 'slide'
            });
  Reveal.slide( 0 );
  });

Reveal.addEventListener( 'slidechanged', function( event ) {
  var state = Reveal.getState();
  var getaudio
  console.log(state);
    setTimeout(function(){
      //alert(state.indexh);
    document.getElementsByClassName("audio")[state.indexh].play();
    event.stopPropagation();

}, 1500);
} );

}

    
})();