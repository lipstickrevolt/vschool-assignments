angular.module("myApp")

.controller("seeHashController", ["$scope", "getLyrics", function($scope, getLyrics){
    console.log(getLyrics.lyrics);

    if (getLyrics.lyrics === undefined){
        $scope.lyrics = "Go to home page to enter an Artist Name and Track!";
        $scope.twitterUrl = "Enter Artist on home page or follow twitter.com/thesecretofmana";
    } else {

        $scope.lyrics = getLyrics.lyrics;

        $scope.twitterUrl = getLyrics.twitterUrl.artist_twitter_url;
    }
    
}])

.directive("seeHash", function(){
    return {
        restrict: 'E',
        template: "<p class='lyricBox'><pre>{{lyrics}}</pre></p>"
    }
    
})


