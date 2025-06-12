import React, { useState } from "react";
import { Send, Check } from "lucide-react";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    domain: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    aadharCardNo: "",
    linkedIn: "",
    skills: "",
    aadharImage: null,
    resume: null,
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.domain) {
      newErrors.domain = "Domain is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.aadharCardNo.trim()) {
      newErrors.aadharCardNo = "Aadhar Card No is required";
    }
    if (!formData.linkedIn.trim()) {
      newErrors.linkedIn = "LinkedIn URL is required";
    }
    if (!formData.skills.trim()) {
      newErrors.skills = "Skills are required";
    }
    if (!formData.aadharImage) {
      newErrors.aadharImage = "Aadhar image is required";
    }
    if (!formData.resume) {
      newErrors.resume = "Resume upload is required";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
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

  const handleFileChange = (e, field) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
          setFormData({
            domain: "",
            gender: "",
            address: "",
            city: "",
            state: "",
            country: "",
            aadharCardNo: "",
            linkedIn: "",
            skills: "",
            aadharImage: null,
            resume: null,
            termsAccepted: false,
          });
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  const baseFieldStyles =
    "w-full px-4 py-3 rounded-md transition-all bg-neutral-700 focus:bg-neutral-700 text-white";

  return (
    <section id="contact" className="py-20 dark:bg-neutral-700 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold mb-3 text-white dark:text-white">
            Apply for KTIP
          </h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg d text-white max-w-2xl mx-auto">
            Fill out the form below to apply for the Kraf Technologies
            Internship Program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#00000066] border border-neutral-500 rounded-lg shadow-md p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying to the Kraf Technologies Internship
                Program. We will review your application and get back to you
                soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
                <div>
                  <label
                    htmlFor="domain"
                    className="block text-white font-medium mb-2"
                  >
                    Domain *
                  </label>
                  <select
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className={`${baseFieldStyles} border border-neutral-500 ${
                      errors.domain
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                    }`}
                  >
                    <option value="">Select Domain</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                  </select>
                  {errors.domain && (
                    <p className="text-red-500 text-sm mt-1">{errors.domain}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Gender *
                  </label>
                  <div className="flex items-center space-x-6 text-white">
                    <div>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                        className="mr-2 bg-neutral-700 border border-neutral-700 text-white"
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                        className="mr-2 text-white"
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="Other"
                        checked={formData.gender === "Other"}
                        onChange={handleChange}
                        className="mr-2 bg-neutral-700 border border-neutral-700"
                      />
                      <label htmlFor="other text-white">Other</label>
                    </div>
                  </div>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block text-white font-medium mb-2"
                >
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700  border-neutral-500 text-white ${
                    errors.address
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                  }`}
                  placeholder="Enter your address"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-white font-medium mb-2"
                  >
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700 border border-neutral-500 text-white ${
                      errors.city
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                    }`}
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="block text-white font-medium mb-2"
                  >
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700 border border-neutral-500 text-white ${
                      errors.state
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                    }`}
                    placeholder="Enter your state"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-white font-medium mb-2"
                  >
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700 border border-neutral-500 text-white ${
                      errors.country
                        ? "border-red-500 focus:ring-red-200"
                        : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                    }`}
                    placeholder="Enter your country"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="aadharCardNo"
                  className="block text-white font-medium mb-2"
                >
                  Aadhar Card No *
                </label>
                <input
                  type="text"
                  id="aadharCardNo"
                  name="aadharCardNo"
                  value={formData.aadharCardNo}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700 border border-neutral-500 text-white ${
                    errors.aadharCardNo
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                  }`}
                  placeholder="Enter your Aadhar card number"
                />
                {errors.aadharCardNo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.aadharCardNo}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="linkedIn"
                  className="block text-white font-medium mb-2"
                >
                  LinkedIn URL *
                </label>
                <input
                  type="url"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700 border border-neutral-500 text-white ${
                    errors.linkedIn
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                  }`}
                  placeholder="Enter your LinkedIn URL"
                />
                {errors.linkedIn && (
                  <p className="text-red-500 text-sm mt-1">{errors.linkedIn}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="skills"
                  className="block text-white font-medium mb-2"
                >
                  Skills *
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all bg-neutral-700 border border-neutral-500 text-white ${
                    errors.skills
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                  }`}
                  placeholder="Enter your skills"
                />
                {errors.skills && (
                  <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="aadharImage"
                  className="block text-white font-medium mb-2"
                >
                  Aadhar Card Image *
                </label>
                <input
                  type="file"
                  id="aadharImage"
                  name="aadharImage"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "aadharImage")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all  bg-neutral-700 border border-neutral-500 text-white ${
                    errors.aadharImage
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                  }`}
                />
                {errors.aadharImage && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.aadharImage}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="resume"
                  className="block text-white font-medium mb-2"
                >
                  Resume Upload *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, "resume")}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all  bg-neutral-700 border border-neutral-500  text-white ${
                    errors.resume
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]"
                  }`}
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
                )}
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      termsAccepted: e.target.checked,
                    })
                  }
                  className="h-5 w-5 text-[#18cb96] border-gray-300 rounded"
                />
                <label htmlFor="termsAccepted" className="text-sm text-white">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() => setShowTermsModal(true)}
                    className="text-[#18cb96]"
                  >
                    Terms & Conditions
                  </button>
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.termsAccepted}
                  </p>
                )}
              </div>

              {/* Terms & Conditions Modal */}
              {showTermsModal && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                  <div className="bg-neutral-700 p-8 rounded-lg max-w-md w-full border border-neutral-500">
                    <h3 className="text-lg font-bold mb-4 text-white">
                      Terms & Conditions
                    </h3>
                    {/* demo terms and conditions of kraf technolagies */}
                    <p className="text-sm text-white mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus lacinia, sem sit amet gravida vehicula, dui lectus
                      tempor urna, ac tincidunt purus mi vitae elit.
                    </p>
                    <div className="text-right">
                      <button
                        onClick={() => setShowTermsModal(false)}
                        className="text-[#18cb96] font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-neutral-700 text-[#18cb96] px-8 py-3 rounded-md text-lg font-medium transition-all flex items-center justify-center mx-auto border border-[#18cb96] ${
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3" />
                      Submit Application
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

export default ApplyNow;
