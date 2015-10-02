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
    
  };
})

.controller('PlaylistsCtrl', function($scope,$state,Chapters) {
  $scope.playlists = Chapters.all();


})

.controller('ChapterDetailCtrl', function($scope,$state,$window,$timeout, $ionicHistory,$stateParams,$rootScope,$ionicLoading, Chapters) {
  $scope.chapter = Chapters.get($stateParams.chapterId);
  console.log($scope.chapter);
  $scope.lessons = $scope.chapter.lessons;
   var chapter = Chapters.get($stateParams.chapterId);
  var lesson = Chapters.get($stateParams.lessonId);

  $scope.chapterName = $scope.chapter.name;

  $scope.playLesson = function(){
    //$window.location.reload(true);
    
  }
  $scope.goBack = function() {
    
    $state.go('app.playlists');
    
        };

        
$scope.$on("$ionicView.enter", function() {
  
});

       

})


.controller('sample', function($scope,$rootScope,$timeout,$ionicHistory,$state,$window,$ionicLoading,$stateParams,Chapters) {

   var chapter = Chapters.get($stateParams.chapterId);
  var lesson = chapter.lessons[$stateParams.lessonId];
  $scope.sections = lesson.sections;
   
   for(i=0;i<$scope.sections.length;i++)
   {
    //console.log($scope.sections[i]);
   }

    
 $rootScope.$ionicGoBack = function() {
    $ionicHistory.goBack();
    
        };
     $scope.$on("$ionicView.afterLeave", function() {
     

$window.location.reload(true);
 $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
   $timeout(function () {
    $ionicLoading.hide();
   
  }, 2000);



     });

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
 }, 0);
});



  /* function stopAll() {
var media = document.getElementsByClassName('audio'),
    i = media.length;

while (i--) {
    media[i].pause();
    media[i].load();

}
}*/

/*Reveal.addEventListener( 'slidechanged', function( event ) {
  stopAll();
  var state = Reveal.getState();
  var getaudio
  console.log(state);
     setTimeout(function(){
     stopAll(); 
    document.getElementsByClassName("audio")[state.indexh].play();
    event.stopPropagation();
    
}, 1000);
    
} );*/


    

});

