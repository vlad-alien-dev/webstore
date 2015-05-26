var app = angular
        .module('App', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider.when('/home',{
                templateUrl:'modules/home/homeView.html',
                controller:"homeController.js"
            });
        })
    ;