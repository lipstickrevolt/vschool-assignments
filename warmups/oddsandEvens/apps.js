//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

//code here

var num = [11, 22, 33, 45, 62];
    
var oddsAndEvens = function(num){
    for (i = 0; i < num.length; i++)
    if(num[i] % 2 === 0){
        evens.push(num[i]);
    } else if (num % 2 !== 0){
        odds.push(num[i]);
    }
}

oddsAndEvens(num);
console.log(odds);
console.log(evens);