const router = require('express').Router();
let Annonce= require('../models/annonce.model');

router.route('/').get((req, res) => {
  Annonce.find().sort({ date: 1 })
    .then(annonces => res.json(annonces))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/mostRecent').get((req, res) => {
  Annonce.find().sort({ date: -1 }).limit(1)
    .then(annonces => res.json(annonces))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const message = String(req.body.message);
  const date = Date.now();

  const newAnnonce = new Annonce({
    message,
    date
  });

  newAnnonce.save()
    .then(() => res.json('Annonce added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;