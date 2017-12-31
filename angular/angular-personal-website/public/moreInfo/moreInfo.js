angular.module("myApp")

.controller("moreInfoController", ["$scope", "getLyrics", function($scope, getLyrics){

    if (getLyrics.twitterUrl === undefined){
        $scope.twitterUrl = "N/A";
        $scope.otherStuff = "Enter Artist Name on Home Page";
        $scope.genres = "N/A";
        $scope.artistCountry = "N/A";
    } else {
    $scope.twitterUrl = getLyrics.twitterUrl.artist_twitter_url;
    $scope.otherStuff = getLyrics.twitterUrl.artist_vanity_id;
    $scope.genres = getLyrics.twitterUrl.primary_genres.music_genre;
    $scope.artistCountry = getLyrics.twitterUrl.artist_country;
    }
}])
