angular.module("myApp", [])

.controller("mainCtrl", ["$scope", "blueService", "redService", function ($scope, blueService, redService) {
    $scope.scoreBlue = blueService.score;
    $scope.scoreRed = redService.score;
//    $scope.scoreRed = "";
//    $scope.scoreBlue = "";

    $scope.clickBlue = function() {
        $scope.scoreBlue = blueService.increment();
        $scope.scoreRed = redService.decrement();
        $scope.scoreRed = redService.reset();
    }
    
    $scope.clickRed = function(){
        $scope.scoreRed = redService.increment();
        $scope.scoreBlue = blueService.decrement();
        $scope.scoreBlue = blueService.reset();   
    }
}])