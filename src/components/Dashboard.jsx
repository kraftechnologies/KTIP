import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check if user is admin (you can implement your own logic here)
    const checkAdminStatus = () => {
      // For demo purposes, we'll use localStorage
      const adminStatus = localStorage.getItem('isAdmin');
      setIsAdmin(adminStatus === 'true');
    };

    checkAdminStatus();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-[#303030]">Student Dashboard</h2>
          <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-6"></div>
          <p className="text-lg text-[#667085] max-w-2xl mx-auto">
            Access your courses, assignments, and track your progress.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/courses" className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0] hover:shadow-md transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F5FF] rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7F56D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#303030]">My Courses</h3>
            <p className="text-[#667085]">Access your enrolled courses and learning materials.</p>
          </Link>

          <Link to="/assignments" className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0] hover:shadow-md transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F5FF] rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7F56D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#303030]">Assignments</h3>
            <p className="text-[#667085]">View and submit your pending assignments.</p>
          </Link>

          <Link to="/attendance" className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0] hover:shadow-md transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F5FF] rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7F56D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#303030]">My Attendance</h3>
            <p className="text-[#667085]">Track your attendance across different courses.</p>
          </Link>

          <Link to="/progress" className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0] hover:shadow-md transition-all">
            <div className="flex items-center justify-center w-12 h-12 bg-[#F9F5FF] rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7F56D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#303030]">Progress Report</h3>
            <p className="text-[#667085]">View your academic progress and performance.</p>
          </Link>

          {isAdmin && (
            <Link to="/admin/attendance" className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0] hover:shadow-md transition-all">
              <div className="flex items-center justify-center w-12 h-12 bg-[#FEF3F2] rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D92D20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#303030]">Admin: Attendance Management</h3>
              <p className="text-[#667085]">Manage and monitor student attendance.</p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;