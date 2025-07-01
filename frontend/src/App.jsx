import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./sections/public/About.jsx";
import Domain from "./sections/public/Domain.jsx";
import Benefits from "./sections/public/Benefits.jsx";
import ContactForm from "./sections/public/ContactForm.jsx";
import ContactTeam from "./components/ContactTeam.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ApplyNow from "./sections/ApplyNow.jsx";
import { useEffect } from "react";
import ConstructionPage from "./components/ConstructionPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HappeningLogo from "./assets/Happening.png";

// Admin imports
import SuperAdminDashboard from "./pages/Admin/SuperAdmin/Dashboard.jsx";
import ManageUsers from "./pages/Admin/SuperAdmin/ManageUsers.jsx";
import ManageCourses from "./pages/Admin/SuperAdmin/ManageCourses.jsx";
import SupportTickets from "./pages/Admin/SuperAdmin/SupportTickets.jsx";
import DomainAdminDashboard from "./pages/Admin/DomainAdmin/Dashboard.jsx";
import EvaluationAdminDashboard from "./pages/Admin/EvaluationAdmin/Dashboard.jsx";
import SupportAdminDashboard from "./pages/Admin/SupportAdmin/Dashboard.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        {!isAdminRoute && <Header />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/applynow" element={<ApplyNow />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/contact" element={<ContactTeam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Admin Routes */}
            <Route path="/admin/super" element={
              <ProtectedRoute requiredRole="super_admin">
                <SuperAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/users" element={
              <ProtectedRoute requiredRole="super_admin">
                <ManageUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/courses" element={
              <ProtectedRoute requiredRole="super_admin">
                <ManageCourses />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/tickets" element={
              <ProtectedRoute requiredRole="super_admin">
                <SupportTickets />
              </ProtectedRoute>
            } />
            <Route path="/admin/domain" element={
              <ProtectedRoute requiredRole="domain_admin">
                <DomainAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/evaluation" element={
              <ProtectedRoute requiredRole="evaluation_admin">
                <EvaluationAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/support" element={
              <ProtectedRoute requiredRole="support_admin">
                <SupportAdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<ConstructionPage />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default App;