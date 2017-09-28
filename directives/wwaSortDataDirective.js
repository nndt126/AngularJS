"use strict";
var repeatApp = angular.module('repeatApp');
repeatApp.directive("wwasortData", function () {
    return {
        restrict: 'A',
        //template : "<h1>Welcome</h1>"
        templateUrl: "./sortData.html"
    }
});
