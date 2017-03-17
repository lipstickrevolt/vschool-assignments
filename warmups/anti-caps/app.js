function antiCaps(word) {
    var newWord = [];
    var splitWord = word.split('');
    for (var i = 0; i < splitWord.length; i++) {
        if (isCaps(splitWord[i])) {
            var newLetter = splitWord[i].toLowerCase();
        } else {
            var newLetter = splitWord[i].toUpperCase();
        };
        newWord.push(newLetter);
    }
    var newStr = newWord.join("");
    return newStr;
}

function isCaps(letter) {
    return letter === letter.toUpperCase();
}
console.log(antiCaps('Hello')); // hELLO  
console.log(antiCaps('racEcar')); // RACeCAR  
console.log(antiCaps('bAnAnA')); // BaNaNa