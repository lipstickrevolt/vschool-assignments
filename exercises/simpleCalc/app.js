function add(){
    var userNum1 = document.getElementById("addNum1");
    var userValue1 = userNum1.value;
    
    var userNum2 = document.getElementById("addNum2");
    var userValue2 = userNum2.value;
    
    var addResult = parseInt(userValue1) + parseInt(userValue2);
    document.getElementById("addTotal").innerHTML = addResult;
    
}

function subtract(){
    var userNum1 = document.getElementById("subtractNum1");
    var userValue1 = userNum1.value;
    
    var userNum2 = document.getElementById("subtractNum2");
    var userValue2 = userNum2.value;
    
    var subtractResult = parseInt(userValue1) - parseInt(userValue2);
    document.getElementById("subtractTotal").innerHTML = subtractResult;
}

function multiply(){
    var userNum1 = document.getElementById("multiplyNum1");
    var userValue1 = userNum1.value;
    
    var userNum2 = document.getElementById("multiplyNum2");
    var userValue2 = userNum2.value;
    
    var multiplyResult = parseInt(userValue1) * parseInt(userValue2);
    document.getElementById("multiplyTotal").innerHTML = multiplyResult;
}
//
//var userCandy = document.getElementById("candyInput");
//    var candyText = userCandy.value;
//    console.log(userCandy);
//    
//    // create empty <li> tag
//    var li = document.createElement("li");
//    // create text node with text of user's candy choice
//    var txtNode = document.createTextNode(candyText);
//    // append txtNode to the li element
//    li.appendChild(txtNode);
//    
//    // get the ul and attach li as the child of the ul
//    var candyList = document.getElementById("candyList");
//    candyList.appendChild(li);