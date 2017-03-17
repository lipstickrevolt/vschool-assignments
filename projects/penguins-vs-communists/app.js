function makeSoldier(party){
    this.party = party;
}

var penguins = [];
var commis = [];

function sendNuke(party, onHit, onMiss){
    
}

function makePenguins(){
    for (var i = 0; i < 1000000; i++){
        penguins.push(new makeSoldier("Penguins"));
    }
}

function makeCommis(){
    for (var i = 0; i < 1000000; i++){
        commis.push(new makeSoldier("Communists"));
    }
}