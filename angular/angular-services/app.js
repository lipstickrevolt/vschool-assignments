angular.module("myApp", [])

.controller('mainCtrl', ["$scope", "rapService", function($scope, rapService){
    $scope.submit = function(){
        $scope.addRapper = {
            rapName: $scope.rapperInput,
            rapImage: $scope.imgUrl
        }
        $scope.rappers = rapService.addRapper($scope.addRapper);
        $scope.rapperInput = "";
        $scope.imgUrl = "";
    }
    $scope.remove = function(){
        $scope.rappers = rapService.removeRapper($scope.rapperInput);
    }
}]);
    
    
    