angular.module("myApp")

.controller("aboutController", ["$scope", function($scope){
    $scope.mdInfo1 = "Maryland was the hometown of the Babe and the Raven: Baseball great Babe Ruth and Edgar Allen Poe lived there. Poe is also buried in Baltimore's Westminster Cemetery.";
    
    $scope.mdInfo2 = "Maryland is famous for great seafood, especially crabs. During lunch hour on Maryland's Chesapeake Bay, vendors sell almost as many crabcakes as hot dogs and hambugers combined.";
    
    $scope.mdInfo3 = "The Mason-Dixon line was drawn between Pennsylvania and Maryland in the 1760s to end a border dispute. The line is traditionally thought of as the division between America's North and South.";
    
    $scope.state = "Maryland";
    
}]);