import React, { useState } from "react";
import { Send, Check } from "lucide-react";
import { Navigate } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.college.trim()) newErrors.college = "College is required";
    if (!formData.branch.trim()) newErrors.branch = "Branch is required";
    if (!formData.year.trim()) newErrors.year = "Year is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setRedirect(true);
    }
  };

  if (redirect) {
    return <Navigate to="/applynow" />;
  }

  const baseFieldStyles =
    "w-full px-4 py-3 rounded-md transition-all bg-neutral-700 focus:bg-neutral-700 text-white";

  return (
    <section id="contact" className="py-20 bg-neutral-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-white">Apply for KTIP</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Fill out the form below to apply for the Kraf Technologies
            Internship Program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#00000066] rounded-lg shadow-md border border-neutral-500 p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Application Submitted!
              </h3>
              <p className="text-white mb-6">
                Thank you for applying to the Kraf Technologies Internship
                Program. Redirecting shortly...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    label: "Full Name *",
                    id: "name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    label: "Email Address *",
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email address",
                  },
                  {
                    label: "Phone Number *",
                    id: "phone",
                    type: "tel",
                    placeholder: "Enter your phone number",
                  },
                  {
                    label: "College/University *",
                    id: "college",
                    type: "text",
                    placeholder: "Enter your college/university",
                  },
                  {
                    label: "Branch of Study *",
                    id: "branch",
                    type: "text",
                    placeholder: "E.g., Computer Science, Electronics",
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-white font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`${baseFieldStyles} ${
                        errors[field.id]
                          ? "border-red-500 focus:ring-2 focus:ring-red-200"
                          : "border border-gray-300 focus:ring-2 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                      }`}
                    />
                    {errors[field.id] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.id]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="year"
                    className="block text-white font-medium mb-2"
                  >
                    Year of Study *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`${baseFieldStyles} ${
                      errors.year
                        ? "border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border border-gray-300 focus:ring-2 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                    }`}
                  >
                    <option value="">Select your year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5+">Postgraduate</option>
                  </select>
                  {errors.year && (
                    <p className="text-red-500 text-sm mt-1">{errors.year}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={` border border-3xl border-[#18cb96] text-[#18cb96] px-8 py-3 rounded-md text-lg font-medium transition-all flex items-center justify-center mx-auto ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-opacity-90 shadow-md hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
