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
                icon: "images/email.svg",
                about: "eat@up.com"
            },
            {
                icon: "images/map-marker.svg",
                about: "Belo Horizonte - MG"
            }
        ];
    }]);