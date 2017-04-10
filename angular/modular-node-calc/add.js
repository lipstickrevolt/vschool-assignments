var userInput = require("./get-user-input");



module.exports.add = function(){
    var addNumber = parseInt(userInput.num1) + parseInt(userInput.num2);
        return addNumber;
}