import React from "react";
import { Link } from "react-router-dom";

const ConstructionPage = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full px-0 text-center">
        <div className="mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-[#7F56D9] mx-auto mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <h1 className="text-4xl font-bold text-[#303030] mb-4">
            Page Under Construction
          </h1>
          <p className="text-xl text-[#667085] max-w-2xl mx-auto mb-8">
            We're working hard to bring you something amazing. This page is
            currently under development and will be available soon.
          </p>
          <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-10"></div>
        </div>

        <div className="bg-[#F9F5FF] p-8 rounded-lg max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold text-[#303030] mb-4">
            What to Expect
          </h2>
          <ul className="text-left space-y-4 mb-6">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#7F56D9] mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[#344054]">
                Detailed information about our internship programs
              </span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#7F56D9] mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[#344054]">
                Interactive features to enhance your learning experience
              </span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#7F56D9] mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[#344054]">
                Resources to help you succeed in your internship
              </span>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#7F56D9] mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[#344054]">
                Community features to connect with fellow interns
              </span>
            </li>
          </ul>
          <p className="text-[#667085] italic">
            We're working diligently to make this page available as soon as
            possible.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-[#7B2FF2] hover:bg-[#6620D0] text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="bg-white border border-[#7B2FF2] text-[#7B2FF2] hover:bg-[#F9F5FF] px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConstructionPage;