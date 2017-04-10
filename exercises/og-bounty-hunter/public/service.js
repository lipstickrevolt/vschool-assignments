angular.module("myApp")

.service("getBounties", ["$http", function($http){
    
    this.getBounty = function(){
        return $http.get('/bounty').then(function(response){
            return response.data
        })
    }
    this.postBounty = function(newBounty){
        return $http.post('/bounty').then(function(newBounty){
            return newBounty.data;
        })
    }
//    this.editBounty = function(id){
//        return $http.put('/bounty' + id).then(function(response){
//            
//        })
//    }
    this.deleteBounty = function(id){
        return $http.delete('/bounty' + id).then(function(response){
            return "Bounty deleted!"
        })
    }
    
    
}])