angular.module("myApp")

.service("getConcerns", ["$http", function($http){
    this.getConcern = function(){
        return $http.get('/concerns').then(function(response){
            return response.data
        })
    }
    this.postConcern = function(newConcern){
        return $http.post('/concerns', newConcern).then(function(response){
            return response.data
        })
    }
    this.editConcern = function(concern){
        return $http.put('/concerns/' + concern._id, concern).then(function(response){
            return response.data
        })
    }
    this.deleteConcern = function(item){
        return $http.delete('/concerns/' + item._id).then(function(response){
            return "Concern deleted!"
        })
    }







}])