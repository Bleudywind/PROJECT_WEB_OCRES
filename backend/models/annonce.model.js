const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    message: { type: String, required: true },
    date : { type : Date, required: true }
})

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;