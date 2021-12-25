var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.years = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/years.json';

        $http.get(file)
        .then(function(response) {
            $scope.years = response.data.years;
        });
    };

    $scope.OpenRepositoryHomepage = (year) => {
        window.open(year.site);
    }

    $scope.OpenRepository = (year) => {
        window.open(year.code);
    }

    $scope.OpenAoCHomepage = (year) => {
        window.open(year.aoc_site);
    }

    $scope.init();
});