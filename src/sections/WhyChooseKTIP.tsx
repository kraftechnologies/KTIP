import React, { useEffect, useRef } from 'react';
import { Lightbulb, Users, TrendingUp, Workflow } from 'lucide-react';

const WhyChooseKTIP = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.feature-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, index * 200);
            });
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

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#18cb96]" />,
      title: "Real-World Projects",
      description: "Work on actual industry projects that solve real business problems."
    },
    {
      icon: <Users className="w-8 h-8 text-[#18cb96]" />,
      title: "Expert Mentorship",
      description: "Learn from industry professionals with years of experience."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#18cb96]" />,
      title: "Skill Enhancement",
      description: "Develop both technical and soft skills essential for career growth."
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#18cb96]" />,
      title: "Networking Opportunities",
      description: "Connect with industry leaders and build your professional network."
    }
  ];

  return (
    <section id="why-ktip" className="py-20 bg-gray-50">
      <div 
        ref={sectionRef}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Why Choose KTIP</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our internship program offers unique benefits that prepare you for a successful career in technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-item flex bg-white p-6 rounded-lg shadow-sm transition-all duration-500 opacity-0 transform translate-y-8"
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <div className="mr-5 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKTIP;