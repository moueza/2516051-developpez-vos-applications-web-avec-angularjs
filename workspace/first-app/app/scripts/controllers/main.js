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






//var app = angular.module("firstAppApp", []);
myApp.controller("myController", function ($scope) {
    $scope.showContent = true;
});


myApp.controller("exempleCtrl", function ($scope) {
    $scope.name = "World"
});




myApp.controller("BillCtrl", function ($scope) {
    $scope.articles = [{"name": "Téléphone sans-fil", "quantity": 1, "price": "29.99"}, {"name": "Chargeur iPhone5", "quantity": 1, "price": "29.99"}];
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.articles.length; i++) {
            total += $scope.articles[i].price * $scope.articles[i].quantity;
        }
        return total;
    };
    function calculateDiscount(newValue, oldValue, scope) {
        $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
    }
    ;

    $scope.finalTotal = function () {
        return $scope.total() - $scope.discount;
    };

    $scope.$watch($scope.total, calculateDiscount);
});


//var app = angular.module("app", []);

myApp.controller("SomeController", function ($scope) {
    $scope.title = "Titre";
    $scope.text = "Contenu";
});
//
//myApp.directive("expander", function () {
//    return {
//        restrict: 'EA',
//        replace: true,
//        transclude: true,
//        scope: {title: '=expanderTitle'},
//        template: '<div>' +
//                '<div class="title" ng-click="toggle()">{{title}}</div>' +
//                '<div class="body" ng-show="showMe" ng-transclude></div>' +
//                '</div>',
//        link: function (scope, element, attrs) {
//            scope.showMe = false;
//            scope.toggle = function toggle() {
//                scope.showMe = !scope.showMe;
//            };
//        }
//    };
//});


//var app = angular.module("app", []);

myApp.controller("SomeController", function ($scope) {
    $scope.expanders = [
        {title: 'Titre 1',
            text: 'Contenu 1'},
        {title: 'Titre 2',
            text: 'Contenu 2'},
        {title: 'Titre 3',
            text: 'Contenu 3'}
    ];
});

myApp.directive("accordion", function () {
    return{
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: "<div ng-transclude></div>",
        controller: function () {
            var expanders = [];
            this.gotOpened = function (selectedExpander) {
                expanders.forEach(function (expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            };
            this.addExpander = function (expander) {
                expanders.push(expander);
            };
        }
    };
});

myApp.directive("expander", function () {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: {title: '=expanderTitle'},
        template: '<div>' +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-show="showMe" ng-transclude></div>' +
                '</div>',
        link: function (scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            };
        }
    };
});

myApp.factory("factoryExample", function () {
    return{
        service1: function () {
            var stringg = "chn";
            return stringg;
        },
        service2: function () {},
    }
});

myApp.controller("factoryCtrl", function ($scope, factoryExample) {
    $scope.fact = factoryExample.service1();
});





myApp.service("serviceExample", function () {
    this.service1 = function () {
        var stringg = "chnService";
        return stringg;
    };
    this.service2 = function () {
        null
    };
});

myApp.controller("serviceCtrl", function ($scope, serviceExample) {
    $scope.serv = serviceExample.service1();
});