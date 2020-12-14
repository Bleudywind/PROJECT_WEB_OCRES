const router = require('express').Router();
let Match = require('../models/match.model');

router.route('/').get((req, res) => {
  Match.find()
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