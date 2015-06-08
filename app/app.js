var app = angular
        .module('App', ['ngRoute','ngGrid','ui.numeric','ui.bootstrap'])


        app.config(function ($routeProvider) {
            $routeProvider.when("/home", {
                templateUrl: "modules/home/homeView.html",
                controller: "homeController"
            })
                .when("/map/:subtype1Id", {
                    templateUrl: "modules/map/mapView.html",
                    controller: "mapController"
                })
                .when("/color/:colorId/:lengthId", {
                    templateUrl: "modules/zippers/zipperView.html",
                    controller: "zipperController"
                })
            .otherwise({redirectTo: "/home"});
        });

