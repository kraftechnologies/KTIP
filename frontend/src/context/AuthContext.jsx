import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn");
      const adminStatus = localStorage.getItem("isAdmin");
      const storedUserName = localStorage.getItem("userName");
      const storedUserRole = localStorage.getItem("userRole");

      setIsLoggedIn(loginStatus === "true");
      setIsAdmin(adminStatus === "true");
      setUserName(storedUserName || "");
      setUserRole(storedUserRole || "");
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  const login = async (employeeId, password) => {
    try {
      // API call for authentication
      const API_BASE_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api';
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId, password }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Store token
        localStorage.setItem('token', data.token);
        
        const userData = {
          isLoggedIn: true,
          isAdmin: ['super_admin', 'domain_admin', 'evaluation_admin', 'support_admin'].includes(data.user.role),
          userName: data.user.name,
          userRole: data.user.role
        };
        
        updateAuthState(userData);
        return { success: true, ...userData };
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      // Fallback to mock authentication for development
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Super admin credentials
          if (employeeId === "admin" && password === "admin123") {
            const userData = {
              isLoggedIn: true,
              isAdmin: true,
              userName: "Super Admin",
              userRole: "super_admin"
            };
            updateAuthState(userData);
            resolve({ success: true, ...userData });
          } 
          // Domain admin credentials
          else if (employeeId === "domain" && password === "admin123") {
            const userData = {
              isLoggedIn: true,
              isAdmin: true,
              userName: "Domain Admin",
              userRole: "domain_admin"
            };
            updateAuthState(userData);
            resolve({ success: true, ...userData });
          }
          // Evaluation admin credentials
          else if (employeeId === "eval" && password === "admin123") {
            const userData = {
              isLoggedIn: true,
              isAdmin: true,
              userName: "Evaluation Admin",
              userRole: "evaluation_admin"
            };
            updateAuthState(userData);
            resolve({ success: true, ...userData });
          }
          // Support admin credentials
          else if (employeeId === "support" && password === "admin123") {
            const userData = {
              isLoggedIn: true,
              isAdmin: true,
              userName: "Support Admin",
              userRole: "support_admin"
            };
            updateAuthState(userData);
            resolve({ success: true, ...userData });
          }
          // Student credentials
          else if (employeeId === "student" && password === "student123") {
            const userData = {
              isLoggedIn: true,
              isAdmin: false,
              userName: "John Doe",
              userRole: "student"
            };
            updateAuthState(userData);
            resolve({ success: true, ...userData });
          } 
          // Invalid credentials
          else {
            reject({ success: false, message: "Invalid employee ID or password" });
          }
        }, 800);
      });
    }
  };

  const updateAuthState = (userData) => {
    // Update localStorage
    localStorage.setItem("isLoggedIn", String(userData.isLoggedIn));
    localStorage.setItem("isAdmin", String(userData.isAdmin));
    localStorage.setItem("userName", userData.userName);
    localStorage.setItem("userRole", userData.userRole);
    
    // Update state
    setIsLoggedIn(userData.isLoggedIn);
    setIsAdmin(userData.isAdmin);
    setUserName(userData.userName);
    setUserRole(userData.userRole);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName("");
    setUserRole("");
  };

  const value = {
    isLoggedIn,
    isAdmin,
    userName,
    userRole,
    loading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;