// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.part1', {
    url: '/playlists/part1',
    views: {
      cache: false,
      'menuContent': {
        templateUrl: 'templates/part1.html',
        controller: 'sample'
      }
    }
  })
  .state('app.part2', {
    url: '/playlists/part2',
    views: {
      cache:false,
      'menuContent': {
        templateUrl: 'templates/part2.html',
        controller: 'sample'
      }
    }
  })
  .state('app.part3', {
    url: '/playlists/part3',
    views: {
      'menuContent': {
        templateUrl: 'templates/part3.html',
        controller: 'sample'
      }
    }
  })
  .state('app.part4', {
    url: '/playlists/part4',
    views: {
      'menuContent': {
        templateUrl: 'templates/part4.html',
        controller: 'sample'
      }
    }
  })
  .state('app.part5', {
    url: '/playlists/part5',
    views: {
      'menuContent': {
        templateUrl: 'templates/part5.html',
        controller: 'sample'
      }
    }
  })
  .state('app.part6', {
    url: '/playlists/part6',
    views: {
      'menuContent': {
        templateUrl: 'templates/part6.html',
        controller: 'sample'
      }
    }
  })
  .state('app.player', {
    url: '/player',
    views: {
      'menuContent': {
        templateUrl: 'templates/slide-transitions.html',
        controller: 'sample'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
