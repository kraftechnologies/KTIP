import React, { useState, useEffect } from "react";
import { ClipboardList, UserCheck, Headphones, UserPlus } from "lucide-react";

const ApplicationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8 text-white" />,
      title: "Registration",
      description:
        "Fill out the application form with your details and submit it online.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: "Shortlisting",
      description:
        "Applications are reviewed and candidates are shortlisted based on their profiles.",
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: "Interview",
      description:
        "Shortlisted candidates undergo technical and personal interviews.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: "Onboarding",
      description:
        "Selected candidates receive offer letters and join the program.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-[#7B2FF2]">
            Application Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Follow these simple steps to join the Kraf Technologies Internship Program.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Version */}
          <div className="hidden md:flex justify-between items-start mb-10 relative">
            {/* Progress Line */}
            <div className="absolute top-7 left-0 w-full h-1 bg-[#e0d7f8] z-0">
              <div
                className="h-full bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center relative z-10 w-1/4 transition-all duration-500 ${
                  index <= activeStep ? "opacity-100" : "opacity-80"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep ? "bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE]" : "bg-gray-300"
                  }`}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mt-4 mb-2 text-[#7B2FF2]">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-700 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Version */}
          <div className="md:hidden">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex mb-6 ${
                  index === activeStep ? "opacity-100" : "opacity-50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                    index <= activeStep ? "bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE]" : "bg-[#e0d7f8]"
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-[#7B2FF2]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] text-white px-8 py-3 rounded-md text-lg font-medium hover:from-[#5F1EDC] hover:to-[#1CA7EC] transition-all shadow-md hover:shadow-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
