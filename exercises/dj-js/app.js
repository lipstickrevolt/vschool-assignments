document.getElementById("partybox").addEventListener("mouseover", hoverEvent);

function hoverEvent(){
    document.getElementById("partybox").className = 'box-blue';
}

document.getElementById("partybox").addEventListener("mousedown", mouseDownEvent);

function mouseDownEvent(){
    document.getElementById("partybox").className = 'box-red';
}

document.getElementById("partybox").addEventListener("mouseleave", letGoEvent);

function letGoEvent(){
    document.getElementById("partybox").className = 'box-yellow';
}

document.getElementById("partybox").addEventListener("dblclick", doubleClickEvent);

function doubleClickEvent(){
    document.getElementById("partybox").className = 'box-green';
}

document.getElementById("partybox").addEventListener("wheel", mouseScrollEvent);

function mouseScrollEvent(){
    document.getElementById("partybox").className = 'box-orange';
}

document.addEventListener("keydown", function(event) {
    if (event.which === 80){
      document.getElementById("partybox").className = 'square';
    } else if (event.which === 66) {
    document.getElementById("partybox").className = 'box-blue';
    } else if (event.which === 82) {
         document.getElementById("partybox").className = 'box-red';
    } else if (event.which === 89){
         document.getElementById("partybox").className = 'box-yellow';
    } else if (event.which === 71) {
         document.getElementById("partybox").className = 'box-green';
    } else if (event.which === 79){
         document.getElementById("partybox").className = 'box-orange';
    }
    console.log(event.which);
})
