import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Public components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import ConstructionPage from "./components/ConstructionPage";

// User components
import Dashboard from "./components/Dashboard";
import AttendancePage from "./components/AttendancePage";

// Admin layout and pages
import AdminLayout from "./admin/layouts/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminAttendance from "./admin/pages/AdminAttendance";
import AdminStudents from "./admin/pages/AdminStudents";

// Sections
import About from "./sections/About";
import Domain from "./sections/Domain";
import Benefits from "./sections/Benefits";
import ContactForm from "./sections/ContactForm";

function App() {
  const { isLoggedIn, isAdmin } = useAuth();

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
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="students" element={<AdminStudents />} />
        <Route path="attendance" element={<AdminAttendance />} />
        <Route path="courses" element={<ConstructionPage title="Courses Management" />} />
        <Route path="assignments" element={<ConstructionPage title="Assignments Management" />} />
        <Route path="settings" element={<ConstructionPage title="Admin Settings" />} />
        <Route path="profile" element={<ConstructionPage title="Admin Profile" />} />
      </Route>

      {/* Public and User Routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/domain" element={<MainLayout><Domain /></MainLayout>} />
      <Route path="/benefits" element={<MainLayout><Benefits /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactForm /></MainLayout>} />
      <Route path="/contactform" element={<MainLayout><ContactForm /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      
      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? 
          <MainLayout><Dashboard /></MainLayout> : 
          <Navigate to="/login" replace />
        }
      />
      <Route
        path="/attendance"
        element={
          isLoggedIn ? 
          <MainLayout><AttendancePage /></MainLayout> : 
          <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;