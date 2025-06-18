import React, { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Happening.png";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isLoggedIn, logout } = useAuth();
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

  // Public navigation items (shown when not logged in)
  const publicMenuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Domains", path: "/domain" },
    { label: "Benefits", path: "/benefits" },
    { label: "Contact With Team", path: "/contact" },
  ];

  // Student navigation items (shown when logged in)
  const studentMenuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Attendance", path: "/dashboard?tab=attendance" },
    { label: "My Courses", path: "/dashboard?tab=courses" },
    { label: "Assignments", path: "/dashboard?tab=assignments" },
    { label: "Progress", path: "/dashboard?tab=progress" },
  ];

  const menuItems = isLoggedIn ? studentMenuItems : publicMenuItems;

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleNavigation('/')}
        >
          <img
            src={logo}
            alt="KTIP Logo"
            className="h-10 w-auto md:h-12 object-contain"
          />
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="text-sm uppercase tracking-wide font-medium text-gray-800 hover:text-[#7B2FF2] transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Login/Logout and Apply Now Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => handleNavigation('/LoginPage')}
                className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all"
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
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="text-sm uppercase text-gray-800 hover:text-[#7B2FF2] tracking-wide font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col space-y-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleNavigation('/login')}
                    className="text-[#7B2FF2] hover:text-[#5F1EDC] font-semibold py-2 px-6 rounded-full border border-[#7B2FF2] transition-all"
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;