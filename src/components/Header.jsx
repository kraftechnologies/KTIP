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
        <nav className="hidden md:flex items-center space-x-8">
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
            </>
          ) : (
            // User is logged in - show dashboard link
            <button
              onClick={() => handleNavigation('/dashboard')}
              className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
            >
              Dashboard
            </button>
          )}
        </nav>

        {/* User Menu / Login Button */}
        <div className="hidden md:flex items-center">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 text-[#7B2FF2] font-medium">
                <span>{userName || (isAdmin ? "Admin" : "Student")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <button
                  onClick={() => handleNavigation('/dashboard')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handleNavigation('/attendance')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Attendance
                </button>
                {isAdmin && (
                  <button
                    onClick={() => handleNavigation('/admin/attendance')}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Admin: Attendance
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => handleNavigation('/login')}
                className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all mr-4"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation('/contactform')}
                className="bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-6 rounded-full shadow transition-all"
              >
                Apply Now
              </button>
            </>
          )}
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
              </>
            ) : (
              // User is logged in - show dashboard and other links
              <>
                <button
                  onClick={() => handleNavigation('/dashboard')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => handleNavigation('/attendance')}
                  className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                >
                  My Attendance
                </button>
                {isAdmin && (
                  <button
                    onClick={() => handleNavigation('/admin/attendance')}
                    className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
                  >
                    Admin: Attendance
                  </button>
                )}
              </>
            )}
            
            <div className="pt-2 border-t border-gray-200">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all w-full"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleNavigation('/login')}
                    className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all w-full mb-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavigation('/contactform')}
                    className="bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-6 rounded-full shadow transition-all w-full"
                  >
                    Apply Now
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;