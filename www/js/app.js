// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova','ion-floating-menu'])

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

/*.service('taskService', function () {

	 this.addTaskToLocalStorage = function(items) {
      localStorage.setItem("cart", JSON.stringify(items));
     };

     this.getTask = function() {
        var items = JSON.parse(localStorage.getItem("cart"));
         return items;
       };

})*/

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.createTask', {
    url: '/createTask',
    views: {
      'menuContent': {
        templateUrl: 'templates/createTask.html',
        controller: 'ToDoCtrl'
      }
    }
  })

  .state('app.assignTask', {
    url: '/assignTask',
    views: {
      'menuContent': {
        templateUrl: 'templates/assignTask.html',
        controller: 'AssignTasksCtrl'
      }
    }
  })

  .state('app.viewTasks', {
      url: '/viewTasks',
      views: {
        'menuContent': {
          templateUrl: 'templates/viewTasks.html',
          controller:'ViewTasksCtrl'

        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/createTask');
});
