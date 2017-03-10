var readline = require('readline-sync');
    
var operators = ["add", "sub", "mul", "div"];

var firstNum = readline.question("Please enter your first number: ");
console.log(firstNum);

var secNum = readline.question("Please enter your second number: ");
console.log(secNum);

var operator = readline.keyInSelect(operators, "Please eneter the operation to perform: ");



if (operator == 0){
    add(firstNum, secNum);
} else if (operator == 1){
    subtract(firstNum, secNum);
} else if (operator == 2){
    multiply(firstNum, secNum);
} else if (operator == 3){
    divide(firstNum, secNum);
}

function add(firstNum, secNum){
    var result = parseInt(firstNum) + parseInt(secNum);
    console.log("The result is: " + result);
}

function multiply(firstNum, secNum){
    var result = parseInt(firstNum) * parseInt(secNum);
    console.log("The result is: " + result);
}

function divide(firstNum, secNum){
    var result = parseInt(firstNum) / parseInt(secNum);
    console.log("The result is: " + result);
}

function subtract(firstNum, secNum){
    var result = parseInt(firstNum) - parseInt(secNum);
    console.log("The result is: " + result);
}
