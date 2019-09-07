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
myApp.controller("myController", function ($scope) {

});




///////////////////

myApp.filter('reverse', function () {
    return function (input, uppercase) {
        input = input || '';
        var out = "";
        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }
        // conditional based on optional argument
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    };
});

myApp.controller('myController', function ($scope) {
    $scope.greeting = 'hello';
});