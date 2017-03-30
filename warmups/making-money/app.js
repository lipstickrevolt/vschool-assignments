function makeMoney(num) {
    var numString = num.toString();
    var numArray = numString.split("");
    var newMon = num.toString().length;
    console.log(newMon);
    if (newMon === 4) {
        numArray.splice(1, 0, ",");
        var newNum = "$" + numArray.join("");
        console.log(newNum);

    } else if (newMon === 5){
        numArray.splice(2, 0, ",");
        var newNum = "$" + numArray.join("");
        console.log(newNum);
    } else if (newMon === 6){
        numArray.splice(3, 0, ",");
        var newNum = "$" + numArray.join("");
        console.log(newNum);
    } else if (newMon === 7){
        numArray.splice(4, 0, ",");
        numArray.splice(1, 0, ",");
        var newNum = "$" + numArray.join("");
        console.log(newNum);
    } else if (newMon === 8){
        numArray.splice(5, 0, ",");
        numArray.splice(2, 0, ",");
        var newNum = "$" + numArray.join("");
        console.log(newNum);
    } else if (newMon === 9){
        numArray.splice(6, 0, ",");
        numArray.splice(3, 0, ",");
        var newNum = "$" + numArray.join("");
        console.log(newNum);
    }
    
}


makeMoney(123456789);


function formatMoney(num){
    return (num/100).toLocaleString('en-US', {style:'currency', currency:'USD'})
}
formatMoney(123456789);