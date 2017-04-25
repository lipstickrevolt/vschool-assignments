var express = require('express');
var app = express();
var port = 4040;

var bestArtists = [
    {
        name: "The Beatles",
        hit: "Hold your hand",
        genre: "Pop"
    },
    {
        name: "The Fugees",
        hit: "Ready or Not",
        genre: "Hip Hop"
    },
    {
        name: "MIA",
        hit: "Bad Girls",
        genre: "World"
    }
];

app.get('/bestArtists', function (req, res) {
    
    console.log(req.query);
    foundItems = [];
    
    for (var i = 0; i < bestArtists.length; i++){
        
        var haveFoundExactMatch = true;
        
        for (var key in req.query){
           if (req.query[key] != bestArtists[i][key]){
               haveFoundExactMatch = false;
           } 
        }
        if (haveFoundExactMatch){
            foundItems.push(bestArtists[i]);
        }
    }
    
    res.send(foundItems);
})


//
//for (var i = 0; i < fruit.length; i++){
//        
//        var haveFoundExactMatch = true;
//        
//        for (var key in fruit[i]){
//           if (req.query[key] != fruit[i][key]){
//               haveFoundExactMatch = false;
//           } 
//        }
//        if (haveFoundExactMatch){
//            foundItems.push(fruit[i]);
//        }
//    }

app.listen(port, function () {
    console.log("Your server is listening");
});