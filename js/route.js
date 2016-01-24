/**
 * Created by sunmy on 16/1/23.
 */

var routeApp = angular.module('routeApp', ['ngRoute']);

routeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/index', {
            templateUrl: 'index.html'
        })
        .otherwise({
            redirectTo: '/index'
        });
}]);