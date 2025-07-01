import React from 'react';
import { Award, CheckCircle, Code, PieChart, Monitor, Users, Clock, MessageSquare, FileText } from 'lucide-react';

const BenefitCard = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className={`rounded-xl p-6 ${bgColor} hover:shadow-md transition-all duration-300`}>
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${iconColor} mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Experience Certificate",
      description: "Receive an official certificate to showcase your internship completion to future employers.",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600"
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Real-Time Projects",
      description: "Work on actual industry projects that solve real-world problems and build your portfolio.",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-600"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Mentorship & Guidance",
      description: "Receive personalized guidance from industry experts who will help shape your career path.",
      bgColor: "bg-green-50",
      iconColor: "bg-green-600"
    },
    {
      icon: <PieChart className="h-6 w-6 text-white" />,
      title: "Skill Development",
      description: "Enhance your technical and soft skills through structured learning and practical application.",
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-600"
    },
    {
      icon: <Monitor className="h-6 w-6 text-white" />,
      title: "Industry Expert Seminars",
      description: "Attend exclusive seminars by industry leaders to gain insights into the tech landscape.",
      bgColor: "bg-teal-50",
      iconColor: "bg-teal-600"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Team Collaboration",
      description: "Learn to work effectively in diverse teams, an essential skill for your professional journey.",
      bgColor: "bg-indigo-50",
      iconColor: "bg-indigo-600"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "24*7 Chatbot Support",
      description: "Get round-the-clock assistance for any queries or challenges during your internship.",
      bgColor: "bg-red-50",
      iconColor: "bg-red-600"
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Resume Portfolio Building",
      description: "Create an impressive portfolio that highlights your projects and accomplishments.",
      bgColor: "bg-yellow-50",
      iconColor: "bg-yellow-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
       
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
          <p className="text-lg text-gray-700">
            KTIP offers a range of benefits designed to maximize your learning and career growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              bgColor={benefit.bgColor}
              iconColor={benefit.iconColor}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">KTIP Deliverables</h3>
              <p className="text-gray-700 mb-6">
                By the end of your internship journey, you'll have tangible outcomes to showcase:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Contribution to a live, mentor-guided project</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Completion of at least 2 domain-specific expert seminars</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Participation in team collaboration and evaluation rounds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Final presentation/demo showcasing your contribution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Internship Completion Certificate (Shareable on LinkedIn)</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-400 p-8 text-white flex items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
                <p className="mb-6">
                  Join KTIP 2025 and gain the skills, experience, and network you need to succeed in today's competitive job market.
                </p>
                <button className="bg-white text-purple-600 hover:bg-purple-50 font-medium py-2 px-6 rounded-lg transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;