var app= angular.module("myApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        })
        .when('/wishlist', {
            templateUrl: 'wishlist/wishlist.html',
            controller: 'wishlistController'
        })
        .when('/otherTech', {
            templateUrl: 'otherTech/otherTech.html',
            controller: 'otherTechController'
        });
}]);

app.directive("wishList", function(){
    return {
        restrict: "E",
        template: "<div class='boxes col-xs-10 col-xs-offset-1 col-md-10 col-md-offset-1' ng-repeat='item in otherTechs'><div class='col-md-4'>Item: {{item.name}}</div> <div class='col-md-4'>Image: <img class='pic' ng-src='{{item.img}}'></div><div class='col-md-4'>Price: {{item.price | currency: '€'}}</div></div>"
    };
});