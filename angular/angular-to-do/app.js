angular.module("myApp", [])

.controller('mainCtrl', ["$scope", "pullData", function ($scope, pullData) {
    pullData.getToDo().then(function (data) {
        $scope.todoArrays = data;
    })

    $scope.remove = function (id, index) {
        pullData.removeItem(id).then(function (data) {
            $scope.todoArrays.splice(index, 1);
            console.log(data);
        })
    };


    $scope.submit = function(newTodo) {
        pullData.postNew(newTodo).then(function(newTodo){
             $scope.todoArrays.push(newTodo);

                $scope.newTodo.title = "";
                $scope.newTodo.description = "";
                $scope.newTodo.price = "";
                $scope.newTodo.imgUrl = "";
            
        })

    }

}]);