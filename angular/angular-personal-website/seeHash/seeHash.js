angular.module("myApp")

.controller("seeHashController", ["$scope", "getLyrics", function($scope, getLyrics){
    getLyrics.getWords().then(function(response){
        
        $scope.lyrics = response;

    })

    getLyrics.getSocial().then(function(response){
        $scope.id = response.artist_twitter_url;
    })
    
}])

.directive("seeHash", function(){
    return {
        restrict: 'E',
        template: "<p class='lyricBox'><pre>{{lyrics.lyrics_body}}</pre></p>"
    }
    
})


.directive("artistSocial", function(){
    return {
        restrict: 'E',
        template: '<p>{{id.artist_twitter_url}}</p>'
    }
})