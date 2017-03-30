var word = {};


function newInput(name, definition){
    this.name = name.toLowerCase();
    word[name] = definition;
}


newInput("dog", "an animal");
newInput("cat", "a human");



function findWord (name){
    if (word[name] === undefined){
        console.log("this word is not in dictionary yet");
    } else {
        return word[name];
    }
    
}

console.log(findWord('dog'));
//
//allows the user to enter new words and saves them into your object (be sure to pass the object in as a parameter). Does not allow duplicate words to be stored in the dictionary. This includes case-sensitivity.

