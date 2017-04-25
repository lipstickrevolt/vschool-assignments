var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');
var express = require("express");
var bodyParser = require("body-parser");
var friendRoute = require("./routes/friend-route")

var app = express();
app.use(bodyParser.json());

app.use("/friends", friendRoute)