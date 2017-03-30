var app = angular.module('myApp', []);

app.controller('main', ['$scope', function ($scope) {
  
    $scope.submit = function (info) {
        $scope.person = info;
    }


}]);