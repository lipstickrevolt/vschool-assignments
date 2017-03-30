angular.module("myApp")

.controller("homeController", ["$scope", function($scope){
    $scope.mdFlag = "http://www.united-states-flag.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/s/m/smd35sp.jpg";
    $scope.state = "Maryland";
    
}])