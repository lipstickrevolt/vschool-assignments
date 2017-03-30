angular.module("myApp", [])

.controller('mainCtrl', ["$scope", "$http", function($scope, $http){
    var req = {
        method: "GET",
        headers: {
            "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"}
    }
     $scope.submit = function(){
        req.url = "https://yoda.p.mashape.com/yoda?sentence=" + $scope.speak; 
       $http(req).then(function(response){
        $scope.yoda = response.data; 
        console.log(response);   
        $scope.speak = "";   
    })   
    }    
    
    
    
    
}]);