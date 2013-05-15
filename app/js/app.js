var myApp = angular.module('myApp', ['ngResource','ui.bootstrap']);

myApp.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/login', {
            controller: 'LoginController',
            templateUrl: '../views/Login.html'
        }).
        when('/home', {
            controller: 'TreeController',
            templateUrl: '../views/Home.html'
        }).
        otherwise({redirectTo: '/login'});

    //$locationProvider.html5Mode(true);    DONT UNCOMMENT THIS
}]);