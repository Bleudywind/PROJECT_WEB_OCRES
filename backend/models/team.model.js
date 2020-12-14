const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: { type: String, required: true },
    players: [{
        summonerName1: { type: String, required: true },
        summonerName2: { type: String, required: true },
        summonerName3: { type: String, required: true },
        summonerName4: { type: String, required: true },
        summonerName5: { type: String, required: true }
    }],
    ranking: { type: Number, required: true },
    gamesPlayed: { type: Number, required: true },
    gamesWon: { type: Number, required: true },
    gamesLost: { type: Number, required: true },
    points: { type: Number, required: true }
})

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;