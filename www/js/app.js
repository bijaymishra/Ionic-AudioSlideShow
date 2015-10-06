// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCookies','starter.controllers','starter.config','starter.services','ngMessages'])

.directive('script', function() {
    return {
      restrict: 'E',
      scope: false,
      link: function(scope, elem, attr) {
        if (attr.type === 'text/javascript-lazy') {
          var code = elem.text();
          var f = new Function(code);
          f();
        }
      }
    };
  })


.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

   /* Check login session
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
        var userInfo = $cookieStore.get('userInfo');
        if (!userInfo) {
            // user not logged in | redirect to login
            if (next.name !== "welcome") {
                // not going to #welcome, we should redirect now
                event.preventDefault();
                $state.go('welcome');
            }
        } else if (next.name === "welcome") {
            event.preventDefault();
            $state.go('dashboard');
        }
    });*/
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: false,
    templateUrl: 'app/menu/menu.html',
    controller: 'AppCtrl'
  })

    .state('intro', {
      url: '/intro',
      cache: true,
          templateUrl: 'app/intro/intro.html',
          controller: 'IntroCtrl'
        
      
    })
    .state('login', {
      url: '/login',
      cache: true,
          templateUrl: 'app/authentication/login.html',
          controller: 'AuthCtrl'
        
      
    })

    .state('signup', {
      url: '/signup',
      cache: true,
          templateUrl: 'app/authentication/signup.html',
          controller: 'AuthCtrl'
        
      
    })
     .state('app.home', {
      url: '/home',
      cache: true,
      views: {
        'menuContent': {
          templateUrl: 'app/home/home.html',
          //controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      cache: true,
      views: {
        'menuContent': {
          templateUrl: 'app/about/about.html',
          //controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      cache: true,
      views: {
        'menuContent': {
          templateUrl: 'app/chapters/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.chapter-detail', {
      url: '/playlists/:chapterId',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/chapters/chapter-details.html',
          controller: 'ChapterDetailCtrl'
        }
      }
    })

  .state('app.part1', {
    url: '/playlists/:chapterId/:lessonId',
    views: {
      cache: false,
      'menuContent': {
        templateUrl: 'app/player/part1.html',
        controller: 'sample'
      }
    }
  });
 
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('intro');
});
