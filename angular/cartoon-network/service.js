angular.module("myApp")

.service("cartoonObj", function(){
     this.toons = [];
    this.addCartoon = function(toon){
        
        this.toons.push(toon);
        return this.toons;
        
    }
})