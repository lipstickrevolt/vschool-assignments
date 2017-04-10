angular.module("myApp")

.service('pullData', function($http){
    
    this.getToDo = function(){
        return $http.get('http://api.vschool.io/mana/todo').then(function (response){
            return response.data;
        })
    }
    this.removeItem = function(id){
        return $http.delete('http://api.vschool.io/mana/todo/' + id).then(function (response) {
                return "you deleted the item";
           
    })
    }
    this.postNew = function(newTodo){
        
        return $http.post('http://api.vschool.io/mana/todo/', newTodo).then(function(newTodo){
          return newTodo.data;
        })
    }
})