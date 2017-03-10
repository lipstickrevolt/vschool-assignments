function sumNumber(num1, num2){
    return num1 + num2;
}
var total = sumNumber(4, 3);
console.log(total);

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log(num1)
    } else if (num2 > num1 && num2 > num3){
        console.log(num2)
    } else if (num3 > num1 && num3 > num2){
        console.log(num3)
    }
}
largestNum(13, 27, 111);
//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function oddsEvens(num1){
    if (num1 % 2 === 0){
        return "even"
    } else {
        return "odd"
    }
}
oddsEvens(7);

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function sliceString(longWord){
    if (longWord.length <= 20){
        return longWord.concat(longWord)
    } else if (longWord.length > 20) {
        return longWord.slice(0, Math.floor(longWord.length / 2))
    }
    
}
sliceString("OnomonopiaImjustwritingalongstring");