angular.module("myApp")

.service("getBounties", ["$http", function($http){
    
    this.getBounty = function(){
        return $http.get('/bounty').then(function(response){
            return response.data
        })
    }
    this.postBounty = function(newBounty){
        return $http.post('/bounty', newBounty).then(function(newBounty){
            return newBounty.data
        })
    }
    this.editBounty = function(item){
        return $http.put('/bounty/' + item._id, item).then(function(response){
            return response.data
        })
    }
    this.deleteBounty = function(item){
        return $http.delete('/bounty/' + item._id).then(function(response){
            return "Bounty deleted!"
        })
    }
    
    
}])