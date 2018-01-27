const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tifuSchema = new Schema({
    createdBy: String,
    entry: String,
    votes: { type: Number, default: 0},
    createdOn: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Tifu', tifuSchema);