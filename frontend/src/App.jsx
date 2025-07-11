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
import Analytics from "./pages/Admin/SuperAdmin/Analytics.jsx";
import PaymentReports from "./pages/Admin/SuperAdmin/PaymentReports.jsx";
import AdminSettings from "./pages/Admin/SuperAdmin/AdminSettings.jsx";
import Assignments from "./pages/Admin/SuperAdmin/Assignments.jsx";
import Modules from "./pages/Admin/SuperAdmin/Modules.jsx";
import Projects from "./pages/Admin/SuperAdmin/Projects.jsx";
import Announcements from "./pages/Admin/SuperAdmin/Announcements.jsx";
import AdminManagement from "./pages/Admin/SuperAdmin/AdminManagement.jsx";
import DomainAdminDashboard from "./pages/Admin/DomainAdmin/Dashboard.jsx";
import EvaluationAdminDashboard from "./pages/Admin/EvaluationAdmin/Dashboard.jsx";
import SupportAdminDashboard from "./pages/Admin/SupportAdmin/Dashboard.jsx";
import HrAdminDashboard, { HRDashboardHome } from "./pages/Admin/HrAdmin/Dashboard.jsx";
import EmployeeDirectory from "./pages/Admin/HrAdmin/EmployeeDirectory.jsx";
import LeaveRequests from "./pages/Admin/HrAdmin/LeaveRequests.jsx";
import Payroll from "./pages/Admin/HrAdmin/Payroll.jsx";
import Performance from "./pages/Admin/HrAdmin/Performance.jsx";
import Settings from "./pages/Admin/HrAdmin/Settings.jsx";

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
            
            {/* Super Admin Routes */}
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
            <Route path="/admin/super/assignments" element={
              <ProtectedRoute requiredRole="super_admin">
                <Assignments />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/modules" element={
              <ProtectedRoute requiredRole="super_admin">
                <Modules />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/projects" element={
              <ProtectedRoute requiredRole="super_admin">
                <Projects />
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
            <Route path="/admin/super/announcements" element={
              <ProtectedRoute requiredRole="super_admin">
                <Announcements />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/analytics" element={
              <ProtectedRoute requiredRole="super_admin">
                <Analytics />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/financial" element={
              <ProtectedRoute requiredRole="super_admin">
                <PaymentReports />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/admin-management" element={
              <ProtectedRoute requiredRole="super_admin">
                <AdminManagement />
              </ProtectedRoute>
            } />
            <Route path="/admin/super/settings" element={
              <ProtectedRoute requiredRole="super_admin">
                <AdminSettings />
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
            <Route path="/admin/hr" element={
              <ProtectedRoute requiredRole="hr_admin">
                <HrAdminDashboard />
              </ProtectedRoute>
            }>
              <Route index element={<HRDashboardHome />} />
              <Route path="employees" element={<EmployeeDirectory />} />
              <Route path="leave-requests" element={<LeaveRequests />} />
              <Route path="payroll" element={<Payroll />} />
              <Route path="performance" element={<Performance />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            
            <Route path="*" element={<ConstructionPage />} />
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </AuthProvider>
  );
};

export default App;