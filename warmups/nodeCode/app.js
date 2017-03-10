function addCandy() {  
      var userCandy = document.getElementById("candyInput");
    var candyText = userCandy.value;
    console.log(userCandy);
    
    // create empty <li> tag
    var li = document.createElement("li");
    // create text node with text of user's candy choice
    var txtNode = document.createTextNode(candyText);
    // append txtNode to the li element
    li.appendChild(txtNode);
    
    // get the ul and attach li as the child of the ul
    var candyList = document.getElementById("candyList");
    candyList.appendChild(li);
 }