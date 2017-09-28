(function () {
    'use strict';

    var repeatApp = angular.module('repeatApp', ['ngRoute']);

    repeatApp.config(['$routeProvider', function ($routeProvider) {
        
            var routes = [
                {
                    url: '/table',
                    config: {
                        template: '<wwatable-data></wwatable-data>'            
                    },
                }
            ];
        
            routes.forEach(function (route) {
                $routeProvider.when(route.url, route.config);
            });
        
            $routeProvider.otherwise({ redirectTo: '/' });
        
        }]);

    // configure our routes
    // repeatApp.config(function ($routeProvider) {
    //     $routeProvider

    //         // route for the home page
    //         .when('/', {
    //             templateUrl: 'ng-repeat.html',
    //             controller  : 'repeatController'
    //         })
    //         // route for the home page
    //         .when('/hello', {
    //             templateUrl: 'helloWord.html',
    //             //controller  : 'repeatController'
    //         })

    //         //route for the about page
    //         .when('/table', {
    //             template: 'tableData.html',
    //             controller: 'repeatController'
    //         });
    // });

    repeatApp.controller('repeatController', repeatController);
    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'repeatController';
        activate();

        function activate() { }
        var Employees = [{
            firstName: "A",
            lastName: "Nguyen",
            salary: 1200,
            birthDate: new Date('12/3/1989'),
            abouts: [{
                sex: "Male"
            },
            {
                address: "123"
            }
            ]
        },
        {
            firstName: "B",
            lastName: "Nguyen",
            salary: 1300,
            birthDate: new Date('11/4/1991'),
            abouts: [{
                sex: "Female"
            },
            {
                address: "456"
            }
            ]
        },
        {
            firstName: "C",
            lastName: "Nguyen",
            salary: 1400,
            birthDate: new Date('10/5/1992'),
            abouts: [{
                sex: "Male"
            },
            {
                address: "789"
            }
            ]
        },
        {
            firstName: "D",
            lastName: "Nguyen",
            salary: 1500,
            birthDate: new Date('2/28/1991'),
            abouts: [{
                sex: "Male"
            },
            {
                address: "135"
            }
            ]
        },
        ];
        $scope.employees = Employees;
        $scope.sortColumn = 'firstName';
    }

    // repeatApp.directive("tableData", function () {
    //     return {
    //         //template : "<h1>Welcome</h1>"
    //         templateUrl: "tableData.html"
    //     }
    // });
    // repeatApp.directive("sortData", function () {
    //     return {
    //         //template : "<h1>Welcome</h1>"
    //         templateUrl: "sortData.html"
    //     }
    // });
})();