angular.module("myApp", ["ngRoute"])

    .controller("indexControl", ["$scope", function($scope){

        $scope.toggle= false;

    }])

.config(["$routeProvider", function ($routeProvider){
    $routeProvider
        .when("/home", {
        templateUrl: "home/home.html",
        controller: "homeController"
    })
        .when("/seeLyrics", {
        templateUrl: "seeLyrics/seeLyrics.html",
        controller: "seeLyricsController"
    })
    .when("/moreInfo", {
        templateUrl: "moreInfo/moreInfo.html",
        controller: "moreInfoController"
    })
    .otherwise({
        redirectTo: "/home"
    });
    
}]);
