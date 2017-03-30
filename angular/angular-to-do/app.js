angular.module("myApp", [])

.controller('mainCtrl', ["$scope", "$http", function ($scope, $http) {
    $scope.getfunction = function () {
        $http.get('http://api.vschool.io/mana/todo')
            .then(function (response) {
                $scope.todoArrays = response.data;
                
            });
        
    }
    $scope.getfunction();
    $scope.remove = function (id) {
            $http.delete('http://api.vschool.io/mana/todo/' + id)
                .then(function (response) {
                alert("you deleted the item");
                $scope.getfunction();
                });
            
        }
    $scope.submit = function(newTodo){
          $http.post('http://api.vschool.io/mana/todo/', newTodo)
            .then(function(response){
              $scope.todoArrays.push(response.data);
              
              $scope.newTodo.title="";
              $scope.newTodo.description="";
              $scope.newTodo.price="";
              $scope.newTodo.imgUrl="";
          })
       
    }

}]);

