var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'myController'
        })

        //route for the about page
        .when('/table', {
            templateUrl : 'tableData.html',
            controller  : 'repeatController'
        });
});



myApp.controller("myController",function($scope){
});

myApp.directive("helloWord",function(){
    return {
         //template : "<h1>Welcome</h1>"
        templateUrl : "helloWord.html"
    }
});