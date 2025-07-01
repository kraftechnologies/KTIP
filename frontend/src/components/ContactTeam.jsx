import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import TeamMemberCard from '../sections/TeamMemberCard';

const teamMembers = [
  {
    name: 'Ankit Verma',
    role: 'Program Lead',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'ankit.verma@kraftechnologies.com',
    linkedin: 'https://www.linkedin.com/in/ankit-verma',
  },
  {
    name: 'Sneha Gupta',
    role: 'Technical Mentor',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'sneha.gupta@kraftechnologies.com',
    linkedin: 'https://www.linkedin.com/in/sneha-gupta',
  },
  {
    name: 'Vikram Singh',
    role: 'Community Manager',
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    email: 'vikram.singh@kraftechnologies.com',
    linkedin: 'https://www.linkedin.com/in/vikram-singh',
  },
];

const ContactTeam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    to: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook up to API or email service
    alert(
      `Message sent to ${formData.to || 'our team'}!\n\n` +
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
    );
    setFormData({ name: '', email: '', subject: '', message: '', to: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        {/* Hero */}
        <section
          id="contact-hero"
          className="relative h-56 md:h-72 flex items-center justify-center text-center bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] opacity-10" />
          <div className="relative z-10 px-4">
            <h1 className="text-2xl md:text-4xl font-bold text-[#000]">
              Contact Our Team
            </h1>
            <p className="mt-2 text-gray-700 max-w-xl mx-auto">
              Have questions? Reach out directly to any of our team members or
              send us a message below.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 container mx-auto">
          <h2 className="text-3xl font-bold text-[#7B2FF2] text-center mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.email} member={member} />
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-[#7B2FF2] text-center mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#7B2FF2] mb-1">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-black focus:ring-2 focus:ring-[#7B2FF2] focus:border-[#7B2FF2]"
                />
              </div>
              <div>
                <label className="block text-[#7B2FF2] mb-1">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-black focus:ring-2 focus:ring-[#7B2FF2] focus:border-[#7B2FF2]"
                />
              </div>
              <div>
                <label className="block text-[#7B2FF2] mb-1">
                  To
                </label>
                <select
                  name="to"
                  value={formData.to}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-black focus:ring-2 focus:ring-[#7B2FF2] focus:border-[#7B2FF2]"
                >
                  <option value="">General Inquiry</option>
                  {teamMembers.map((m) => (
                    <option key={m.email} value={m.email}>
                      {m.name} – {m.role}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#7B2FF2] mb-1">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-black focus:ring-2 focus:ring-[#7B2FF2] focus:border-[#7B2FF2]"
                />
              </div>
              <div>
                <label className="block text-[#7B2FF2] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border border-black focus:ring-2 focus:ring-[#7B2FF2] focus:border-[#7B2FF2]"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#7B2FF2] to-[#22D1EE] text-white px-8 py-3 rounded-md font-medium hover:from-[#5F1EDC] hover:to-[#1CA7EC] transition shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactTeam;