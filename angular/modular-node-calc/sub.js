var userInput = require("./get-user-input");



module.exports = function(){
    var subNumber = parseInt(userInput.num1) - parseInt(userInput.num2);
        return subNumber;
}