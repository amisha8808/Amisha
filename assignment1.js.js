(function () {
    'use strict';

    var app = angular.module('LunchCheck', []);

    app.controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.name;
        $scope.message;
        
        $scope.displayNumeric = function () {
            console.log($scope.name);
            console.log($scope.name.length);


            var lungimea = $scope.name.length;
            console.log(lungimea);
            //$scope.name = $scope.name.split(" ");

            if ($scope.name.length<= 3) {
                $scope.message = "enjoy";
            }
            
                else {
                    $scope.message = "too much";

                };
            
        };
    };
})();