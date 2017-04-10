angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider){
    $routeProvider
        .when("/home", {
        templateUrl: "home/home.html",
        controller: "homeController"
    })
        .when("/seeHash", {
        templateUrl: "seeHash/seeHash.html",
        controller: "seeHashController"
    })
    .when("/women", {
        templateUrl: "women/women.html",
        controller: "womenController"
    })
    .otherwise({
        redirectTo: "/home"
    });
    
}]);

function myFunction(x) {
    $(".x").toggleClass("change");
}