const express = require('express');
const cors = require('cors');
const authRoutes = require('../backend/routes/auth.routes');
const adminRoutes = require('../backend/routes/admin.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;