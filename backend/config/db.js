const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
    } else {
      console.log('MongoDB URI not provided, running in mock mode');
    }
  } catch (error) {
    console.log('Running without database connection');
  }
};

module.exports = connectDB;