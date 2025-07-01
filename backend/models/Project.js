const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  studentId: String
});

module.exports = mongoose.model('Project', projectSchema);