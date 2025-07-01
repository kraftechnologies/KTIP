import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "Who can apply for the Kraf Technologies Internship Program(KTiP)?",
      answer: (
        <span>
          Anyone who is:
          <ul className="list-disc ml-6 mt-1">
            <li>A current UG/PG student</li>
            <li>A recent graduate</li>
            <li>Looking to switch careers or upskill</li>
            <li>Passionate about gaining real-world tech/business experience</li>
          </ul>
        </span>
      ),
    },
    {
      question: "What domains can I apply for?",
      answer: (
        <span>
          You can choose from multiple exciting domains including:
          <ul className="list-disc ml-6 mt-1">
            <li>Data Analytics & Business Intelligence</li>
            <li>Web & App Development</li>
            <li>Digital Marketing</li>
            <li>Product Management</li>
            <li>UI/UX Design</li>
            <li>Business & Strategy</li>
            <li>and more!</li>
          </ul>
        </span>
      ),
    },
    {
      question: "Is this a paid internship?",
      answer:
        "The program currently offers valuable mentorship, exposure, and certification. Specific compensation details (if applicable) will be mentioned in the domain-wise project description or shared during onboarding.",
    },
    {
      question: "How long is the internship program?",
      answer:
        "Most internships typically span 4 to 8 weeks, depending on the project and domain. Detailed timelines will be provided after selection.",
    },
    {
      question: "Will I work on real projects or only theoretical tasks?",
      answer:
        "You will work on live industry projects that mirror actual business challenges — gaining practical experience with tools and workflows used by professionals.",
    },
    {
      question: "Do I get a certificate after completion?",
      answer: (
        <span>
          Yes! All successful interns will receive a Certificate of Completion. Top performers may also receive a Letter of Recommendation.
        </span>
      ),
    },
  ];

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-[#7B2FF2]">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about the Kraf Technologies Internship Program.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-[#7B2FF2] rounded-lg overflow-hidden transition-all duration-300 bg-white"
            >
              <button
                className={`flex justify-between items-center w-full p-5 text-left font-medium focus:outline-none bg-white ${
                  openIndex === index ? "border-b-2 border-[#22D1EE]" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg text-[#7B2FF2]">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#22D1EE] " />
                ) : (
                  <Plus className="w-5 h-5 text-[#7B2FF2]" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-5 pt-3 text-gray-700 bg-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;