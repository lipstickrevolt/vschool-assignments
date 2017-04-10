angular.module("myApp", [])

.controller("myCtrl",["$scope", function($scope){
    $scope.add = function(x, y){
        var x = $scope.firstNum;
        var y = $scope.secNum;
        $scope.sum = x + y;
    }    
    
}] )

.controller("multiplyCtrl",["$scope", function($scope){
    $scope.multiply = function(x, y){
        var x = $scope.firstMul;
        var y = $scope.secMul;
        $scope.sumMul = x * y;
    }    
    
}] )