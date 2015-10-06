'use strict';

/**
 * @ngdoc function
 * @name icaroioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the icaroioApp
 */

angular.module('icaroioApp')
    .controller('MainCtrl', ['$scope', '$window', '$mdSidenav', function($scope, $window, $mdSidenav, $mdDialog) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.getIconPath = function(type, name) {
            var iconPath = "bower_components/material-design-icons/" + type + "/svg/production/" + name + ".svg";
            return iconPath;
        };


        $scope.infos = [
            {
                icon: "mdi mdi-account",
                about: "Icaro Harry"
            },
            {
                icon: "mdi mdi-email",
                about: "me@icaro.io"
            },
            {
                icon: "mdi mdi-cake",
                about: "19 years old"
            },
            {
                icon: "mdi mdi-map-marker",
                about: "Belo Horizonte - MG"
            }
        ];

        $scope.follow = function(socialNetwork) {
            switch(socialNetwork) {
                case 'spotify': 
                    $window.open('https://play.spotify.com/user/icaroharry', '_blank');
                    break;
                case 'github': 
                    $window.open('https://www.github.com/icaroharry', '_blank');
                    break;
                case 'facebook': 
                    $window.open('https://www.facebook.com/icaroharry', '_blank');
                    break;
                case 'twitter': 
                    $window.open('https://www.twitter.com/icaroharry', '_blank');
                    break;
            }
        };
    }]);