angular.module("myApp")

.controller("seeLyricsController", ["$scope", "getLyrics", function($scope, getLyrics){

    if (getLyrics.lyrics === undefined){
        $scope.lyrics = "Go to home page to enter an Artist Name and Track!";
        $scope.twitterUrl = "Enter Artist on home page or follow twitter.com/thesecretofmana";
    } else {

        $scope.lyrics = getLyrics.lyrics;

        $scope.twitterUrl = getLyrics.twitterUrl.artist_twitter_url;

        $scope.artistName = getLyrics.twitterUrl.artist_name;
    }
    
}])

.directive("seeHash", function(){
    return {
        restrict: 'E',
        template: "<p class='lyricBox'><pre class='allLyrics'>{{lyrics}}</pre></p>"
    }
    
})


