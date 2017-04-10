var userInput = require("./get-user-input");
var readline = require("readline-sync");
var addition = require("./add");
var subtract = require("./sub");
var multiply = require("./mul");
var divide = require("./div");


console.log("your numbers are " + userInput.num1 + " and " + userInput.num2);


var operations = ['Add', 'Subtract', 'Multiply', 'Divide'];
var index = readline.keyInSelect(operations, 'Which operation?');
function calculate(){
    if (operations[index] === 'Add'){
       var total = addition.add();
        console.log(total);
    } else if (operations[index] === 'Subtract'){
        var total = subtract();
        console.log(total);
    } else if (operations[index] === 'Multiply'){
        var total = multiply.mul();
        console.log(total);
    } else if (operations[index] === 'Divide'){
        var total = divide.div();
        console.log(total);
    }
}
calculate();