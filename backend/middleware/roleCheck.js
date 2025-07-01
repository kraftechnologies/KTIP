const roleCheck = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const userRole = req.user.role;
    
    if (roles.includes(userRole)) {
      next();
    } else {
      return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }
  };
};

module.exports = roleCheck;