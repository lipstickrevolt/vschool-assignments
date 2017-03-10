var num1 = parseInt(prompt("enter the first number"));
var num2 = parseInt(prompt("enter the second number"));


if (num1 > num2){
    console.log(num2);
} else {
    console.log(num1);
}

function monkeyTrouble(aSmile, bSmile){
    if(aSmile && bSmile){
        return true;
    } else if (aSmile !== bSmile){
        return false;
    } else {
        return true;
    }
}
console.log(monkeyTrouble(true, true));   
console.log(monkeyTrouble(false, false));  
console.log(monkeyTrouble(true, false));  

var date = new Date(); 
var hour = date.getHours();
if (hour > 12 && hour < 19){
    alert("Good afternoon");
} else if (hour < 12){
    alert("Good morning");
} else {
    alert("Good evening");
}