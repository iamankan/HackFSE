/**
 * My app module
 */
angular
  .module('myapp', [
    'ngRoute'
  ]);

// Routing setup
angular
  .module('myapp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        controller: 'HomeController',
        controllerAs: 'home',
        templateUrl: 'pages/home.tpl.html'
      }).when('/users', {
        controller: 'UsersController',
        controllerAs: 'users',
        templateUrl: 'pages/users.tpl.html'
      }).otherwise({
        // default page
        redirectTo: '/home'
      });
  });