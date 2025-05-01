import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    const subheading = subheadingRef.current;
    const button = buttonRef.current;
    
    if (heading) {
      heading.style.opacity = '0';
      heading.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
      }, 100);
    }
    
    if (subheading) {
      subheading.style.opacity = '0';
      subheading.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        subheading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subheading.style.opacity = '1';
        subheading.style.transform = 'translateY(0)';
      }, 300);
    }
    
    if (button) {
      button.style.opacity = '0';
      button.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        button.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Empower Your Future with <span className="text-[#18cb96]">KTIP</span>
          </h1>
          <p 
            ref={subheadingRef}
            className="text-xl md:text-2xl text-gray-700 mb-10"
          >
            Join our Summer Internship Program to gain real-world experience in advanced technologies.
          </p>
          <button 
            ref={buttonRef}
            onClick={scrollToContact}
            className="bg-[#18cb96] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Apply Now
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-10 h-10 text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;