'use strict';

/**
 * @ngdoc function
 * @name icaroioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the icaroioApp
 */

angular.module('icaroioApp')
    .controller('MainCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav, $mdDialog){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.getIconPath = function(type, name) {
            var iconPath = "bower_components/material-design-icons/" + type + "/svg/production/" + name + ".svg";
            return iconPath;
        };


        $scope.infos = [
            {
                icon: "images/account.svg",
                about: "Icaro Harry"
            },
            {
                icon: "images/email.svg",
                about: "me@icaro.io"
            },
            {
                icon: "images/cake-variant.svg",
                about: "19 years old"
            },
            {
                icon: "images/map-marker.svg",
                about: "Belo Horizonte - MG"
            },
            {
                icon: "images/facebook-box.svg",
                about: "Facebook",
                link: "https://www.facebook.com/IcaroHarry"
            },
            {
                icon: "images/github-circle.svg",
                about: "GitHub",
                link: "https://www.github.com/icaroharry"
            },
            {
                icon: "images/spotify.svg",
                about: "Spotify",
                link: "https://play.spotify.com/user/icaroharry"
            }
        ];
    }]);