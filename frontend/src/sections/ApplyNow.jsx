import React, { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";

// Step 1: Personal Information
function StepPersonalInfo({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={data.fullName || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.fullName ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth / Age *</label>
          <input
            type="date"
            name="dob"
            value={data.dob || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.dob ? "border-red-500 focus:ring-red-200" : ""}`}
          />
          {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <select
            name="gender"
            value={data.gender || ''}
            onChange={onChange}
            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
          <input
            type="tel"
            name="contactNumber"
            value={data.contactNumber || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.contactNumber ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your contact number"
          />
          {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={data.email || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.email ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address *</label>
          <input
            type="text"
            name="address"
            value={data.address || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.address ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your address"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nationality / Citizenship *</label>
          <input
            type="text"
            name="nationality"
            value={data.nationality || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.nationality ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your nationality"
          />
          {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
        </div>
      </div>
    </div>
  );
}

// Step 2: Educational Background
function StepEducation({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Educational Background</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Education Level *</label>
          <select
            name="educationLevel"
            value={data.educationLevel || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.educationLevel ? "border-red-500 focus:ring-red-200" : ""}`}
          >
            <option value="">Select Level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Diploma">Diploma</option>
            <option value="Other">Other</option>
          </select>
          {errors.educationLevel && <p className="text-red-500 text-sm mt-1">{errors.educationLevel}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Institution/University Name *</label>
          <input
            type="text"
            name="institution"
            value={data.institution || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.institution ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your institution/university"
          />
          {errors.institution && <p className="text-red-500 text-sm mt-1">{errors.institution}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course/Program *</label>
          <input
            type="text"
            name="course"
            value={data.course || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.course ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="Enter your course/program"
          />
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Year of Study / Graduation Year *</label>
          <input
            type="text"
            name="yearOfStudy"
            value={data.yearOfStudy || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.yearOfStudy ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="e.g., 2nd Year, 2025"
          />
          {errors.yearOfStudy && <p className="text-red-500 text-sm mt-1">{errors.yearOfStudy}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CGPA / Percentage *</label>
          <input
            type="text"
            name="cgpa"
            value={data.cgpa || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.cgpa ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="e.g., 8.5 CGPA or 85%"
          />
          {errors.cgpa && <p className="text-red-500 text-sm mt-1">{errors.cgpa}</p>}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Past Academic Records (Optional)</label>
        <textarea
          name="pastAcademicRecords"
          value={data.pastAcademicRecords || ''}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="10th, 12th, or previous degrees (optional)"
          rows={3}
        />
      </div>
    </div>
  );
}

// Step 3: Resume & Profiles
function StepResumeProfiles({ data, onChange, onFileChange, errors }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Resume & Profiles</h3>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume/CV (PDF/Word) *</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={onFileChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.resume ? "border-red-500 focus:ring-red-200" : ""}`}
        />
        {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
        {data.resume && typeof data.resume === 'string' && (
          <p className="text-green-600 text-sm mt-1">File uploaded: {data.resume}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile URL (optional)</label>
        <input
          type="url"
          name="github"
          value={data.github || ''}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="https://github.com/yourprofile"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile URL (optional)</label>
        <input
          type="url"
          name="linkedIn"
          value={data.linkedIn || ''}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
    </div>
  );
}

// Step 4: Skills, Tools & Projects
function StepSkillsProjects({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Skills, Tools & Projects</h3>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Languages Known *</label>
        <input
          type="text"
          name="languages"
          value={data.languages || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.languages ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="e.g., Python, Java, SQL"
        />
        {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Tools/Software *</label>
        <input
          type="text"
          name="tools"
          value={data.tools || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.tools ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="e.g., Power BI, Tableau, Excel"
        />
        {errors.tools && <p className="text-red-500 text-sm mt-1">{errors.tools}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Soft Skills *</label>
        <input
          type="text"
          name="softSkills"
          value={data.softSkills || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.softSkills ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="e.g., Communication, Leadership, Teamwork"
        />
        {errors.softSkills && <p className="text-red-500 text-sm mt-1">{errors.softSkills}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/Project Links (optional)</label>
        <input
          type="url"
          name="portfolio"
          value={data.portfolio || ''}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="https://yourportfolio.com or GitHub/LinkedIn/project link"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Short Descriptions of Relevant Projects (optional)</label>
        <textarea
          name="projectDescriptions"
          value={data.projectDescriptions || ''}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Describe your projects briefly"
          rows={3}
        />
      </div>
    </div>
  );
}

// Step 5: Motivation, Goals & Availability
function StepMotivationAvailability({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Motivation, Goals & Availability</h3>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join this internship? *</label>
        <textarea
          name="motivation"
          value={data.motivation || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.motivation ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="Your answer"
          rows={2}
        />
        {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">What do you hope to learn from this experience? *</label>
        <textarea
          name="learningGoals"
          value={data.learningGoals || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.learningGoals ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="Your answer"
          rows={2}
        />
        {errors.learningGoals && <p className="text-red-500 text-sm mt-1">{errors.learningGoals}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">How does this internship align with your career goals? *</label>
        <textarea
          name="careerGoals"
          value={data.careerGoals || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.careerGoals ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="Your answer"
          rows={2}
        />
        {errors.careerGoals && <p className="text-red-500 text-sm mt-1">{errors.careerGoals}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date *</label>
          <input
            type="date"
            name="startDate"
            value={data.startDate || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.startDate ? "border-red-500 focus:ring-red-200" : ""}`}
          />
          {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred End Date *</label>
          <input
            type="date"
            name="endDate"
            value={data.endDate || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.endDate ? "border-red-500 focus:ring-red-200" : ""}`}
          />
          {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Weekly Availability (hours/days) *</label>
          <input
            type="text"
            name="weeklyAvailability"
            value={data.weeklyAvailability || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.weeklyAvailability ? "border-red-500 focus:ring-red-200" : ""}`}
            placeholder="e.g., 20 hours, 3 days"
          />
          {errors.weeklyAvailability && <p className="text-red-500 text-sm mt-1">{errors.weeklyAvailability}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Remote or Onsite Preference *</label>
          <select
            name="workPreference"
            value={data.workPreference || ''}
            onChange={onChange}
            className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.workPreference ? "border-red-500 focus:ring-red-200" : ""}`}
          >
            <option value="">Select</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          {errors.workPreference && <p className="text-red-500 text-sm mt-1">{errors.workPreference}</p>}
        </div>
      </div>
    </div>
  );
}

// Step 6: Declaration & Consent
function StepDeclarationConsent({ data, onChange, errors }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">Declaration & Consent</h3>
      <div className="mb-6 flex items-start">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={!!data.termsAccepted}
          onChange={e => onChange({ target: { name: 'termsAccepted', value: e.target.checked } })}
          className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
        />
        <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-700">
          I agree to the <span className="text-purple-600">Terms & Conditions</span> and <span className="text-purple-600">Consent to data usage</span> *
        </label>
      </div>
      {errors.termsAccepted && <p className="text-red-500 text-sm mb-4">{errors.termsAccepted}</p>}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Signature (type your full name) *</label>
        <input
          type="text"
          name="signature"
          value={data.signature || ''}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.signature ? "border-red-500 focus:ring-red-200" : ""}`}
          placeholder="Type your full name as signature"
        />
        {errors.signature && <p className="text-red-500 text-sm mt-1">{errors.signature}</p>}
      </div>
    </div>
  );
}

const steps = [
  { label: "Personal Information", component: StepPersonalInfo },
  { label: "Educational Background", component: StepEducation },
  { label: "Resume & Profiles", component: StepResumeProfiles },
  { label: "Skills, Tools & Projects", component: StepSkillsProjects },
  { label: "Motivation, Goals & Availability", component: StepMotivationAvailability },
  { label: "Declaration & Consent", component: StepDeclarationConsent },
];

const ApplyNow = ({ initialData, onBack }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ ...initialData });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Validation for each step
  const validateStep = () => {
    const newErrors = {};
    if (step === 0) {
      if (!formData.fullName || !formData.fullName.trim()) newErrors.fullName = "Full Name is required";
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.contactNumber || !formData.contactNumber.trim()) newErrors.contactNumber = "Contact Number is required";
      if (!formData.email || !formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.address || !formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.nationality || !formData.nationality.trim()) newErrors.nationality = "Nationality is required";
    }
    if (step === 1) {
      if (!formData.educationLevel) newErrors.educationLevel = "Education level is required";
      if (!formData.institution || !formData.institution.trim()) newErrors.institution = "Institution is required";
      if (!formData.course || !formData.course.trim()) newErrors.course = "Course/Program is required";
      if (!formData.yearOfStudy || !formData.yearOfStudy.trim()) newErrors.yearOfStudy = "Year of study/graduation is required";
      if (!formData.cgpa || !formData.cgpa.trim()) newErrors.cgpa = "CGPA/Percentage is required";
    }
    if (step === 2) {
      if (!formData.resume) newErrors.resume = "Resume/CV is required";
    }
    if (step === 3) {
      if (!formData.languages || !formData.languages.trim()) newErrors.languages = "Languages are required";
      if (!formData.tools || !formData.tools.trim()) newErrors.tools = "Tools/Software are required";
      if (!formData.softSkills || !formData.softSkills.trim()) newErrors.softSkills = "Soft skills are required";
    }
    if (step === 4) {
      if (!formData.motivation || !formData.motivation.trim()) newErrors.motivation = "Motivation is required";
      if (!formData.learningGoals || !formData.learningGoals.trim()) newErrors.learningGoals = "Learning goals are required";
      if (!formData.careerGoals || !formData.careerGoals.trim()) newErrors.careerGoals = "Career goals are required";
      if (!formData.startDate) newErrors.startDate = "Start date is required";
      if (!formData.endDate) newErrors.endDate = "End date is required";
      if (!formData.weeklyAvailability || !formData.weeklyAvailability.trim()) newErrors.weeklyAvailability = "Weekly availability is required";
      if (!formData.workPreference) newErrors.workPreference = "Work preference is required";
    }
    if (step === 5) {
      if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
      if (!formData.signature || !formData.signature.trim()) newErrors.signature = "Signature is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // For file uploads (resume)
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file ? file.name : null }));
    if (errors.resume) setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    // Final validation can be added here
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationSubmitted(true);
    }, 1000);
  };

  if (applicationSubmitted) {
    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for applying to the KTIP program. We've received your application and will review it shortly.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What's Next?</h3>
              <ol className="list-decimal list-inside text-left space-y-2 text-gray-700">
                <li>Our team will review your application within 5-7 business days</li>
                <li>You'll receive an email with further instructions</li>
                <li>If selected, you'll be invited for an online interview</li>
                <li>Final selection results will be announced by April 30, 2025</li>
              </ol>
            </div>
            <a 
              href="/"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all inline-block hover:from-purple-700 hover:to-blue-600"
            >
              Return to Homepage
            </a>
          </div>
        </div>
      </section>
    );
  }

  const StepComponent = steps[step].component;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Complete Your Application</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Step {step + 1} of {steps.length}: {steps[step].label}</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={step === steps.length - 1 ? handleFinalSubmit : handleNext}>
            {step === 0 && (
              <button type="button" onClick={onBack} className="flex items-center text-purple-600 hover:text-purple-700 mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Initial Application
              </button>
            )}
            <StepComponent
              data={formData}
              onChange={handleChange}
              onFileChange={handleFileChange}
              errors={errors}
            />
            <div className="flex justify-between mt-8">
              {step > 0 && (
                <button type="button" onClick={handleBack} className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300">Back</button>
              )}
              <div className="flex-1"></div>
              {step < steps.length - 1 ? (
                <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all flex items-center justify-center ml-auto hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg">Next</button>
              ) : (
                <button type="submit" disabled={isSubmitting} className={`bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all flex items-center justify-center ml-auto ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg"}`}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3" />
                      Submit Application
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;