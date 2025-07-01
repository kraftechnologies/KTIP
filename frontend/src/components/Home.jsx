import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Hero from "../sections/public/Hero.jsx";
import About from "../sections/public/About.jsx";
import ApplicationProcess from "../sections/ApplicationProcess.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FAQ from "../sections/FAQ.jsx";
import Domains from "../sections/public/Domain.jsx";
import Benefits from "../sections/public/Benefits.jsx";

const Home = () => {
  const { isLoggedIn, userRole } = useAuth();
  
  // Redirect logged-in admins to their dashboard
  if (isLoggedIn && userRole) {
    if (userRole === 'super_admin') {
      return <Navigate to="/admin/super" replace />;
    }
    if (userRole === 'domain_admin') {
      return <Navigate to="/admin/domain" replace />;
    }
    if (userRole === 'evaluation_admin') {
      return <Navigate to="/admin/evaluation" replace />;
    }
    if (userRole === 'support_admin') {
      return <Navigate to="/admin/support" replace />;
    }
    if (userRole === 'student') {
      return <Navigate to="/dashboard" replace />;
    }
  }
  
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Domains/>
        <Benefits/>
        <ApplicationProcess />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
};

export default Home;