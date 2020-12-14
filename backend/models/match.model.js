const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    date: { type: Date, required: true },
    opponents: { type: String, required: true },
})

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;