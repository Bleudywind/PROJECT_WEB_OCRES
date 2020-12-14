const router = require('express').Router();
let Match = require('../models/match.model');

router.route('/').get((req, res) => {
  Match.find()
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/incomingMatches').get((req, res) => {
  Match.find({ "date": { "$gte": new Date("2020-11-10") } }).sort({ date: 1 }).limit(1)
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/nextMatch').get((req, res) => {
  Match.find({ "date": { "$gte": new Date("2020-11-10") } }, { "_id": 0, "opponents": 0, "__v": 0 }).sort({ date: 1 }).limit(1)
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const date = Date.parse(req.body.date);
  const opponents = String(req.body.opponents)

  const newMatch = new Match({
    date,
    opponents
  });

  newMatch.save()
    .then(() => res.json('Match added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;