const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  points: Number,
  monthly: Number,
  yearly: Number
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;