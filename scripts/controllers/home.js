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
            title: "Parabéns!",
            paragraph:"É com grande prazer que anunciamos que a equipe EatUp foi selecionada para participar do Lemonade!"
        }
    ];
});
