var userInput = require("./get-user-input");



module.exports.div = function(){
   var divNumber = parseInt(userInput.num1) / parseInt(userInput.num2);
        return divNumber;
}