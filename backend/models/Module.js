const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  domain: { type: mongoose.Schema.Types.ObjectId, ref: 'Domain' },
  type: { type: String, enum: ['video', 'pdf', 'quiz'], required: true },
  content: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);