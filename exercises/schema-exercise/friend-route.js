var express= require("express");
var rapperRoute = express.Router();
var Rapper = require("../models/rapper-schema")

rapperRoute

.get("/", function(req, res){
    console.log(req.query)
    Rapper.find(req.query, function(err, rappersArray){
        res.send(rappersArray);
    })
})

.post("/", function(req, res){
    newRapper = new Rapper(req.body);
    newRapper.save(function(err, savedRapper){
        res.send(savedRapper);
    });
})

.delete("/:id", function(req, res){
    Rapper.findById(req.params.id, function(err, deletedRapper){
        res.send(deletedRapper);
    })
})

.put("/:id", function(req, res){
    Rapper.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, editedRapper){
        res.send(editedRapper);
    })
})