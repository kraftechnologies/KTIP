import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./sections/About";
import Domain from "./sections/Domain";
import Benefits from "./sections/Benefits";
import ContactTeam from "./components/ContactTeam";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ApplyNow from "./sections/ApplyNow";
import { useEffect } from "react";
import ConstructionPage from "./components/ConstructionPage";
import ContactForm from "./sections/ContactForm";
// import LearnMore from "./components/LearnMore";
import AttendancePage from "./components/AttendancePage";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
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
            <Route path="/loginPage" element ={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/learn-more" element={<LearnMore />} /> */}
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="*" element={<ConstructionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;