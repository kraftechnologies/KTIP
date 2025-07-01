const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Authentication middleware logic
  next();
};

module.exports = authMiddleware;