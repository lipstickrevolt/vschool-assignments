var userInput = require("./get-user-input");



module.exports.mul = function(){
   var mulNumber = parseInt(userInput.num1) * parseInt(userInput.num2);
        return mulNumber;
}