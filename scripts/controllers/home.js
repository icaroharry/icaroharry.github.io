'use strict';

/**
 * @ngdoc function
 * @name icaroioApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the icaroioApp
 */
angular.module('icaroioApp')
    .controller('HomeCtrl', function ($scope) {
        $scope.cards = [
        {
            title: "Hello!",
            paragraph:"My name is Icaro and I'm a brazilian programmer. I'm studying Information Systems at UFMG (Universidade Federal de Minas Gerais) and I graduated as a technical in Computer Networks at CEFET-MG (Centro Federeal de Educação Tecnológica de Minas Gerais)."
        }
    ];
});
