import React from 'react';
import { Calendar, Globe, Code, Award, Briefcase } from 'lucide-react';

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: <Calendar className="w-8 h-8 text-[#18cb96]" />,
      title: "8-Week Program",
      description: "Intensive summer internship running from May to July"
    },
    {
      icon: <Globe className="w-8 h-8 text-[#18cb96]" />,
      title: "Hybrid Mode",
      description: "Combination of online mentoring and in-office experience"
    },
    {
      icon: <Code className="w-8 h-8 text-[#18cb96]" />,
      title: "Multiple Domains",
      description: "AI/ML, Web Development, Mobile App Development, and more"
    },
    {
      icon: <Award className="w-8 h-8 text-[#18cb96]" />,
      title: "Certification",
      description: "Industry-recognized certificate upon successful completion"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#18cb96]" />,
      title: "PPO Opportunity",
      description: "Pre-Placement Offer for exceptional performers"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Program Highlights</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover what makes the Kraf Technologies Internship Program stand out from the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;