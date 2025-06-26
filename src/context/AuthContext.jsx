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

  const login = async (employeeId, password) => {
    try {
      // Try API first, fallback to mock for demo
      let response;
      try {
        response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ employeeId, password }),
        });
      } catch (apiError) {
        // API not available, use mock authentication
        console.log("API not available, using mock authentication");
        return mockLogin(employeeId, password);
      }

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", data.isAdmin ? "true" : "false");
        localStorage.setItem("userName", data.userName || data.name || "User");
        
        setIsLoggedIn(true);
        setIsAdmin(data.isAdmin || false);
        setUserName(data.userName || data.name || "User");
        
        return { success: true, isAdmin: data.isAdmin || false };
      } else {
        throw new Error(data.message || "Invalid credentials");
      }
    } catch (error) {
      throw error;
    }
  };

  const mockLogin = (employeeId, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (employeeId === "admin" && password === "admin123") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", "true");
          localStorage.setItem("userName", "Admin User");
          setIsLoggedIn(true);
          setIsAdmin(true);
          setUserName("Admin User");
          resolve({ success: true, isAdmin: true });
        } else if (employeeId === "student" && password === "student123") {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", "false");
          localStorage.setItem("userName", "John Doe");
          setIsLoggedIn(true);
          setIsAdmin(false);
          setUserName("John Doe");
          resolve({ success: true, isAdmin: false });
        } else {
          reject({ success: false, message: "Invalid employee ID or password" });
        }
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
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