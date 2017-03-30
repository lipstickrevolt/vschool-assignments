angular.module("myApp")

.service('rapService', function(){
    this.rapArray = [];
    var self = this;
    
    this.addRapper = function(rapper){
        self.rapArray.push(rapper)
        return self.rapArray;
    }
    
    this.removeRapper = function(rapper){
        for (var i = 0; i < self.rapArray.length; i++ ){
            if (rapper === self.rapArray[i].rapName){
                self.rapArray.splice(i, 1);
                return self.rapArray;
            }
        }
    }
})