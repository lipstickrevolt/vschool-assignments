angular.module("myApp")

.controller("homeController", ["$scope", "getLyrics", "$location", function ($scope, getLyrics, $location) {
    $scope.artist = "mia";
    $scope.track = "bad girls";
    var artistArray = [];

    $scope.submit = function () {
        getLyrics.artist = $scope.artist;
        getLyrics.track = $scope.track;
        getLyrics.getWords().then(function (data) {

            location.href = "#/seeHash"
            $location.path("/seeHash");
        })
        getLyrics.getID().then(function (data) {
             artistArray.push(data.artist_id);
           
            
        $scope.artistID = artistArray[0];
            console.log($scope.artistID);
            getLyrics.id = $scope.artistID;
            getLyrics.getSocial(getLyrics.id).then(function (data) {
            
            $location.path("/seeHash");

        })
            
        })
//        console.log(artistArray);
//        $scope.artistID = artistArray[0];
         
    }

}])