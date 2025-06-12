import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn");
      const adminStatus = localStorage.getItem("isAdmin");
      const storedUserName = localStorage.getItem("userName");

      setIsLoggedIn(loginStatus === "true");
      setIsAdmin(adminStatus === "true");
      setUserName(storedUserName || "");
      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Mock login logic
      setTimeout(() => {
        if (email === "admin@example.com" && password === "admin123") {
          // Admin login
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", "true");
          localStorage.setItem("userName", "Admin User");
          setIsLoggedIn(true);
          setIsAdmin(true);
          setUserName("Admin User");
          resolve({ success: true, isAdmin: true });
        } else if (email === "student@example.com" && password === "student123") {
          // Student login
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", "false");
          localStorage.setItem("userName", "John Doe");
          setIsLoggedIn(true);
          setIsAdmin(false);
          setUserName("John Doe");
          resolve({ success: true, isAdmin: false });
        } else {
          reject({ success: false, message: "Invalid email or password" });
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName("");
  };

  const value = {
    isLoggedIn,
    isAdmin,
    userName,
    loading,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;