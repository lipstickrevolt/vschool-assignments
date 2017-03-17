//var readlineSync = require('readline-sync');
//
//var userName = readlineSync.question('May I have your name? ');
//
//console.log('Hi ' + userName + '!');
//
//var highScore = readlineSync.question('What was your High Score?');

//console.log('Hi ' + userName + '!');
//if (readlineSync.keyInYN("Would you like to hear sometrash talk?") === true) {
var trashTalk = ["I'm better", "My little sister got that score", "you probably used cheat codes", "that's more of a low score than a high one"];

var randTT = trashTalk[Math.floor(Math.random() * (3 - 0) + 0)];
//
//};

function updateForm() {
    var name = document.getElementById("name").value;

    var game = document.getElementById("game").value;


    var date = document.getElementById("date").value;
    

    var highScore = document.getElementById("highScore").value;
    console.log(date, highScore, game, name);

    var table = document.getElementById("myTable");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");


    td1.innerHTML = document.getElementById("name").value;
    td2.innerHTML = document.getElementById("game").value;
    td3.innerHTML = document.getElementById("date").value;
    td4.innerHTML = document.getElementById("highScore").value;
    if (date == "" || name == "" || game == ""){
        return alert("You must fill out each field");
    }
    if (highScore == 0) return alert("You must enter an ACTUAL high score!");
    
    
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    table.children[0].appendChild(row);
}

document.getElementById("submit").addEventListener("click", updateForm);

$("#submit").click(function(){
    if ($("input.confirm").is(':checked')){
        alert(randTT);
    } else {
        console.log("awww");
    }
});

