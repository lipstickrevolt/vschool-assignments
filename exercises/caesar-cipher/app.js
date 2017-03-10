//var readline = require('readline-sync');
//var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(readline.question('How many letters would you like to shift? '));



alphabet = "abcdefghijklmnopqrstuvwxyz";



function encoder(stringToEncode, howFarRemoved) {
    var newString = "";
    for (var i = 0; i < stringToEncode.length; i++) {
        var char = stringToEncode[i];
        var indexOfCharacter = alphabet.indexOf(char);
        var newPosition = indexOfCharacter + howFarRemoved;
        if (newPosition > 25) {
            newPosition = newPosition - 26;
        }

        var newCharacter = alphabet[newPosition];
        if (indexOfCharacter === -1){
            newCharacter = char;
        }
        newString += newCharacter
    }
    return newString;
}
console.log(encoder("v school is awesome!", 11));