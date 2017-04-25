function party(name, population) {
    this.name = name;
    this.population = population;
}

var penguins = new party("Penguins", 1000000);
var commis = new party("Communists", 1000000);


function flipCoin() {
    var coin = Math.floor(Math.random() * ((3 - 1) + 1));
    if (coin === 1) {
        sendNuke(commis, onHit, onMiss);

    } else {
        sendNuke(penguins, onHit, onMiss);
    }
}
flipCoin();

function sendNuke(party, onHit, onMiss) {
    var hitMiss = Math.floor(Math.random() * ((3 - 1) + 1));
    if (penguins.population <= 0 || commis.population <= 0) {
        return console.log(party.name + " have won the battle!");
    } else {
        if (hitMiss === 1) {
            onHit(party);
        } else {
            onMiss(party);
        }
    }

}

function onHit(party) {
    var ranDam = Math.floor(Math.random() * ((50000 - 10000) + 10000));
    party.population -= ranDam;
    console.log(party.name + " took " + ranDam + " damage points and has a new population of " + party.population);
    if (party.name === "Penguins") {
        sendNuke(commis, onHit, onMiss);
    } else if (party.name === "Communists") {
        sendNuke(penguins, onHit, onMiss);

    }

}

function onMiss(party) {
    console.log("The" + party.name + " nuke missed");
    if (party.name === "Penguins") {
        sendNuke(commis, onHit, onMiss);
    } else if (party.name === "Communists") {
        sendNuke(penguins, onHit, onMiss);
    }
}