import React, { useState } from "react";
import AttendanceTable from "./AttendanceTable";
import AttendanceChart from "./AttendanceChart";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Sample data for students
const sampleStudentsData = [
  {
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
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    enrolledCourses: [
      { 
        id: 1, 
        name: "Web Development", 
        attendance: 92,
        subjects: [
          { id: 101, name: "HTML & CSS", attendance: 95, sessions: [1, 1, 1, 1, 1, 1, 1, 1] },
          { id: 102, name: "JavaScript", attendance: 90, sessions: [1, 1, 1, 1, 1, 0, 1, 1] },
          { id: 103, name: "React", attendance: 92, sessions: [1, 1, 1, 1, 1, 1, 1, 0] }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    enrolledCourses: [
      { 
        id: 2, 
        name: "Data Science", 
        attendance: 65,
        subjects: [
          { id: 201, name: "Python Basics", attendance: 70, sessions: [1, 0, 1, 0, 0, 1, 1, 0] },
          { id: 202, name: "Data Analysis", attendance: 60, sessions: [1, 0, 0, 1, 1, 0, 0, 1] },
          { id: 203, name: "Machine Learning", attendance: 65, sessions: [1, 1, 0, 0, 0, 1, 1, 1] }
        ]
      }
    ]
  }
];

// Sample data for subjects taught by admin
const adminSubjects = [
  { id: 101, name: "HTML & CSS", courseId: 1 },
  { id: 102, name: "JavaScript", courseId: 1 },
  { id: 201, name: "Python Basics", courseId: 2 },
];

// Sample attendance data by month
const monthlyAttendance = {
  "January": [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  "February": [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
  "March": [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
  "April": [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]
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

const AdminAttendancePage = () => {
  const [viewType, setViewType] = useState("overall"); // "overall" or "subject"
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin } = useAuth();

  // Calculate overall attendance across all subjects
  const calculateOverallAttendance = () => {
    let totalAttendance = 0;
    let subjectCount = 0;
    
    // For each subject taught by admin
    adminSubjects.forEach(subject => {
      // Find all students who take this subject
      sampleStudentsData.forEach(student => {
        const course = student.enrolledCourses.find(course => 
          course.subjects.some(s => s.id === subject.id)
        );
        
        if (course) {
          const subjectData = course.subjects.find(s => s.id === subject.id);
          if (subjectData) {
            totalAttendance += subjectData.attendance;
            subjectCount++;
          }
        }
      });
    });
    
    return subjectCount > 0 ? (totalAttendance / subjectCount).toFixed(2) : 0;
  };

  // Get students for a specific subject
  const getStudentsForSubject = (subjectId) => {
    return sampleStudentsData.filter(student => 
      student.enrolledCourses.some(course => 
        course.subjects.some(s => s.id === subjectId)
      )
    ).map(student => {
      const course = student.enrolledCourses.find(course => 
        course.subjects.some(s => s.id === subjectId)
      );
      const subjectData = course.subjects.find(s => s.id === subjectId);
      
      return {
        id: student.id,
        name: student.name,
        attendance: subjectData.attendance,
        sessions: subjectData.sessions
      };
    });
  };

  // Render student attendance details with monthly view
  const renderStudentMonthlyAttendance = () => {
    if (!selectedStudent || !selectedSubject) return null;
    
    const attendanceData = monthlyAttendance[selectedMonth] || [];
    const daysInMonth = attendanceData.length;
    
    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
        <h3 className="text-xl font-semibold mb-4 text-[#303030]">
          Monthly Attendance: {selectedMonth}
        </h3>
        
        <div className="grid grid-cols-8 gap-2 mb-4">
          {attendanceData.map((status, idx) => (
            <div 
              key={idx} 
              className={`p-2 rounded-md text-center ${status ? "bg-[#ECFDF3] text-[#12B76A]" : "bg-[#FEF3F2] text-[#F04438]"}`}
            >
              <div className="font-medium">{idx + 1}</div>
              <div className="text-xs">{status ? "Present" : "Absent"}</div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-[#344054]">
            <span className="font-medium">Total Classes:</span> {daysInMonth}
          </div>
          <div className="text-[#344054]">
            <span className="font-medium">Present:</span> {attendanceData.filter(status => status === 1).length}
          </div>
          <div className="text-[#344054]">
            <span className="font-medium">Absent:</span> {attendanceData.filter(status => status === 0).length}
          </div>
          <div className="text-[#344054]">
            <span className="font-medium">Attendance:</span>{" "}
            <span className={`font-bold ${getProgressColor(
              (attendanceData.filter(status => status === 1).length / daysInMonth) * 100
            ).replace('bg-', 'text-')}`}>
              {((attendanceData.filter(status => status === 1).length / daysInMonth) * 100).toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  if (!isLoggedIn || !isAdmin) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3 text-[#303030]">Access Denied</h2>
            <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-6"></div>
            <p className="text-lg text-[#667085] max-w-2xl mx-auto">
              You need admin privileges to access this page.
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-8 bg-[#7B2FF2] hover:bg-[#5F1EDC] text-white font-semibold py-2 px-6 rounded-full shadow transition-all"
            >
              Go to Home
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
          <h2 className="text-3xl font-bold mb-3 text-[#303030]">Attendance Management</h2>
          <div className="w-20 h-1 bg-[#7F56D9] mx-auto mb-6"></div>
          <p className="text-lg text-[#667085] max-w-2xl mx-auto">
            Monitor and analyze student attendance across your subjects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main View Selection */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">View Type</label>
                <div className="flex gap-4">
                  <button
                    className={`px-4 py-2 rounded-md ${viewType === "overall" 
                      ? "bg-[#7F56D9] text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => {
                      setViewType("overall");
                      setSelectedSubject(null);
                      setSelectedStudent(null);
                    }}
                  >
                    Overall Attendance
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${viewType === "subject" 
                      ? "bg-[#7F56D9] text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => setViewType("subject")}
                  >
                    Subject-wise Attendance
                  </button>
                </div>
              </div>
            </div>

            {/* Subject Selection (only shown when subject view is selected) */}
            {viewType === "subject" && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Subject</label>
                <select
                  className="w-full md:w-1/3 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                  value={selectedSubject || ""}
                  onChange={(e) => {
                    setSelectedSubject(Number(e.target.value));
                    setSelectedStudent(null);
                  }}
                >
                  <option value="">-- Select Subject --</option>
                  {adminSubjects.map(subject => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          {/* Content based on view type */}
          {viewType === "overall" && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
              <h3 className="text-xl font-semibold mb-6 text-[#303030]">Overall Attendance Summary</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#F9F5FF] p-4 rounded-lg border border-[#E9D7FE]">
                  <h4 className="text-lg font-medium text-[#303030] mb-2">Average Attendance</h4>
                  <p className="text-3xl font-bold text-[#7F56D9]">{calculateOverallAttendance()}%</p>
                </div>
                
                <div className="bg-[#F0F9FF] p-4 rounded-lg border border-[#B2DDFF]">
                  <h4 className="text-lg font-medium text-[#303030] mb-2">Total Subjects</h4>
                  <p className="text-3xl font-bold text-[#0BA5EC]">{adminSubjects.length}</p>
                </div>
                
                <div className="bg-[#FEF6EE] p-4 rounded-lg border border-[#FEDF89]">
                  <h4 className="text-lg font-medium text-[#303030] mb-2">Total Students</h4>
                  <p className="text-3xl font-bold text-[#F79009]">{sampleStudentsData.length}</p>
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-[#303030] mb-4">Subject-wise Overview</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Course
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Average Attendance
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Students
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {adminSubjects.map(subject => {
                      const courseData = sampleCoursesData.find(c => c.id === subject.courseId);
                      const students = getStudentsForSubject(subject.id);
                      const avgAttendance = students.reduce((sum, student) => sum + student.attendance, 0) / students.length;
                      
                      return (
                        <tr key={subject.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{subject.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{courseData?.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <span className={`font-bold ${getProgressColor(avgAttendance).replace('bg-', 'text-')}`}>
                                {avgAttendance.toFixed(2)}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{students.length}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button 
                              className="text-[#7F56D9] hover:text-[#6941C6] font-medium"
                              onClick={() => {
                                setViewType("subject");
                                setSelectedSubject(subject.id);
                              }}
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {viewType === "subject" && selectedSubject && (
            <>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0] mb-8">
                <h3 className="text-xl font-semibold mb-6 text-[#303030]">
                  {adminSubjects.find(s => s.id === selectedSubject)?.name} - Attendance Summary
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-medium text-[#303030] mb-4">Attendance Chart</h4>
                    <AttendanceChart 
                      attendanceData={getStudentsForSubject(selectedSubject).map(student => ({
                        id: student.id,
                        name: student.name,
                        attendance: student.attendance
                      }))} 
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-[#303030] mb-4">Class Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F9F5FF] p-4 rounded-lg">
                        <p className="text-sm text-[#667085]">Average Attendance</p>
                        <p className="text-2xl font-bold text-[#7F56D9]">
                          {getStudentsForSubject(selectedSubject)
                            .reduce((sum, student) => sum + student.attendance, 0) / 
                            getStudentsForSubject(selectedSubject).length
                          }%
                        </p>
                      </div>
                      <div className="bg-[#FEF6EE] p-4 rounded-lg">
                        <p className="text-sm text-[#667085]">Total Students</p>
                        <p className="text-2xl font-bold text-[#F79009]">
                          {getStudentsForSubject(selectedSubject).length}
                        </p>
                      </div>
                      <div className="bg-[#ECFDF3] p-4 rounded-lg">
                        <p className="text-sm text-[#667085]">Above 75%</p>
                        <p className="text-2xl font-bold text-[#12B76A]">
                          {getStudentsForSubject(selectedSubject)
                            .filter(student => student.attendance >= 75)
                            .length}
                        </p>
                      </div>
                      <div className="bg-[#FEF3F2] p-4 rounded-lg">
                        <p className="text-sm text-[#667085]">Below 75%</p>
                        <p className="text-2xl font-bold text-[#F04438]">
                          {getStudentsForSubject(selectedSubject)
                            .filter(student => student.attendance < 75)
                            .length}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
                <h3 className="text-xl font-semibold mb-6 text-[#303030]">Student Attendance Details</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Student Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Attendance
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sessions
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {getStudentsForSubject(selectedSubject).map(student => (
                        <tr key={student.id} className={selectedStudent === student.id ? "bg-[#F9F5FF]" : ""}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              <span className={`font-bold ${getProgressColor(student.attendance).replace('bg-', 'text-')}`}>
                                {student.attendance}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex space-x-1">
                              {student.sessions.map((session, idx) => (
                                <span
                                  key={idx}
                                  className={`w-4 h-4 rounded-full ${
                                    session === 1 ? "bg-[#12B76A]" : "bg-[#F04438]"
                                  }`}
                                  title={`Session ${idx + 1}: ${session === 1 ? 'Present' : 'Absent'}`}
                                ></span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button 
                              className="text-[#7F56D9] hover:text-[#6941C6] font-medium"
                              onClick={() => setSelectedStudent(selectedStudent === student.id ? null : student.id)}
                            >
                              {selectedStudent === student.id ? "Hide Details" : "View Details"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {selectedStudent && (
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-medium text-[#303030]">
                        Monthly Attendance for {getStudentsForSubject(selectedSubject).find(s => s.id === selectedStudent)?.name}
                      </h4>
                      <select
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                      >
                        {Object.keys(monthlyAttendance).map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                    
                    {renderStudentMonthlyAttendance()}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminAttendancePage;