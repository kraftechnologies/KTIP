const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'mentor', 'domain_admin', 'evaluation_admin', 'support_admin', 'super_admin'], default: 'student' },
  isBlocked: { type: Boolean, default: false },
  assignedDomain: String,
  permissions: [String]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);