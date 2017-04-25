angular.module("myApp")

.controller("homeController", ["$scope", "getBounties", function ($scope, getBounties) {
    $scope.editBox = false;
    getBounties.getBounty().then(function (response) {
        $scope.bounties = response;
        
    })

    $scope.submit = function (newBounty) {
        getBounties.postBounty(newBounty).then(function (response) {
                console.log(response);
            $scope.bounties.push(response);
            
        })
        $scope.newBounty = {};
    }
    
    $scope.delete = function(item, index){
        $scope.bounties.splice(index, 1);
        console.log(item);
        getBounties.deleteBounty(item);
        
        
    }
    
    $scope.edit = function(){
        $scope.editBox = true;
    }
    
    $scope.save = function(item){
        console.log(item._id);
        getBounties.editBounty(item);
        $scope.editBox = false;
    }
}])