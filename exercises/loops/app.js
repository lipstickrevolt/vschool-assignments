function printLetters(ourString){
    for (var i = 0; i < ourString.length; i++){
        console.log(ourString[i]);
    }
}

printLetters("You the best");


function stringChar(ourString, singleChar){
    for (var i = 0; i < ourString.length; i++){
        if(ourString[i] === singleChar){
            return i
        }
        
    }
    return "There was no " + singleChar + " " + "found!";
}

console.log(stringChar("Mana", "n"));

console.log(stringChar("Mana", "M"));

console.log(stringChar("Mana", "b"));




function myFunction(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] === 42){
            return;
        }         
    }
    console.log("42 is not found");
}
myFunction([2, 4, 9, 22, 42]);





function smallNum(arrayTen){
    var smallest = arrayTen[0];
    for (var i = 0; i < arrayTen.length; i++){
       if (arrayTen[i] < smallest){
           smallest = arrayTen[i];
       }
    }
    return smallest;
}
smallNum([12, 4, 18, 23, 35, 42, 21, 9, 7, 15]);

