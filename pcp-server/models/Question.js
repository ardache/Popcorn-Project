const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  ramo: String,
  pregunta: String,
  style: ['texto', 'opcion multiple', 'checklist', 'desplegable'],
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;