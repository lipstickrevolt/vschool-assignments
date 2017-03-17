var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        var response = JSON.parse(xhttp.responseText);
        // Action to be performed when the document is read;
        console.log(response);
        parsePokemon(response.results);
    }
};
xhttp.open("GET", "http://pokeapi.co/api/v2/pokemon");

xhttp.send();

function parsePokemon(input) {
    for (var i = 0; i < input.length; i++) {
        var create = document.createElement("LI");
        var text = document.createTextNode(input[i].name);
        create.appendChild(text);
        document.getElementById("list").appendChild(create);
    }
}