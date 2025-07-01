import React, { useState } from 'react';
import SuperAdminLayout from './Layout.jsx';
import { superAdminService } from '../../../services/superAdminService.js';
import { Send, Users, UserCheck, Shield, Globe } from 'lucide-react';

const Announcements = () => {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    targetGroup: 'all'
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await superAdminService.sendAnnouncement(formData);
      setSuccess(true);
      setFormData({ title: '', message: '', targetGroup: 'all' });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending announcement:', error);
    } finally {
      setSending(false);
    }
  };

  const targetGroups = [
    { value: 'all', label: 'All Users', icon: <Globe size={16} />, description: 'Send to everyone' },
    { value: 'students', label: 'Students Only', icon: <UserCheck size={16} />, description: 'Send to all students' },
    { value: 'mentors', label: 'Mentors Only', icon: <Users size={16} />, description: 'Send to all mentors' },
    { value: 'admins', label: 'Admins Only', icon: <Shield size={16} />, description: 'Send to all administrators' }
  ];

  return (
    <SuperAdminLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Send Announcements</h1>
          <p className="text-gray-600">Broadcast messages to users across the platform</p>
        </div>

        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Send className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Announcement sent successfully!
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Announcement Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FF2] focus:border-transparent"
                placeholder="Enter announcement title..."
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FF2] focus:border-transparent"
                rows="6"
                placeholder="Write your announcement message here..."
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Target Audience
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {targetGroups.map((group) => (
                  <label
                    key={group.value}
                    className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                      formData.targetGroup === group.value
                        ? 'border-[#7B2FF2] bg-purple-50'
                        : 'border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="targetGroup"
                      value={group.value}
                      checked={formData.targetGroup === group.value}
                      onChange={(e) => setFormData({...formData, targetGroup: e.target.value})}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        formData.targetGroup === group.value
                          ? 'bg-[#7B2FF2] text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {group.icon}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{group.label}</div>
                        <div className="text-sm text-gray-500">{group.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={sending}
                className="bg-[#7B2FF2] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#6B2FD2] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Announcement
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
          <div className="space-y-4">
            {[
              {
                title: 'New Course Launch: Advanced React',
                message: 'We are excited to announce the launch of our new Advanced React course...',
                targetGroup: 'students',
                date: '2024-01-15',
                author: 'Super Admin'
              },
              {
                title: 'System Maintenance Scheduled',
                message: 'Please be aware that we will be performing system maintenance...',
                targetGroup: 'all',
                date: '2024-01-10',
                author: 'Super Admin'
              }
            ].map((announcement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {announcement.targetGroup}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{announcement.message}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>By {announcement.author}</span>
                  <span>{new Date(announcement.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default Announcements;