// Footer.tsx
import React from 'react';
import {
  Layers,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define quick links as name + href
  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Program Highlights', href: '/#highlights' },
    // { name: 'Why Choose KTIP', href: '/#why-ktip' },
    { name: 'Application Process', href: '/#process' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'apply', href: '/contactform' },
  ];

  return (
    <footer className="bg-white text-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <div className="flex items-center mb-6">
              <Layers className="w-7 h-7 text-[#7B2FF2]" />
              <span className="ml-2 text-xl font-semibold">KTIP</span>
            </div>
            <p className="text-gray-600 mb-6">
              Kraf Technologies Internship Program empowers students with real-world experience in cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/kraftechnologies"
                className="text-gray-400 hover:text-[#7B2FF2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/kraftechnologies"
                className="text-gray-400 hover:text-[#7B2FF2] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kraftechnologies/?viewAsMember=true"
                className="text-gray-400 hover:text-[#7B2FF2] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/kraftechnologies"
                className="text-gray-400 hover:text-[#7B2FF2] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-gradient-to-r after:from-[#7B2FF2] after:to-[#22D1EE]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#7B2FF2] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-gradient-to-r after:from-[#7B2FF2] after:to-[#22D1EE]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-[#7B2FF2] flex-shrink-0" />
                <span className="text-gray-600">
                  400-A, 4th Floor, 12 Ajit Singh House, Yusuf Sarai Commercial Complex, New Delhi 110016, Near Green Park Metro Station Exit-2
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-[#7B2FF2] flex-shrink-0" />
                <a href="tel:+919670269295" className="text-gray-600">
                  +91 9670269295
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-[#7B2FF2] flex-shrink-0" />
                <a
                  href="mailto:info@kraftechnologies.com"
                  className="text-gray-600"
                >
                  info@kraftechnologies.com
                </a>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-[#7B2FF2] flex-shrink-0" />
                <a
                  href="mailto:team@kraftechnologies.com"
                  className="text-gray-600"
                >
                  team@kraftechnologies.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-gradient-to-r after:from-[#7B2FF2] after:to-[#22D1EE]">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for updates on internship opportunities.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white border border-black text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B2FF2]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] text-white px-5 py-3 rounded-md font-medium hover:from-[#5F1EDC] hover:to-[#1CA7EC] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="border-t border-[#e0d7f8] mt-12 pt-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          {/* Left side with logo and text */}
          <div className="flex items-center space-x-4">
            <img
              src="https://raw.githubusercontent.com/kraftechnologies/KrafTechnologies/main/public/favicon.png"
              alt="Kraf Technologies Logo"
              className="w-12 h-12 object-contain rounded-full"
            />
            <div className="text-sm leading-snug text-gray-600">
              <p>All trademarks are the property of their respective owners</p>
              <p>All rights reserved {currentYear} Kraf Technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;