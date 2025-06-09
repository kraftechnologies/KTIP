import React, { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Happening.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Domains", path: "/domain" },
    { label: "Benefits", path: "/benefits" },
    // { label: "Learn More", path: "/learn-more" },
    { label: "Attendance", path: "/attendance" },
    { label: "Contact With Team", path: "/contact" },
    { label: "Apply Now", path: "/contactform" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#121212] shadow-md py-3 " : "bg-[#121212] py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="KTIP Logo"
            className="h-10 w-auto md:h-12 object-contain"
          />
        </div>

        {/* Centered Navigation */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {menuItems.filter(item => item.label !== "Apply Now").map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className={`text-sm uppercase tracking-wide font-medium text-white transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-[#18cb96]"
                  : "text-gray-700 hover:text-[#18cb96]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Apply Now Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavigation('/contactform')}
            className="bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-6 rounded-full shadow transition-all"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#344054]"
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
            {menuItems.filter(item => item.label !== "Apply Now").map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="text-sm uppercase text-gray-700 hover:text-[#18cb96] tracking-wide font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('/contactform')}
              className="bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-6 rounded-full shadow transition-all mt-2"
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;