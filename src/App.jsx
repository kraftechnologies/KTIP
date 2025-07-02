import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// Public Pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
// import ConstructionPage from "./components/ConstructionPage";

// Sections
import About from "./sections/About";
import Domain from "./sections/Domain";
import Benefits from "./sections/Benefits";
import ContactForm from "./sections/ContactForm";

// User Dashboard Pages
import UserLayout from "./userDashboard/layouts/UserLayout";
import DashboardHome from "./userDashboard/pages/DashboardHome";
// import Modules from "./userDashboard/pages/Modules";
import Assignments from "./userDashboard/pages/Assignments";
// import Projects from "./userDashboard/pages/Projects";
// import ResumeBuilder from "./userDashboard/pages/ResumeBuilder";
// import Notifications from "./userDashboard/pages/Notifications";
// import Settings from "./userDashboard/pages/Settings";

// import AdminLayout from "./userDashboard/layouts/AdminLayout";

// import AdminHeader from "./userDashboard/components/AdminHeader";

// import AdminSidebar from "./userDashboard/components/AdminSidebar";
// import AdminDashboard from "./userDashboard/pages/AdminDashboard";

function App() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B2FF2] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const MainLayout = ({ children }) => (
    <>
      <Header />
      <div className="pt-16 min-h-screen">{children}</div>
      <Footer />
    </>
  );

  return (
    <Routes>

      <Route path="/dashboard" element={<UserLayout />}>
  <Route index element={<DashboardHome />} />
  {/* Add other nested routes here */}
</Route>


      {/* Public Routes */}

      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route> */}

      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path="/domain"
        element={
          <MainLayout>
            <Domain />
          </MainLayout>
        }
      />
      <Route
        path="/benefits"
        element={
          <MainLayout>
            <Benefits />
          </MainLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MainLayout>
            <ContactForm />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />

      {/* <Route
        path="/dashboard"
        element={
          isLoggedIn ? 
          <MainLayout><Dashboard /></MainLayout> : 
          <Navigate to="/login" replace />
        }
      /> */}

      {/* User Dashboard Routes */}
      {/* <Route
        path="/user-dashboard"
        element={
          isLoggedIn
            ? <MainLayout><DashboardHome /></MainLayout>
            : <Navigate to="/login" replace />
        }
      /> */}
      {/* <Route
        path="/user-dashboard/modules"
        element={
          isLoggedIn
            ? <MainLayout><Modules /></MainLayout>
            : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/user-dashboard/assignments"
        element={
          isLoggedIn
            ? <MainLayout><Assignments /></MainLayout>
            : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/user-dashboard/projects"
        element={
          isLoggedIn
            ? <MainLayout><Projects /></MainLayout>
            : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/user-dashboard/resume"
        element={
          isLoggedIn
            ? <MainLayout><ResumeBuilder /></MainLayout>
            : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/user-dashboard/notifications"
        element={
          isLoggedIn
            ? <MainLayout><Notifications /></MainLayout>
            : <Navigate to="/login" replace />
        }
      />
      <Route
        path="/user-dashboard/settings"
        element={
          isLoggedIn
            ? <MainLayout><Settings /></MainLayout>
            : <Navigate to="/login" replace />
        }
      /> */}

      {/* <Route
        path="/attendance"
        element={
          isLoggedIn ? 
          <MainLayout><AttendancePage /></MainLayout> : 
          <Navigate to="/login" replace />
        }
      /> */}

      <Route path="/user-dashboard" element={<UserLayout />}>
        <Route index element={<DashboardHome />} />
        {/* <Route path="modules" element={<Modules />} /> */}
        <Route path="assignments" element={<Assignments />} />
        {/* <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<ResumeBuilder />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} /> */}
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    
  );
}

export default App;
