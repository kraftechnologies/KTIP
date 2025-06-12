// import React, { useEffect, useRef } from "react";

// const About = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fade-in");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="py-20 bg-gray-50 dark:bg-neutral-900 bg-white dark:text-white"
//     >
//       <div
//         ref={sectionRef}
//         className="container mx-auto px-4 opacity-0 transition-opacity duration-1000"
//       >
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-3 text-white">About KTIP</h2>
//           <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-8"></div>

//           <p className="text-lg text-white mb-8 leading-relaxed">
//             The Kraf Technologies Internship Program (KTIP) is designed to
//             bridge the gap between academia and industry. We provide a platform
//             for talented students to work on real-world projects alongside
//             industry experts, gaining invaluable experience in cutting-edge
//             technologies.
//           </p>

//           <p className="text-lg text-white leading-relaxed">
//             Our program focuses on hands-on learning, mentorship, and skill
//             development. We believe in nurturing the next generation of
//             technology leaders by exposing them to challenging problems and
//             innovative solutions. Join KTIP to transform your theoretical
//             knowledge into practical expertise and kickstart your career in the
//             technology industry.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About KTIP 2025</h2>
          <p className="text-lg text-gray-700">
            The Kraf Technologies Summer Internship Program is designed to provide students with hands-on experience in various tech domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h3>
              <p className="text-gray-700 mb-4">
                KTIP is a comprehensive 45-day internship program that offers students from all streams an opportunity to work on real-world projects under the guidance of industry experts.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Duration: 45 Days (15th May – 30th June)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Eligibility: First, Second, or Third Year Students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">All Streams Welcome</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">25 students per batch for all domains</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose KTIP?</h3>
              <p className="text-gray-700 mb-4">
                Our program stands out by offering a perfect blend of learning, practical experience, and professional growth opportunities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Real-Time Projects</p>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Expert Mentorship</p>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Skill Development</p>
                </div>
                <div className="bg-white rounded p-3 shadow-sm">
                  <p className="font-medium text-gray-800">Industry Exposure</p>
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
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Experience Certificate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Skill Development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Network Building</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded mr-3">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;