var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

var dogs = [];

app.get('/dogs', function(req, res){
   res.send(dogs); 
});

app.post('/dogs', function(req, res){
    dogs.push(req.body.dog);
    res.send('your dog ${{req.body.dog}} has been added')
})
app.listen(3000, function(){
    console.log("app is listening");
});

