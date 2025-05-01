import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    branch: '',
    year: '',
    statement: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.college.trim()) {
      newErrors.college = 'College is required';
    }
    
    if (!formData.branch.trim()) {
      newErrors.branch = 'Branch is required';
    }
    
    if (!formData.year.trim()) {
      newErrors.year = 'Year is required';
    }
    
    if (!formData.statement.trim()) {
      newErrors.statement = 'Statement is required';
    } else if (formData.statement.trim().length < 50) {
      newErrors.statement = 'Statement must be at least 50 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
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
            name: '',
            email: '',
            phone: '',
            college: '',
            branch: '',
            year: '',
            statement: ''
          });
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Apply for KTIP</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Fill out the form below to apply for the Kraf Technologies Internship Program.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Application Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying to the Kraf Technologies Internship Program.
                We will review your application and get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="college" className="block text-gray-700 font-medium mb-2">
                    College/University *
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.college ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                    }`}
                    placeholder="Enter your college/university"
                  />
                  {errors.college && <p className="text-red-500 text-sm mt-1">{errors.college}</p>}
                </div>
                
                <div>
                  <label htmlFor="branch" className="block text-gray-700 font-medium mb-2">
                    Branch of Study *
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.branch ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                    }`}
                    placeholder="E.g., Computer Science, Electronics"
                  />
                  {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-gray-700 font-medium mb-2">
                    Year of Study *
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                      errors.year ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                    }`}
                  >
                    <option value="">Select your year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5+">Postgraduate</option>
                  </select>
                  {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="statement" className="block text-gray-700 font-medium mb-2">
                  Statement of Interest *
                </label>
                <textarea
                  id="statement"
                  name="statement"
                  value={formData.statement}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                    errors.statement ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#18cb96]/20 focus:border-[#18cb96]'
                  }`}
                  placeholder="Briefly describe why you're interested in KTIP and what you hope to gain from the experience."
                ></textarea>
                {errors.statement && <p className="text-red-500 text-sm mt-1">{errors.statement}</p>}
                <p className="text-gray-500 text-sm mt-1">Minimum 50 characters required</p>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-[#18cb96] text-white px-8 py-3 rounded-md text-lg font-medium transition-all flex items-center justify-center mx-auto ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Application <Send className="ml-2 w-5 h-5" />
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