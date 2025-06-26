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
    {
      question: "What kind of mentorship can I expect?",
      answer:
        "Each intern will be guided by experienced industry mentors who provide project feedback, career advice, and personalized support throughout the journey.",
    },
    {
      question: "Are there any live sessions or interactions?",
      answer: (
        <span>
          Absolutely! You'll have access to:
          <ul className="list-disc ml-6 mt-1">
            <li>Guest lectures by industry experts</li>
            <li>Live doubt-clearing and mentorship sessions</li>
            <li>Company virtual tours for behind-the-scenes exposure</li>
          </ul>
        </span>
      ),
    },
    {
      question: "Can I switch domains during the internship?",
      answer:
        "Based on availability and your progress, cross-functional exposure may be allowed. We support curiosity and encourage exploration.",
    },
    {
      question: "Is this internship remote or in-person?",
      answer:
        "The program is designed to be remote-friendly, making it accessible to students across India (and even globally). Any in-person components will be optional and communicated in advance.",
    },
    {
      question: "How do I apply?",
      answer: (
        <span>
          You can apply through our official portal or shared registration form. Make sure to:
          <ol className="list-decimal ml-6 mt-1">
            <li>Submit accurate details</li>
            <li>Select your domain(s) of interest</li>
            <li>Upload your resume/CV or LinkedIn profile</li>
          </ol>
        </span>
      ),
    },
    {
      question: "What is the selection process?",
      answer: (
        <span>
          Our selection typically includes:
          <ul className="list-disc ml-6 mt-1">
            <li>Application screening</li>
            <li>Optional aptitude/skill-based task</li>
            <li>Final onboarding communication</li>
          </ul>
        </span>
      ),
    },
    {
      question: "Do I need prior experience to apply?",
      answer:
        "Not at all! We welcome beginners as well as those with prior exposure. A willingness to learn and contribute is all you need.",
    },
    {
      question: "Can I mention this internship on my resume/LinkedIn?",
      answer:
        "Yes! We encourage you to showcase your experience, projects, and skills on professional platforms like LinkedIn.",
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
                <p className="p-5 pt-3 text-gray-700 bg-white">{faq.answer}</p>
              </div>
            </div>
          ))}
          {faqs.length > 6 && (
            <div className="text-center mt-6">
              <button
                className="text-[#7B2FF2] font-semibold underline focus:outline-none"
                onClick={() => {
                  setShowAll((prev) => !prev);
                  setOpenIndex(null); // close any open accordion when toggling
                }}
              >
                {showAll ? "See less" : "See more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
