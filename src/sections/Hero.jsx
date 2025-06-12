// import React, { useEffect, useRef } from "react";
// import { ChevronDown } from "lucide-react";

// const Hero = () => {
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     const heading = headingRef.current;
//     const subheading = subheadingRef.current;
//     const button = buttonRef.current;

//     document.documentElement.classList.add("dark");

//     if (heading) {
//       heading.style.opacity = "0";
//       heading.style.transform = "translateY(20px)";

//       setTimeout(() => {
//         heading.style.transition = "opacity 0.8s ease, transform 0.8s ease";
//         heading.style.opacity = "1";
//         heading.style.transform = "translateY(0)";
//       }, 100);
//     }

//     if (subheading) {
//       subheading.style.opacity = "0";
//       subheading.style.transform = "translateY(20px)";

//       setTimeout(() => {
//         subheading.style.transition = "opacity 0.8s ease, transform 0.8s ease";
//         subheading.style.opacity = "1";
//         subheading.style.transform = "translateY(0)";
//       }, 300);
//     }

//     if (button) {
//       button.style.opacity = "0";
//       button.style.transform = "translateY(20px)";

//       setTimeout(() => {
//         button.style.transition = "opacity 0.8s ease, transform 0.8s ease";
//         button.style.opacity = "1";
//         button.style.transform = "translateY(0)";
//       }, 500);
//     }
//   }, []);

//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToAbout = () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="relative h-screen flex items-center dark:bg-neutral-900 text-white">
//       {/* Gradient Background */}
//       <div
//         className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"
//         style={{
//           backgroundImage:
//             'url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0.2,
//         }}
//       ></div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <h1
//             ref={headingRef}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//           >
//             Empower Your Future with{" "}
//             <span className="text-[#18cb96]">KTIP</span>
//           </h1>
//           <p
//             ref={subheadingRef}
//             className="text-xl md:text-2xl text-gray-700 mb-10"
//           >
//             Join our Summer Internship Program to gain real-world experience in
//             advanced technologies.
//           </p>
//           <button
//             ref={buttonRef}
//             onClick={scrollToContact}
//             className="bg-[#18cb96] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>

//       {/* Scroll Down Indicator */}
//       <div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
//         onClick={scrollToAbout}
//       >
//         <ChevronDown className="w-10 h-10 text-gray-500" />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen h-screen pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg">
                Apply Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-full border border-blue-200 transition-all shadow-sm hover:shadow">
                Learn More
              </button>
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