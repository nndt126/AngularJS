(function () {
    'use strict';

    var nestedRepeatApp = angular.module('nestedRepeatApp', []);
    nestedRepeatApp.controller('nestedRepeatController', repeatController);

    nestedRepeatController.$inject = ['$scope'];

    function nestedRepeatController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'nestedRepeatController';

        activate();

        function activate() {}

        var Employees = [{
                firstName: "A",
                lastName: "Nguyen"
            },
            {
                firstName: "B",
                lastName: "Nguyen"
            },
            {
                firstName: "C",
                lastName: "Nguyen"
            },
            {
                firstName: "D",
                lastName: "Nguyen"
            },
        ];
        $scope.employees = Employees;
    }
})();