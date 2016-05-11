/**
 * Inicializacion de la app
 * @type angular.module.angular-1_3_6_L1749.moduleInstance
 */
var app = angular.module('app',
        [
            'ngRoute'
        ]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                // Home
                .when("/", {templateUrl: "views/home.html", controller: "homeController"})
                .when("/home", {templateUrl: "views/home.html", controller: "homeController"})
                .when("/info", {templateUrl: "views/info.html", controller: "infoController"})

                // else 404
                .otherwise("/", {templateUrl: "views/home.html", controller: "homeController"});
    }]);
