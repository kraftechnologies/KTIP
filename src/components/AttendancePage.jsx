import React, { useState, useEffect } from "react";
import AttendanceTable from "./AttendanceTable";
import AttendanceChart from "./AttendanceChart";
import { useNavigate } from "react-router-dom";

// Sample data for a student's enrolled courses
const sampleStudentData = {
  name: "John Doe",
  email: "john.doe@example.com",
  enrolledCourses: [
    { 
      id: 1, 
      name: "Web Development", 
      attendance: 85,
      subjects: [
        { id: 101, name: "HTML & CSS", attendance: 90, sessions: [1, 1, 1, 1, 0, 1, 1, 1] },
        { id: 102, name: "JavaScript", attendance: 80, sessions: [1, 1, 0, 1, 1, 0, 1, 1] },
        { id: 103, name: "React", attendance: 85, sessions: [1, 1, 1, 0, 1, 1, 1, 0] }
      ]
    },
    { 
      id: 2, 
      name: "Data Science", 
      attendance: 78,
      subjects: [
        { id: 201, name: "Python Basics", attendance: 75, sessions: [1, 0, 1, 1, 0, 1, 1, 0] },
        { id: 202, name: "Data Analysis", attendance: 80, sessions: [1, 1, 0, 1, 1, 0, 1, 1] },
        { id: 203, name: "Machine Learning", attendance: 78, sessions: [1, 1, 0, 1, 0, 1, 1, 1] }
      ]
    }
  ]
};

function getProgressColor(attendance) {
  if (attendance >= 90) {
    return "bg-[#12B76A]"; // Green
  } else if (attendance >= 75) {
    return "bg-[#7F56D9]"; // Purple
  } else if (attendance >= 60) {
    return "bg-[#F79009]"; // Yellow/Orange
  } else {
    return "bg-[#F04438]"; // Red
  }
}

const AttendancePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (you can implement your own logic here)
    const checkLoginStatus = () => {
      // For demo purposes, we'll use localStorage
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };

    checkLoginStatus();
  }, []);

  // Get overall attendance across all courses
  const overallAttendance = sampleStudentData.enrolledCourses.reduce(
    (sum, course) => sum + course.attendance, 0
  ) / sampleStudentData.enrolledCourses.length;

  if (!isLoggedIn) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3 text-[#303030]">Access Denied</h2>
            <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-6"></div>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              Please login to view your attendance details.
            </p>
            <button
              onClick={() => navigate('/login')}
              className="mt-8 bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-6 rounded-full shadow transition-all"
            >
              Go to Login
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-[#303030]">My Attendance</h2>
          <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-6"></div>
          <p className="text-lg text-[#667085] max-w-2xl mx-auto">
            Track your attendance across different courses and subjects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div className="bg-white p-4 rounded-md shadow-sm border border-[#EAECF0]">
              <p className="text-[#344054]">
                <span className="font-medium">Student:</span>{" "}
                <span className="text-[#7F56D9] font-bold">{sampleStudentData.name}</span>
              </p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm border border-[#EAECF0]">
              <p className="text-[#344054]">
                <span className="font-medium">Overall Attendance:</span>{" "}
                <span className={`font-bold ${getProgressColor(overallAttendance).replace('bg-', 'text-')}`}>
                  {overallAttendance.toFixed(2)}%
                </span>
              </p>
            </div>
          </div>

          {sampleStudentData.enrolledCourses.map((course) => (
            <div key={course.id} className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-[#303030]">{course.name}</h3>
                <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-[#EAECF0]">
                  <p className="text-[#344054]">
                    <span className="font-medium">Course Attendance:</span>{" "}
                    <span className={`font-bold ${getProgressColor(course.attendance).replace('bg-', 'text-')}`}>
                      {course.attendance}%
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
                  <h3 className="text-xl font-semibold mb-4 text-[#303030]">Attendance Chart</h3>
                  <AttendanceChart attendanceData={course.subjects} />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
                  <h3 className="text-xl font-semibold mb-4 text-[#303030]">Subject Details</h3>
                  <AttendanceTable attendanceData={course.subjects} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttendancePage;