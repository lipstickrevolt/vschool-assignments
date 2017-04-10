angular.module("myApp", []) 

.controller('myController', ["$scope", "pullData", function ($scope, pullData) {
    pullData.getHittas().then(function(data){
        $scope.hittas = data;
    });
    
        }]);