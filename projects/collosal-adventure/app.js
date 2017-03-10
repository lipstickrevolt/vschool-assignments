var readline = require('readline-sync');
var specialItems = ["Gold", "Silver", "Crown", "Sword"];
var monsters = [{
        name: "Zombie",
        HP: 25
}, {
        name: "Hitler",
        HP: 40
},
    {
        name: "Donald Trump",
        HP: 60
               }];
console.log("Welcome to the amazing world of collosal adventures!");

var playerName = readline.question("Please enter your first name: ");
console.log(playerName);

function walking() {
    var pressW = readline.question("Please enter the (w) key to walk");
    console.log(pressW);
    if (pressW = "w") {
        var roll = (Math.floor(Math.random() * (4 - 1) + 1);
            if (roll = 1) {
                return wildEnemy();
            } else {
                return walking();
            }
        }
    }
}
walking();

function wildEnemy() {
    if (random.wildEnemy appears) {
        user choose(run or attack)
    }
    if (attack) {
        random.power(min, max)
    } else if (run) {
        random.num(1, 2);
    }
}

function wildEnemyAttack() {
    random.attack;
    if user wins {
        give player HP and random.speicalItems
    }
}

function inventory() {
    if playerName wins {
        win specialItems
    }
    if enter "Print" (playerName, HP, inventory)
}

function generateEnemy() {
    for (var i = 0; i < 10; i++) {
        var rand = etArray[Math.floor(Math.random() * etArray.length)];

        this.defense = this.hitPoints * 3;
        enemyArray.push(new Character(rand, , defense));
        console.log(enemyArray[i]);
    }
}

for every walk(Math.floor(Math.random() * (max - min) + min);
        (wildEnemy 25 % )
        //generateEnemy();
        //
        //var readline = require('readline-sync');
        //    
        //var operators = ["add", "sub", "mul", "div"];
        //
        //var firstNum = readline.question("Please enter your first number: ");
        //console.log(firstNum);
        //
        //var secNum = readline.question("Please enter your second number: ");
        //console.log(secNum);
        //
        //var operator = readline.keyInSelect(operators, "Please eneter the operation to perform: ");
        //
        //
        //
        //if (operator == 0){
        //    add(firstNum, secNum);
        //} else if (operator == 1){
        //    subtract(firstNum, secNum);
        //} else if (operator == 2){
        //    multiply(firstNum, secNum);
        //} else if (operator == 3){
        //    divide(firstNum, secNum);
        //}