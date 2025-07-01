const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  userId: String
});

module.exports = mongoose.model('Ticket', ticketSchema);