const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  projectId: String,
  score: Number,
  feedback: String
});

module.exports = mongoose.model('Evaluation', evaluationSchema);