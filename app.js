
var app = angular.module('myApp', []);

app.directive('signup', function() {
    return {
        templateUrl: 'signup-template.html',
        restrict: 'E',
        transclude : true
    }
});