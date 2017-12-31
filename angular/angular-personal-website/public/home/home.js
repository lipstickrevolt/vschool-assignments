angular.module("myApp")

.controller("homeController", ["$scope", "getLyrics", "$location", function ($scope, getLyrics, $location) {

    $scope.artist = "";
    $scope.track = "";

    $scope.submit = function (artist, track) {

        getLyrics.getWords(artist, track).then(function (data) {

            console.log(getLyrics.lyrics);
        });

        getLyrics.getID(artist, track).then(function (artistID) {

            getLyrics.getSocial(artistID).then(function (data) {

                $location.path("/seeLyrics");

            })
            
        })
         
    }

}])