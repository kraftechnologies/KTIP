import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/contactform');
  };

  return (
    <section id="hero" className="min-h-screen h-screen pt-32 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Kraf Technologies{' '}
              <span className="text-blue-600">Summer Internship</span> Program
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-lg">
              A 45-day journey to boost your career with real-world projects, expert mentorship, and industry experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">May 15 - June 30, 2025</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">25 students per batch</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">5 Domains</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleApplyNow}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Apply Now
              </button>
              <a 
                href="domain"
                className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-full border border-blue-200 transition-all shadow-sm hover:shadow text-center"
              >
                Explore Domains
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-600 rounded-full opacity-10 absolute top-0 right-0"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Students working together" 
                className="relative z-10 rounded-lg shadow-lg w-full max-w-md"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-md z-20">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                  <p className="font-medium">Applications Open!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;