var newWord = [];
var noRepeat = [];

function nonRepeat(word){
    
   var wordArray = word.split("").sort();
    for (var i = 0; i < wordArray.length; i++){
        if(wordArray[i] != wordArray[i + 1]){
            newWord.push(word[i]);
        } else {
            noRepeat.push(word[i]);
        }
    }
    console.log(newWord);
}

nonRepeat("ggggggggxkljfvlsjkfg");


function firstRepeat(str) {

    for (var i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1] && str[i + 1] != str[i + 2]) {
            return str[i + 1]
        }
    }
}

firstRepeat("bbbbbbababbat");