import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AttendanceChart from "./AttendanceChart";

// Sample data for current user
const currentUserData = {
  id: 1,
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

// Sample attendance data by month
const monthlyAttendance = {
  "January": [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  "February": [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  "March": [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  "April": [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]
};

function getProgressColor(attendance) {
  if (attendance >= 75) return "bg-green-500";
  return "bg-red-500";
}

const UserAttendance = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const { isLoggedIn, isAdmin } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn || isAdmin) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold text-red-600 mb-4">Access Denied</h3>
        <p className="text-gray-600 mb-4">This page is for students only.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
        >
          Go to Home
        </button>
      </div>
    );
  }

  // Calculate overall attendance
  const calculateOverallAttendance = () => {
    let totalAttendance = 0;
    let courseCount = 0;
    
    currentUserData.enrolledCourses.forEach(course => {
      totalAttendance += course.attendance;
      courseCount++;
    });
    
    return courseCount > 0 ? (totalAttendance / courseCount).toFixed(1) : 0;
  };

  // Render monthly attendance view
  const renderMonthlyAttendance = () => {
    if (!selectedSubject) return null;
    
    const attendanceData = monthlyAttendance[selectedMonth] || [];
    const daysInMonth = attendanceData.length;
    
    return (
      <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            Monthly Attendance: {selectedMonth}
          </h3>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            {Object.keys(monthlyAttendance).map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-8 gap-2 mb-4">
          {attendanceData.map((status, idx) => (
            <div 
              key={idx} 
              className={`p-2 rounded-md text-center ${
                status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              <div className="font-medium">{idx + 1}</div>
              <div className="text-xs">{status ? "Present" : "Absent"}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="font-medium text-gray-900">Total Classes</div>
            <div className="text-lg font-bold text-gray-700">{daysInMonth}</div>
          </div>
          <div className="text-center">
            <div className="font-medium text-green-600">Present</div>
            <div className="text-lg font-bold text-green-700">
              {attendanceData.filter(status => status === 1).length}
            </div>
          </div>
          <div className="text-center">
            <div className="font-medium text-red-600">Absent</div>
            <div className="text-lg font-bold text-red-700">
              {attendanceData.filter(status => status === 0).length}
            </div>
          </div>
          <div className="text-center">
            <div className="font-medium text-purple-600">Attendance</div>
            <div className="text-lg font-bold text-purple-700">
              {((attendanceData.filter(status => status === 1).length / daysInMonth) * 100).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Attendance</h2>
      
      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Overall Attendance</h3>
          <div className="text-3xl font-bold text-purple-600">
            {calculateOverallAttendance()}%
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Enrolled Courses</h3>
          <div className="text-3xl font-bold text-blue-600">
            {currentUserData.enrolledCourses.length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Total Subjects</h3>
          <div className="text-3xl font-bold text-green-600">
            {currentUserData.enrolledCourses.reduce((total, course) => total + course.subjects.length, 0)}
          </div>
        </div>
      </div>

      {/* Course Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h3 className="text-lg font-semibold mb-4">Select Course</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentUserData.enrolledCourses.map(course => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course);
                setSelectedSubject(null);
              }}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedCourse?.id === course.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <h4 className="font-medium text-gray-900">{course.name}</h4>
              <p className="text-sm text-gray-500 mt-1">
                {course.subjects.length} subjects
              </p>
              <div className="mt-2">
                <div className="flex justify-between text-sm">
                  <span>Attendance</span>
                  <span className="font-medium">{course.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className={`h-2 rounded-full ${getProgressColor(course.attendance)}`}
                    style={{ width: `${course.attendance}%` }}
                  ></div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Subject Details */}
      {selectedCourse && (
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Subjects in {selectedCourse.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedCourse.subjects.map(subject => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedSubject?.id === subject.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <h4 className="font-medium text-gray-900">{subject.name}</h4>
                <div className="mt-2">
                  <div className="flex justify-between text-sm">
                    <span>Attendance</span>
                    <span className="font-medium">{subject.attendance}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className={`h-2 rounded-full ${getProgressColor(subject.attendance)}`}
                      style={{ width: `${subject.attendance}%` }}
                    ></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Monthly Attendance Details */}
      {renderMonthlyAttendance()}

      {/* Attendance Chart */}
      {selectedCourse && (
        <div className="mt-6">
          <AttendanceChart courseData={selectedCourse} />
        </div>
      )}
    </div>
  );
};

export default UserAttendance;