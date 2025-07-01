const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: String,
  userId: String,
  read: Boolean
});

module.exports = mongoose.model('Notification', notificationSchema);