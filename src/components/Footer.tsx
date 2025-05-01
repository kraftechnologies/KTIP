import React from 'react';
import { Layers, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-6">
              <Layers className="w-7 h-7 text-[#18cb96]" />
              <span className="ml-2 text-xl font-semibold">KTIP</span>
            </div>
            <p className="text-gray-400 mb-6">
              Kraf Technologies Internship Program empowers students with real-world experience in cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#18cb96] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#18cb96] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#18cb96] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#18cb96] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-[#18cb96]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About', 'Program Highlights', 'Why Choose KTIP', 'Application Process', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-[#18cb96] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-[#18cb96]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-[#18cb96] flex-shrink-0" />
                <span className="text-gray-400">Kraf Technologies, Tech Park, Bangalore, India</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-[#18cb96] flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-[#18cb96] flex-shrink-0" />
                <span className="text-gray-400">info@kraf-technologies.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-[#18cb96]">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates on internship opportunities.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-gray-800 text-gray-400 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#18cb96]"
              />
              <button
                type="submit"
                className="bg-[#18cb96] text-white px-5 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="border-t border-gray-800 mt-12 pt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          {/* Left side with logo and text */}
          <div className="flex items-center space-x-4">
            <img
              src="https://raw.githubusercontent.com/kraftechnologies/KrafTechnologies/main/public/favicon.png"
              alt="Kraf Technologies Logo"
              className="w-12 h-12 object-contain rounded-full"
            />
            <div className="text-sm leading-snug">
              <p>All trademarks are the property of their respective owners</p>
              <p>All rights reserved {currentYear} Kraf Technologies.</p>
            </div>
          </div>

          {/* Right side with Cashfree logo */}
          <div className="flex flex-row items-center"> {/* Reduced gap from gap-2 to gap-1 */}
            <p className="text-sm">Payment Partner</p>
            <img
              src="https://storage.googleapis.com/datanyze-data//technologies/a146b015e8eb3e923b4d285d5c1dc972f7f513de.png"
              alt="Cashfree"
              className="w-32 h-8 object-contain p-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;