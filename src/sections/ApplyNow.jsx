import React, { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import Payment from './Payment';

const ApplyNow = ({ initialData, onBack }) => {
  const [formData, setFormData] = useState({
    domain: initialData?.domain || "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    aadharCardNo: "",
    linkedIn: "",
    skills: "",
    aadharImage: null,
    resume: initialData?.resume || null,
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

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

      // Simulate form validation
      setTimeout(() => {
        setIsSubmitting(false);
        setShowPayment(true);
      }, 1000);
    }
  };

  if (showPayment) {
    return <Payment formData={{ ...initialData, ...formData }} onBack={() => setShowPayment(false)} />;
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Complete Your Application
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Please provide additional information to complete your application.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center text-purple-600 hover:text-purple-700 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Initial Application
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="domain"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Domain *
                </label>
                <select
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                    errors.domain ? "border-red-500 focus:ring-red-200" : ""
                  }`}
                >
                  <option value="">Select Domain</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                </select>
                {errors.domain && (
                  <p className="text-red-500 text-sm mt-1">{errors.domain}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <div className="flex items-center space-x-6">
                  <div>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                      className="mr-2 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="male" className="text-gray-700">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                      className="mr-2 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="female" className="text-gray-700">Female</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                      className="mr-2 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor="other" className="text-gray-700">Other</label>
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
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  errors.address ? "border-red-500 focus:ring-red-200" : ""
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
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                    errors.city ? "border-red-500 focus:ring-red-200" : ""
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
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                    errors.state ? "border-red-500 focus:ring-red-200" : ""
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
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                    errors.country ? "border-red-500 focus:ring-red-200" : ""
                  }`}
                  placeholder="Enter your country"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="aadharCardNo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Aadhar Card No *
              </label>
              <input
                type="text"
                id="aadharCardNo"
                name="aadharCardNo"
                value={formData.aadharCardNo}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  errors.aadharCardNo ? "border-red-500 focus:ring-red-200" : ""
                }`}
                placeholder="Enter your Aadhar card number"
              />
              {errors.aadharCardNo && (
                <p className="text-red-500 text-sm mt-1">{errors.aadharCardNo}</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="linkedIn"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                LinkedIn URL *
              </label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  errors.linkedIn ? "border-red-500 focus:ring-red-200" : ""
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
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Skills *
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  errors.skills ? "border-red-500 focus:ring-red-200" : ""
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
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Aadhar Card Image *
              </label>
              <input
                type="file"
                id="aadharImage"
                name="aadharImage"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "aadharImage")}
                className={`w-full px-4 py-3 rounded-lg transition-all bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                  errors.aadharImage ? "border-red-500 focus:ring-red-200" : ""
                }`}
              />
              {errors.aadharImage && (
                <p className="text-red-500 text-sm mt-1">{errors.aadharImage}</p>
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
                className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label htmlFor="termsAccepted" className="text-sm text-gray-700">
                I agree to the{" "}
                <button
                  type="button"
                  onClick={() => setShowTermsModal(true)}
                  className="text-purple-600 hover:text-purple-700"
                >
                  Terms & Conditions
                </button>
              </label>
              {errors.termsAccepted && (
                <p className="text-red-500 text-sm mt-1">{errors.termsAccepted}</p>
              )}
            </div>

            {/* Terms & Conditions Modal */}
            {showTermsModal && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg max-w-md w-full">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">
                    Terms & Conditions
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia, sem sit amet gravida vehicula, dui lectus
                    tempor urna, ac tincidunt purus mi vitae elit.
                  </p>
                  <div className="text-right">
                    <button
                      onClick={() => setShowTermsModal(false)}
                      className="text-purple-600 hover:text-purple-700 font-medium"
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
                className={`bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all flex items-center justify-center mx-auto ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg"
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
                    <Send className="mr-3" />
                    Proceed to Payment
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;