import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AttendancePage from './AttendancePage';
import Courses from './Courses';
import Assignments from './Assignments';
import Progress from './Progress';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    }
  }, [location.search]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard?tab=${tab}`);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'attendance':
        return <AttendancePage />;
      case 'courses':
        return <Courses />;
      case 'assignments':
        return <Assignments />;
      case 'progress':
        return <Progress />;
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h2>
            <p className="text-gray-600">
              Select a tab to view your attendance, courses, assignments, or progress.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => handleTabChange('overview')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-[#7B2FF2] text-[#7B2FF2]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => handleTabChange('attendance')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'attendance'
                    ? 'border-b-2 border-[#7B2FF2] text-[#7B2FF2]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Attendance
              </button>
              <button
                onClick={() => handleTabChange('courses')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'courses'
                    ? 'border-b-2 border-[#7B2FF2] text-[#7B2FF2]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Courses
              </button>
              <button
                onClick={() => handleTabChange('assignments')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'assignments'
                    ? 'border-b-2 border-[#7B2FF2] text-[#7B2FF2]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Assignments
              </button>
              <button
                onClick={() => handleTabChange('progress')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'progress'
                    ? 'border-b-2 border-[#7B2FF2] text-[#7B2FF2]'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Progress
              </button>
            </nav>
          </div>
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 