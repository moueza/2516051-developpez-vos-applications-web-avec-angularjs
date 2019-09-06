'use strict';
/**
 * @ngdoc function
 * @name firstAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstAppApp
 */
angular.module('firstAppApp')
        .controller('MainCtrl', function () {
            this.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });

var myApp = angular.module('firstAppApp', []);
myApp.controller("exemple1Ctrl", function ($scope) {
    $scope.age = 0;
    $scope.majeurOrMineurText = function () {
        return ($scope.age >= 18) ? "majeur" : "mineur";
    };
});