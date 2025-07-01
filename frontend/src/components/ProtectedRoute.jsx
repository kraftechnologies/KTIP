import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isLoggedIn, userRole, loading } = useAuth();
  
  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B2FF2]"></div>
      </div>
    );
  }
  
  // If not logged in, redirect to login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  
  // If role is required and user doesn't have it, redirect to appropriate page
  if (requiredRole && userRole !== requiredRole) {
    // Super admin has access to everything
    if (userRole === 'super_admin') {
      return children;
    }
    return <Navigate to="/login" replace />;
  }
  
  // If all checks pass, render the protected component
  return children;
};

export default ProtectedRoute;