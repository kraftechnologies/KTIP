import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is eligible to apply for KTIP?",
      answer:
        "KTIP is open to students pursuing undergraduate or postgraduate degrees in Computer Science, IT, Electronics, or related fields. Students in their pre-final or final year are preferred.",
    },
    {
      question: "Is there any stipend provided during the internship?",
      answer:
        "Yes, all interns receive a competitive monthly stipend based on their performance and the domain they are working in.",
    },
    {
      question: "What is the duration of the internship program?",
      answer:
        "The standard duration is 8 weeks during the summer (May to July). However, exceptional performers may be offered an extended internship.",
    },
    {
      question: "Is the internship fully remote or on-site?",
      answer:
        "KTIP follows a hybrid model. Some activities require physical presence at our office, while others can be completed remotely.",
    },
    {
      question: "What skills do I need to have before applying?",
      answer:
        "Basic programming knowledge is essential. Depending on your area of interest, familiarity with relevant technologies (e.g., Python for AI/ML, JavaScript for web development) is beneficial.",
    },
    {
      question: "How are interns selected for the program?",
      answer:
        "The selection process includes application review, technical assessment, and personal interviews to evaluate both technical skills and cultural fit.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white text-gray-900">
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
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-[#7B2FF2] rounded-lg overflow-hidden transition-all duration-300 bg-white"
            >
              <button
                className={`flex justify-between items-center w-full p-5 text-left font-medium focus:outline-none bg-white ${
                  openIndex === index
                    ? "border-b-2 border-[#22D1EE]"
                    : ""
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
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
                <p className="p-5 pt-0 text-gray-700 bg-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
