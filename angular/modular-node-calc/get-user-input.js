var readline = require("readline-sync");

var num1 = readline.question("what is your first number?");
var num2 = readline.question("what is your second number?");

module.exports = {
    num1: num1,
    num2: num2
}