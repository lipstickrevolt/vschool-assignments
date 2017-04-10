angular.module("myApp")

.directive("navbar", function(){
    
    return {
        restrict: "A",
        templateUrl: "directives/navbar/navbar.html",
        replace: true
    }
    
});