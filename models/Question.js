const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  branch: String,
  question: String,
  kind: {
    type: String,
    enum: ['texto', 'opcion multiple', 'checklist', 'desplegable']
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;