angular.module("myApp")

.controller("homeController", ["$scope", function($scope){
    
    $scope.test = "home works!"
    $scope.data = {
        bountyType: null,
        option1: 'Sith',
        living: null,
        alive1: "Alive"    
    };
    
}])