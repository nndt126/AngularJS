"use strict";

var repeatApp = angular.module('repeatApp');
repeatApp.directive('wwatableData',
    function () {
        return {
            restrict: 'E',
            templateUrl: "./tableData.html"
        }
    });