angular.module("myApp")

.service("blueService", function(){
    
    this.score = 100;
    this.increment = function(){
        return this.score ++;
    }
        
        
    this.decrement = function(){
        return this.score --;
    }
    
     this.reset = function(){
        if (this.score === -1){
           return this.score = 100;
        } else {
            return this.score
        }
    }       
    
})