const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: String,
  description: String,
  courseId: String
});

module.exports = mongoose.model('Module', moduleSchema);