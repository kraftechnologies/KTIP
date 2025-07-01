import React from 'react';
import { CheckCircle, Award, Users, Clock, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About KTIP 2025</h2>
          <p className="text-lg text-gray-700">
            The Kraf Technologies Summer Internship Program is a transformative journey designed to shape the future tech leaders of tomorrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h3>
              <p className="text-gray-700 mb-4">
                KTIP is a comprehensive 45-day internship program that offers students from all streams an opportunity to work on real-world projects under the guidance of industry experts. Our program is designed to bridge the gap between academic learning and industry requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Duration: 45 Days (15th May – 30th June)</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Eligibility: First, Second, or Third Year Students</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">All Streams Welcome (Engineering, Science, Arts, Commerce)</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">25 students per batch for all domains</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose KTIP?</h3>
              <p className="text-gray-700 mb-4">
                Our program stands out by offering a perfect blend of learning, practical experience, and professional growth opportunities. We focus on:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Real-Time Projects</p>
                  <p className="text-sm text-gray-600">Work on live industry projects</p>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Expert Mentorship</p>
                  <p className="text-sm text-gray-600">Learn from industry veterans</p>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Skill Development</p>
                  <p className="text-sm text-gray-600">Enhance technical & soft skills</p>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Industry Exposure</p>
                  <p className="text-sm text-gray-600">Understand real-world challenges</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Methodology</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Project-Based Learning</p>
                    <p className="text-sm text-gray-600">Hands-on experience with real projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Team Collaboration</p>
                    <p className="text-sm text-gray-600">Work in diverse teams</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Innovation Focus</p>
                    <p className="text-sm text-gray-600">Encourage creative problem-solving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Students collaborating" 
              className="rounded-lg shadow-md w-full"
            />
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Get</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded mr-3">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Experience Certificate</p>
                    <p className="text-sm text-gray-600">Industry-recognized certification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Skill Development</p>
                    <p className="text-sm text-gray-600">Technical & soft skills enhancement</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded mr-3">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Network Building</p>
                    <p className="text-sm text-gray-600">Connect with industry professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 Support</p>
                    <p className="text-sm text-gray-600">Continuous mentorship & guidance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Industry-standard project development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Regular workshops and seminars</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Career guidance sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Portfolio development support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;