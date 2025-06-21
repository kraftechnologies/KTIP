import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Public components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";


// Sections
import About from "./sections/About";
import Domain from "./sections/Domain";
import Benefits from "./sections/Benefits";
import ContactForm from "./sections/ContactForm";

function App() {

  // Layout wrapper for public and user routes
  const MainLayout = ({ children }) => (
    <>
      <Header />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </>
  );

  return (
    <Routes>

      {/* Public and User Routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/domain" element={<MainLayout><Domain /></MainLayout>} />
      <Route path="/benefits" element={<MainLayout><Benefits /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactForm /></MainLayout>} />
      <Route path="/contactform" element={<MainLayout><ContactForm /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      
    </Routes>
  );
}

export default App;