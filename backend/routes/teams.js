const router = require('express').Router();
let Team = require('../models/team.model');

router.route('/').get((req, res) => {
  Team.find().sort({ ranking: 1 })
    .then(teams => res.json(teams))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const teamName = String(req.body.teamName);
  const players = req.body.players;
  const ranking = Number(req.body.ranking);
  const gamesPlayed = Number(req.body.gamesPlayed);
  const gamesWon = Number(req.body.gamesWon);
  const gamesLost = Number(req.body.gamesLost);
  const points = Number(req.body.points);

  const newTeam = new Team({
    teamName,
    players,
    ranking,
    gamesPlayed,
    gamesWon,
    gamesLost,
    points
  });

  newTeam.save()
    .then(() => res.json('Team added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;