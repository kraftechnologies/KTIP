const roleCheck = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const userRole = req.user.role;
    
    // Super admin has access to everything
    if (userRole === 'super_admin') {
      return next();
    }
    
    if (roles.includes(userRole)) {
      next();
    } else {
      return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }
  };
};

// Specific role checks
const isSuperAdmin = roleCheck(['super_admin']);
const isDomainAdmin = roleCheck(['domain_admin', 'super_admin']);
const isEvaluationAdmin = roleCheck(['evaluation_admin', 'super_admin']);
const isSupportAdmin = roleCheck(['support_admin', 'super_admin']);
const isAnyAdmin = roleCheck(['super_admin', 'domain_admin', 'evaluation_admin', 'support_admin']);

module.exports = {
  roleCheck,
  isSuperAdmin,
  isDomainAdmin,
  isEvaluationAdmin,
  isSupportAdmin,
  isAnyAdmin
};