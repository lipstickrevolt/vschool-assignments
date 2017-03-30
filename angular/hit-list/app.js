angular.module("myApp", []) 

.controller('myController', ["$scope", "$http", function ($scope, $http) {
    $scope.test = "Mana";
    $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response) {
            console.log(response.data);
     $scope.data = response.data;
        });
    
}]);