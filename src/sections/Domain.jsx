import React, { useState } from 'react';
import { Code, Palette, BarChart3, Cloud, Shield, Glasses, Briefcase, Megaphone, Users, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DomainCard = ({ icon, title, description, skills, tasks, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const navigate = useNavigate();
  
  const handleApply = () => {
    // Navigate to apply page with domain information
    navigate('/contactform', { 
      state: { 
        selectedDomain: title,
        domainSkills: skills,
        domainDescription: description
      }
    });
  };
  
  return (
    <div 
      className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
        isHovered ? 'shadow-lg' : 'shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
      <div className="p-6">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color.replace('bg-', 'bg-').replace('600', '100')} mb-4`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Key Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className={`text-xs py-1 px-2 rounded-full ${color.replace('bg-', 'bg-').replace('600', '50')} ${color.replace('bg-', 'text-')}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <button
            onClick={() => setShowTasks(!showTasks)}
            className={`w-full py-2 px-4 rounded-lg transition-colors mb-2 ${
              showTasks 
                ? color + ' text-white' 
                : 'bg-gray-50 ' + color.replace('bg-', 'text-')
            }`}
          >
            {showTasks ? 'Hide Tasks' : 'View Sample Tasks'}
          </button>
          
          {showTasks && (
            <div className="bg-gray-50 rounded-lg p-4 mt-2">
              <ul className="list-disc list-inside space-y-2">
                {tasks.map((task, index) => (
                  <li key={index} className="text-sm text-gray-700">{task}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <button 
          onClick={handleApply}
          className={`w-full py-2 rounded-lg transition-colors ${
            isHovered 
              ? color + ' text-white' 
              : 'bg-gray-50 ' + color.replace('bg-', 'text-')
          }`}
        >
          Apply for {title}
        </button>
      </div>
    </div>
  );
};

const Domains = () => {
  const domains = [
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Software Development",
      description: "Build robust web, mobile, and backend systems with modern technologies.",
      skills: ["JavaScript", "React", "Node.js", "Python", "Mobile Dev", "API Design"],
      tasks: [
        "Intern Management Portal",
        "Team Collaboration Suite",
        "Resume Analyzer Tool",
        "Virtual Suggestion Box"
      ],
      color: "bg-purple-600"
    },
    {
      icon: <Palette className="h-6 w-6 text-purple-600" />,
      title: "Product Design",
      description: "Master UI/UX principles and create delightful user experiences.",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems"],
      tasks: [
        "KTIP Intern Journey Map",
        "Interactive Dashboard Design",
        "Mentorship Platform UX",
        "Learning Hub Interface"
      ],
      color: "bg-purple-600"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-green-600" />,
      title: "Data Science & AI",
      description: "Apply machine learning and analytics to solve real business problems.",
      skills: ["Python", "ML", "NLP", "Data Analysis", "AI Models"],
      tasks: [
        "Meeting Fatigue Detector",
        "Resume Screening AI",
        "Sentiment Analysis",
        "Skill Gap Analysis"
      ],
      color: "bg-green-600"
    },
    {
      icon: <Cloud className="h-6 w-6 text-sky-600" />,
      title: "Cloud Computing & DevOps",
      description: "Build and manage scalable cloud infrastructure and deployment pipelines.",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes", "Monitoring"],
      tasks: [
        "Auto-Scaling LMS",
        "CI/CD Pipeline",
        "Dockerized Wiki",
        "Cloud Metrics Dashboard"
      ],
      color: "bg-sky-600"
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Cybersecurity",
      description: "Protect systems and data through security best practices and tools.",
      skills: ["Security", "Encryption", "Pentesting", "Access Control"],
      tasks: [
        "Phishing Simulation",
        "Secure File Sharing",
        "Password Health Checker",
        "Vulnerability Scanner"
      ],
      color: "bg-red-600"
    },
    {
      icon: <Glasses className="h-6 w-6 text-indigo-600" />,
      title: "AR/VR Applications",
      description: "Create immersive experiences using augmented and virtual reality.",
      skills: ["Unity", "AR Kit", "3D Modeling", "VR Development"],
      tasks: [
        "AR Skill Tracker",
        "VR Onboarding",
        "3D Org Chart",
        "AR Product Demo"
      ],
      color: "bg-indigo-600"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-orange-600" />,
      title: "Project Management",
      description: "Lead teams and projects with effective planning and execution strategies.",
      skills: ["Agile", "Scrum", "Risk Management", "Documentation"],
      tasks: [
        "KPI Dashboard",
        "Competitor Analysis",
        "Product Reports",
        "Timeline Planning"
      ],
      color: "bg-orange-600"
    },
    {
      icon: <Megaphone className="h-6 w-6 text-pink-600" />,
      title: "Digital Marketing & SEO",
      description: "Drive growth through digital marketing strategies and optimization.",
      skills: ["SEO", "Content Strategy", "Analytics", "Social Media"],
      tasks: [
        "Marketing Campaign",
        "SEO Audit",
        "Content Calendar",
        "Email Funnel"
      ],
      color: "bg-pink-600"
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Human Resources",
      description: "Develop skills in talent management and organizational development.",
      skills: ["Recruitment", "Employee Relations", "Training", "HR Analytics"],
      tasks: [
        "Positive Environment",
        "Onboarding Process",
        "Employee Relations",
        "Skill Gap Analysis"
      ],
      color: "bg-teal-600"
    },
    // {
    //   icon: <FileText className="h-6 w-6 text-yellow-600" />,
    //   title: "Content Writing & Strategy",
    //   description: "Create compelling content and develop effective communication strategies.",
    //   skills: ["Copywriting", "Content Strategy", "Editorial", "Social Media"],
    //   tasks: [
    //     "Microcopy Audit",
    //     "Newsletter Design",
    //     "Social Media Content",
    //     "Testimonials eBook"
    //   ],
    //   color: "bg-yellow-600"
    // }
  ];

  return (
    <section id="domains" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Available Domains</h2>
          <p className="text-lg text-gray-700">
            Choose from 10 specialized tracks designed to build your expertise in high-demand fields
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <DomainCard
              key={index}
              icon={domain.icon}
              title={domain.title}
              description={domain.description}
              skills={domain.skills}
              tasks={domain.tasks}
              color={domain.color}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-4">
            Can't decide which domain is right for you?
          </p>
          <button className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-6 rounded-lg border border-gray-200 transition-all shadow-sm hover:shadow">
            Take Our Aptitude Quiz
          </button>
        </div>
      </div>
    </section>
  );
};

export default Domains;