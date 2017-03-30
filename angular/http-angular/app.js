angular.module('myApp', [])

.controller('myController', ["$scope", "$http", function ($scope, $http) {
    $scope.test = "Mana";
    $http.get('http://pokeapi.co/api/v1/pokemon/1')
        .then(function (response) {
            console.log(response.data);
        });
    var todos = {
        title: "buy fish",
        description: "not salmon",
        completed: false
    }
    $http.post("http://api.vschool.io/mana/todo/", todos)
    .then(function(response){
          console.log(response.data)
          })
}]);