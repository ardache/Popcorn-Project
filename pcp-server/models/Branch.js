const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
  name: String,
  available: Boolean,
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;