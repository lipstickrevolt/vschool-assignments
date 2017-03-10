var goombasPrice = 5; 
var bobOmbsPrice = 7;
var cheepCheepPrice = 11;
var cheepCheepTotalPrice; 
var goombasTotalPrice;
var bobOmbsTotalPrice;


var finalTotal = goombasTotalPrice + bobOmbsTotalPrice + cheepCheepTotalPrice;

function goombasCalc(){
    var goombasTotalCaught = document.getElementById("goombaInput").value;
    console.log(goombasTotalCaught);
    document.getElementById("goombaOutput").innerHTML = goombasPrice * goombasTotalCaught;
    goombasTotalPrice = goombasPrice * goombasTotalCaught;
    console.log(goombasTotalPrice); 
}

function bobOmbsCalc(){
    var bobOmbsTotalCaught = document.getElementById("bobOmbsInput").value;
    console.log(bobOmbsTotalCaught);
    document.getElementById("bobOmbsOutput").innerHTML = bobOmbsPrice * bobOmbsTotalCaught;
    bobOmbsTotalPrice = bobOmbsPrice * bobOmbsTotalCaught;
    console.log(bobOmbsTotalPrice);
}

function cheepCheepCalc(){
    var cheepCheepTotalCaught = document.getElementById("cheepCheepInput").value;
    console.log(cheepCheepTotalCaught);
    document.getElementById("cheepCheepOutput").innerHTML = cheepCheepPrice * cheepCheepTotalCaught;
    cheepCheepTotalPrice = cheepCheepPrice * cheepCheepTotalCaught;
    console.log(cheepCheepTotalPrice);
}


function shabang(){
    console.log(goombasTotalPrice + bobOmbsTotalPrice + cheepCheepTotalPrice);
    document.getElementById("shabangTotal").innerHTML = goombasTotalPrice + bobOmbsTotalPrice + cheepCheepTotalPrice;
}