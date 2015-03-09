'use strict';

/**
 * @ngdoc function
 * @name icaroioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the icaroioApp
 */

angular.module('icaroioApp')
    .controller('MainCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        var getIconPath = function(type, name) {
            var iconPath = "bower_components/material-design-icons/" + type + "/svg/production/" + name + ".svg";
            return iconPath;
        };

        $scope.infos = [
            {
                icon: getIconPath("social", "ic_person_24px"),
                about: "Icaro Harry"
            },
            {
                icon: getIconPath("communication", "ic_email_24px"),
                about: "me@icaro.io"
            },
            {
                icon: getIconPath("social", "ic_cake_24px"),
                about: "19 years old"
            }
        ];
    }]);