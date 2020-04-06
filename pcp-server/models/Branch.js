const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const branchSchema = new Schema({
  name: String,
  logo: String,
  next_question: String, //{ type: Schema.Types.ObjectId, ref: 'Question' },
  available: Boolean,
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;