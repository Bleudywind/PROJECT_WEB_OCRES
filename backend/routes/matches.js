const router = require('express').Router();
let Match = require('../models/match.model');

router.route('/').get((req, res) => {
  Match.find()
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/incomingMatches').get((req, res) => {
  Match.findOne({ "date": { "$gte": new Date("2020-11-10") } }).sort({ date: 1 }).limit(3)
    .then(matches => res.json(matches))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/nextMatch').get((req, res) => {
  Match.find({ "date": { "$gte": new Date("2020-11-10") } }, { "_id": 0, "__v": 0 }).sort({ date: 1 }).limit(1)
    .then(match => res.json(match))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const date = Date.parse(req.body.date);
  const opponent = String(req.body.opponent)

  const newMatch = new Match({
    date,
    opponent
  });

  newMatch.save()
    .then(() => res.json('Match added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateDate/:id').post((req, res) => {
  Match.findById(req.params.id)
    .then(match => {
      match.date = Date.parse(req.body.date);

      match.save()
        .then(() => res.json('Match updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  Match.findByIdAndDelete(req.params.id)

    .then(() => res.json('Match deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;