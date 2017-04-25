var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/practice');

var Schema = mongoose.Schema;

var rapperSchema = new Schema({
    name: String,
    uniqueWordsUsed: Number,
    songs: [String],
    homeTown: [String],
    isDope: Boolean
    
});

var Rapper = mongoose.model('Rapper', rapperSchema);

module.exports = Rapper;

var rapper = new Rapper(/*req.body*/{name: "Aesop Rock"});

rapper.save(function(err, newRapper){
    console.log(newRapper);
})
