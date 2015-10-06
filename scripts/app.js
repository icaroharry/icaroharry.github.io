'use strict';

/**
 * @ngdoc overview
 * @name icaroioApp
 * @description
 * # icaroioApp
 *
 * Main module of the application.
 */
var app = angular
    .module('icaroioApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ng-mfb'
    ])
    .config(function ($routeProvider, $mdThemingProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'views/home.html',
              controller: 'HomeCtrl'
            })
            .when('/skills', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
            .otherwise({
              redirectTo: '/'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('deep-purple');
    });