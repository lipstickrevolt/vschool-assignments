angular.module("myApp", [])

.directive('myInfo', function(){
    return {
        templateUrl: 'info.html',
        scope: {
            name: "@",
            email: "@"
        }
    };
    
})
.controller('myCtrl', function($scope){
    
    $scope.friends = [{name: "Joe Schmoe", email: "a@a.com"}]
    $scope.email = "joe@joe.com";
})

.controller('secCtrl', function($scope){
    $scope.name = "jill Schmoe";
    $scope.email = "jill@jill.com"
    
})