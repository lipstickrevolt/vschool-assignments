var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.allItems = [];
    
  
    
    $scope.submit = function(){
        $scope.listItems = {
            title: $scope.title,
            image: $scope.image,
            description: $scope.description
        }
        $scope.allItems.push($scope.listItems);
        console.log($scope.allItems);
        $scope.title = "";
        $scope.image = "";
        $scope.description = "";
    }
    
}]);