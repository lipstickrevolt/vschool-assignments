angular.module("myApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/home", {
        templateUrl: "home/home.html",
        controller: "homeController"
    })
        .when("/toKill", {
        templateUrl: "toKill/toKill.html",
        controller: "toKillController"
    })
        .when("/killed", {
        templateUrl: "killed/killed.html",
        controller: "killedController"
    })
    .otherwise({
        redirectTo: "/home"
    }); 
    
}]);
    
//    
//.controller('mainCtrl', ["$scope", "getBounties", function($scope, getBounties){
////    getBounties.getBounty().then(function(data){
////        $scope.allBounty = data;
////    })
//    
//    $scope.data = {
//        bountyType: null,
//        option1: 'Sith'
//    };
//    $scope.test = "mana"
//}]);