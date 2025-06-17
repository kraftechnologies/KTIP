import React, { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Happening.png";
import { useAuth } from "../context/AuthContext";

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
    setIsOpen(false); // Close mobile menu on navigation
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
    <header
      className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="KTIP Logo"
            className="h-10 w-auto md:h-12 object-contain"
            onClick={() => handleNavigation('/')}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
          {!isLoggedIn ? (
            // Public navigation
            <>
              <button
                onClick={() => handleNavigation('/')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('/domain')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Domains
              </button>
              <button
                onClick={() => handleNavigation('/benefits')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Benefits
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => handleNavigation('/login')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('/contactform')}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Apply Now
              </button>
            </>
          ) : (
            // User is logged in - show appropriate dashboard based on role
            <>
              {!isAdmin ? (
                // Student navigation
                <>
                  <button
                    onClick={() => handleDashboardTab('overview')}
                    className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => handleDashboardTab('attendance')}
                    className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
                  >
                    Attendance
                  </button>
                  <button
                    onClick={() => handleDashboardTab('courses')}
                    className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
                  >
                    My Courses
                  </button>
                  <button
                    onClick={() => handleDashboardTab('assignments')}
                    className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
                  >
                    Assignments
                  </button>
                  <button
                    onClick={() => handleDashboardTab('progress')}
                    className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
                  >
                    Progress
                  </button>
                </>
              ) : (
                // Admin navigation
                <button
                  onClick={() => handleNavigation('/admin/dashboard')}
                  className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
                >
                  Admin Dashboard
                </button>
              )}
              <button
                onClick={handleLogout}
                className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* User Menu / Login Button - Hidden now as buttons moved to nav */}
        <div className="hidden">
          {/* All buttons moved to main navigation */}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <AlignJustify className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
          <nav className="flex flex-col space-y-4">
            {!isLoggedIn ? (
              // Public navigation for mobile
              <>
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('/about')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavigation('/domain')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Domains
                </button>
                <button
                  onClick={() => handleNavigation('/benefits')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Benefits
                </button>
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Contact
                </button>
                <button
                  onClick={() => handleNavigation('/login')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Login
                </button>
                <button
                  onClick={() => handleNavigation('/contactform')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Apply Now
                </button>
              </>
            ) : (
              // User is logged in - show appropriate dashboard based on role
              <>
                {!isAdmin ? (
                  // Student navigation
                  <>
                    <button
                      onClick={() => handleDashboardTab('overview')}
                      className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => handleDashboardTab('attendance')}
                      className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                    >
                      Attendance
                    </button>
                    <button
                      onClick={() => handleDashboardTab('courses')}
                      className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                    >
                      My Courses
                    </button>
                    <button
                      onClick={() => handleDashboardTab('assignments')}
                      className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                    >
                      Assignments
                    </button>
                    <button
                      onClick={() => handleDashboardTab('progress')}
                      className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                    >
                      Progress
                    </button>
                  </>
                ) : (
                  // Admin navigation
                  <button
                    onClick={() => handleNavigation('/admin/dashboard')}
                    className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                  >
                    Admin Dashboard
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;