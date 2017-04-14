var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var voteSchema = new Schema({
    title: String,
    description: String,
    like: {
        type: Number,
        default: 0},
    disLike: {
        type: Number,
        default: 0},
    totalVotes: {
        type: Number,
        default: 0},
    comments: [String]
})

var Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;

