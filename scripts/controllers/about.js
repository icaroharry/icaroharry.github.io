'use strict';

/**
 * @ngdoc function
 * @name icaroioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the icaroioApp
 */
angular.module('icaroioApp')
    .controller('AboutCtrl', function ($scope) {
        var jsTools = [
            {
                logo : 'images/node.png',
                name: 'NodeJS',
                site: 'nodejs.org',
                skill: 60
            },
            {
                logo : 'images/angular.png',
                name: 'AngularJS',
                site: 'angularjs.org',
                skill: 60
            },
            {
                logo : 'images/react.png',
                name: 'React',
                site: 'nodejs.org',
                skill: 20
            }
        ];

        var phpTools = [
            {
                logo : 'images/laravel.png',
                name: 'Laravel',
                site: 'laravel.com',
                skill: 40
            }
        ];

        var dbTools = [
            {
                logo : 'images/mongo.png',
                name: 'MongoDB',
                site: 'mongo.com',
                skill: 60
            },
            {
                logo : 'images/oracle.png',
                name: 'Oracle',
                site: 'oracle.com',
                skill: 70
            },
            {
                logo : 'images/mysql.png',
                name: 'MySQL',
                site: 'mysql.com',
                skill: 60
            }
        ];

        $scope.languages = [
            {
                name: "JavaScript",
                logo: "images/javascript.png",
                color: "amber",
                skill: 6,
                desired: 10,
                tools: jsTools
            },
            {
                name: "PHP",
                logo: "images/php.png",
                color: "indigo",
                skill: 6,
                desired: 10,
                tools: phpTools
            },
            {
                name: "DataBases",
                logo: "images/database.png",
                color: "brown",
                skill: 6,
                desired: 10,
                tools: dbTools
            }
        ];
    });
