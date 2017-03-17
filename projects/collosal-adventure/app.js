var readline = require('readline-sync');
var specialItems = ["Gold", "Silver", "Shield", "Sword"];
var userItems = [];

function CreateMonster(name, life, HP, runDam) {
    this.name = name;
    this.life = life;
    this.HP = HP;
    this.runDam = runDam;
}

var player = {
    name: playerName,
    life: 200,
    HP: 100,
    runDam: 5,
};

var monsters = [];


console.log("Welcome to the amazing world of collosal adventures!");

var playerName = readline.question("Please enter your first name: ");
console.log(playerName);

var isGameOn = true;

function walking() {
    var pressW = readline.question("Please enter the (w) key to walk or press (i) to see your inventory");
    if (pressW == "w") {
        var roll = Math.floor(Math.random() * ((3 - 1) + 1) + 1);
        if (roll == 1) {
            wildEnemyAttack();
        } else if (roll == 2) {
            console.log("you are safe for now");
            walking();
        } else {
            console.log("you are safe for now");
            walking();
        }
    } else if(pressW == "i"){
        printInventory();
        walking();
    } 
}

generateHitler();
generateTrump();
generateZombie();

function findRandMon() {
    var randMonster = monsters[Math.floor(Math.random() * (monsters.length))];
    return randMonster;
}
findRandMon();

function fighting(randMonster) {
    player.life = player.life - randMonster.HP;
    console.log("your life is now " + player.life);
    randMonster.life = randMonster.life - player.HP;
}

function wildEnemyAttack() {

    var randMonster = findRandMon();
//    var options = ["run", "attack"];
//    var index = readline.keyInSelect(options, randMonster.name + ' has appeared. Do you want to run or attack?');
//    console.log(index);

    while (randMonster.life > 0 && player.life > 0) {
        var options = ["run", "attack"];
        var index = readline.keyInSelect(options, "you are still fighting " + randMonster.name + " you are almost done!");
        if (index === 0) {
            var runChance = Math.floor(Math.random() * ((2 - 1) + 1));
            if (runChance === 1) {
                console.log("You escaped");
                break;
            } else {
                console.log(`you took ${randMonster.runDam} damage while running`);
                player.life = player.life - randMonster.runDam;
                randMonster.life = randMonster.life - player.runDam;
            }
        } else if (index === 1) {
            fighting(randMonster);
        }

        if (randMonster.life < 1) {
            var randItem = specialItems[Math.floor(Math.random() * (3 - 0) + 0)];
            console.log("You have killed " + randMonster.name);
            console.log("You received a " + randItem);
            userItems.push(randItem);
        }
        if (player.life < 1) {
            console.log("You have been killed! GAME OVER!");
        }
//         else {
//            if (randMonster.name === "Zombie") {
//                console.log("get ready to fight " + randMonster.name);
//                console.log("now your life is " + player.life + " keep on fighting!");
//            } else if (randMonster.name === "Hitler") {
//                console.log("get ready to fight " + randMonster.name);
//                console.log("now your life is " + player.life + " keep on fighting!");
//
//            } else if (randMonster.name === "Donald Trump") {
//                console.log("get ready to fight " + randMonster.name);
//                console.log("now your life is " + player.life + " keep on fighting!");
//
//            }
//        }
    }
}

function printInventory(){
    console.log(userItems);
}

function generateTrump() {
    for (var i = 0; i < 1; i++) {
        monsters.push(new CreateMonster("Trump", 120, 60, 20));

    }
}

function generateZombie() {
    for (var i = 0; i < 10; i++) {
        monsters.push(new CreateMonster("Zombie", 25, 25, 5));

    }
}

function generateHitler() {
    for (var i = 0; i < 4; i++) {
        monsters.push(new CreateMonster("Hitler", 50, 40, 10));
    }
}

while (isGameOn) {
    walking();
    if (player.life < 1) {
        isGameOn = false;
        break;
    }
};