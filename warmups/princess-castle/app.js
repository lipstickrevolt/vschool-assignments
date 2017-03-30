//function player(name, totaleCoins, status, star, setName, gotHit, gotPowerup, gameActive, addCoin, print) {
//    this.name = name;
//    this.totalCoins = totaleCoins;
//    this.status = ["Powered Up", "Big", "Small", "Dead"];
//    this.setName = function (namePicked) {
//        var chance = Math.floor(Math.random() * ((2 - 1) + 1));
//        if (chance === 1) {
//            namePicked = "Mario";
//        } else {
//            namePicked = "Luigi";
//        }
//    }
//    this.gotHit = function () {
//        for (var i = 0; i < this.status; i++) {
//            if (this.status === "Powered Up") {
//                this.status.shift();
//            } else if (this.status === "Big")
//        }
//    }
//    this.gotPowerup = function () {
//
//    }
//    this.gameActive = function () {
//
//    }
//    this.addCoin = function () {
//
//    }
//    this.print = function () {
//
//    }
//}
//
//
//console.log(player.setName);
    
    
var player = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    isStarActive: false,
    setName : function(namePicked){
        this.name = namePicked;
    },
    gotHit: function(){
        if(this.status === "Powered Up"){
            this.status = "Big";
        } else if (this.status === "Big"){
            this.status = "Small";
        } else if (this.status === "Small"){
            this.status = "Dead";
            this.isGameActive = false;
        }
    },
    gotPowerup: function(){
        if (this.status === "Small"){
            this.status = "Big";
        } else if (this.status === "Big"){
            this.status = "Powered Up";
        }
    },
    isGameActive: true,
    addCoin: function(){
        this.totalCoins ++;
    },
    printStats: function(){
        var starMessage = "don't have a star";
        if (this.isStarActive) starMessage = "do have a star";
        console.log(`The character name is ${this.name}, and you have ${this.totalCoins} are ${this.status}, and you ${starMessage}`)
    }
}

function randRange(min, max){
    var rand = Math.floor(Math.random() * (max-min) + min);
    return rand;
}
    
function action(whichAction){
    var random = randRange(0, 3);
    if (random === 0){
       player.gotHit(); 
    } else if (random === 1){
        player.gotPowerup();
    } else if (random === 2){
        player.addCoin();
    }
}
    
player.printStats();
    
for (var i = 0; i < 3; i++){
    action();
    player.printStats();
}