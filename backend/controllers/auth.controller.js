const User = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { employeeId, password } = req.body;
    
    const mockUsers = {
      'admin': { id: '1', name: 'Super Admin', role: 'super_admin', password: 'admin123' },
      'domain': { id: '2', name: 'Domain Admin', role: 'domain_admin', password: 'admin123' },
      'eval': { id: '3', name: 'Evaluation Admin', role: 'evaluation_admin', password: 'admin123' },
      'support': { id: '4', name: 'Support Admin', role: 'support_admin', password: 'admin123' },
      'student': { id: '5', name: 'John Doe', role: 'student', password: 'student123' }
    };
    
    const user = mockUsers[employeeId];
    
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );
    
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        role: user.role
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const register = async (req, res) => {
  // Registration logic
};

module.exports = {
  login,
  register
};