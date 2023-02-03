const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recommendationSchema = new Schema({
  location: { type: String, required: true },
  restaurants: [
    {
      name: { type: String },
      cuisine: { type: String },
      rating: { type: String },
    },
  ],
  bars: [
    {
      name: { type: String },
      type: { type: String },
      rating: { type: String },
    },
  ],
});

const Recommendations = mongoose.model('recommendation', recommendationSchema);

module.exports = Recommendations;
