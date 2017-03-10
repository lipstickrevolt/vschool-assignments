var hello= function (){
    return("Hello, Class")
}
hello();


function double(num){
    return(num * 2);
}
double(3);

//
//Create a function called favColor that takes in a color parameter. If the color that is passed in is the string "blue" return "That's my favorite color too!" if it's anything else then return "What a lame color." (be careful about capital letters and punctuation in your strings, they have to be exact for your solution to be correct.)

function favColor(color){
    if (color === "blue"){
        return("That's my favorite color too!");
    } else {
        return("What a lame color.");
    }
}
favColor("blue");
favColor("red");

