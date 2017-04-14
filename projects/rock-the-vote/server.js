var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var voteRoute = require("./routes/vote-route");
var mongoose = require('mongoose');
var path = require("path");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
mongoose.connect('mongodb://localhost/practice', function(err){
    if (err) throw err;
    console.log("Connected to DB");
});

app.use("/concerns", voteRoute)


app.listen(3500, function(){
    console.log("servers up at 3500");
})