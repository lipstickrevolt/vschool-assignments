angular.module("myApp", [])

.controller("mainCtrl", ["$scope", "cartoonObj", function($scope, cartoonObj){
    
    $scope.submit = function(){
        $scope.addCartoon = {
            title : $scope.title,
            description : $scope.description,
            image : $scope.imgUrl
        };
        $scope.allToons = cartoonObj.addCartoon($scope.addCartoon);
        
        $scope.title = "";
        $scope.description = "";
        $scope.imgUrl = "";
        
        
    }
    
}])