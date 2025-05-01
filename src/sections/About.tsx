import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">About KTIP</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The Kraf Technologies Internship Program (KTIP) is designed to bridge the gap between academia and industry. 
            We provide a platform for talented students to work on real-world projects alongside industry experts, gaining 
            invaluable experience in cutting-edge technologies.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Our program focuses on hands-on learning, mentorship, and skill development. We believe in nurturing the 
            next generation of technology leaders by exposing them to challenging problems and innovative solutions. 
            Join KTIP to transform your theoretical knowledge into practical expertise and kickstart your career in 
            the technology industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;