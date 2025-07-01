import React, { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import HappeningLogo from "../assets/Happening.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLoggedIn, isAdmin, userName, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };
  
  const handleDashboardTab = (tab) => {
    navigate(`/dashboard?tab=${tab}`);
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={HappeningLogo} 
            alt="KTIP Logo" 
            className="h-10 cursor-pointer" 
            onClick={() => handleNavigation('/')}
          />
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
          {!isLoggedIn ? (
            <>
              <button onClick={() => handleNavigation('/')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Home</button>
              <button onClick={() => handleNavigation('/about')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">About</button>
              <button onClick={() => handleNavigation('/domain')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Domains</button>
              <button onClick={() => handleNavigation('/benefits')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Benefits</button>
              <button onClick={() => handleNavigation('/contact')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Contact</button>
            </>
          ) : (
            <>
              {!isAdmin ? (
                <>
                  <button onClick={() => handleDashboardTab('overview')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Overview</button>
                  <button onClick={() => handleDashboardTab('attendance')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Attendance</button>
                  <button onClick={() => handleDashboardTab('courses')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">My Courses</button>
                  <button onClick={() => handleDashboardTab('assignments')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Assignments</button>
                  <button onClick={() => handleDashboardTab('progress')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Progress</button>
                </>
              ) : (
                <button onClick={() => handleNavigation('/admin/dashboard')} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Admin Dashboard</button>
              )}
              <button onClick={handleLogout} className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors">Logout</button>
            </>
          )}
        </nav>

        {!isLoggedIn && (
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <button onClick={() => handleNavigation('/login')} className="px-4 py-2 rounded-lg border-2 border-[#7B2FF2] text-[#7B2FF2] font-semibold shadow-none bg-transparent hover:bg-[#f3e8ff] transition-colors">Login</button>
            <button onClick={() => handleNavigation('/contactform')} className="px-4 py-2 rounded-md text-white font-semibold shadow bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] hover:from-[#22D1EE] hover:to-[#7B2FF2] transition-colors">Apply Now</button>
          </div>
        )}

        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <AlignJustify className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            {!isLoggedIn ? (
              <>
                <button onClick={() => handleNavigation('/')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Home</button>
                <button onClick={() => handleNavigation('/about')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">About</button>
                <button onClick={() => handleNavigation('/domain')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Domains</button>
                <button onClick={() => handleNavigation('/benefits')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Benefits</button>
                <button onClick={() => handleNavigation('/contact')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Contact</button>
              </>
            ) : (
              <>
                {!isAdmin ? (
                  <>
                    <button onClick={() => handleDashboardTab('overview')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Overview</button>
                    <button onClick={() => handleDashboardTab('attendance')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Attendance</button>
                    <button onClick={() => handleDashboardTab('courses')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">My Courses</button>
                    <button onClick={() => handleDashboardTab('assignments')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Assignments</button>
                    <button onClick={() => handleDashboardTab('progress')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Progress</button>
                  </>
                ) : (
                  <button onClick={() => handleNavigation('/admin/dashboard')} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Admin Dashboard</button>
                )}
                <button onClick={handleLogout} className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2">Logout</button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;