import React, { useState, useEffect } from "react";
import AttendanceTable from "./AttendanceTable";
import AttendanceChart from "./AttendanceChart";
import { useNavigate } from "react-router-dom";

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

// Sample data for courses
const sampleCoursesData = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Data Science" }
];

// Sample data for subjects
const sampleSubjectsData = [
  { id: 101, name: "HTML & CSS", courseId: 1 },
  { id: 102, name: "JavaScript", courseId: 1 },
  { id: 103, name: "React", courseId: 1 },
  { id: 201, name: "Python Basics", courseId: 2 },
  { id: 202, name: "Data Analysis", courseId: 2 },
  { id: 203, name: "Machine Learning", courseId: 2 }
];

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
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [viewMode, setViewMode] = useState("student"); // "student", "course", "subject"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in and is admin (you can implement your own logic here)
    const checkLoginStatus = () => {
      // For demo purposes, we'll use localStorage
      const loginStatus = localStorage.getItem('isLoggedIn');
      const adminStatus = localStorage.getItem('isAdmin');
      setIsLoggedIn(loginStatus === 'true');
      setIsAdmin(adminStatus === 'true');
    };

    checkLoginStatus();
  }, []);
  
  // Filter subjects based on selected course
  const filteredSubjects = selectedCourse 
    ? sampleSubjectsData.filter(subject => subject.courseId === selectedCourse) 
    : [];

  // Get data for the selected view
  const getViewData = () => {
    if (viewMode === "student" && selectedStudent) {
      const student = sampleStudentsData.find(s => s.id === selectedStudent);
      if (student) {
        return {
          title: `${student.name}'s Attendance`,
          data: student
        };
      }
    } else if (viewMode === "course" && selectedCourse) {
      const courseName = sampleCoursesData.find(c => c.id === selectedCourse)?.name;
      const studentsInCourse = sampleStudentsData.filter(student => 
        student.enrolledCourses.some(course => course.id === selectedCourse)
      );
      
      return {
        title: `${courseName} Course Attendance`,
        data: studentsInCourse.map(student => {
          const course = student.enrolledCourses.find(c => c.id === selectedCourse);
          return {
            studentName: student.name,
            attendance: course?.attendance || 0,
            subjects: course?.subjects || []
          };
        })
      };
    } else if (viewMode === "subject" && selectedSubject) {
      const subject = sampleSubjectsData.find(s => s.id === selectedSubject);
      const studentsWithSubject = sampleStudentsData.filter(student => 
        student.enrolledCourses.some(course => 
          course.subjects.some(s => s.id === selectedSubject)
        )
      );
      
      return {
        title: `${subject?.name} Subject Attendance`,
        data: studentsWithSubject.map(student => {
          const course = student.enrolledCourses.find(c => 
            c.subjects.some(s => s.id === selectedSubject)
          );
          const subjectData = course?.subjects.find(s => s.id === selectedSubject);
          
          return {
            studentName: student.name,
            attendance: subjectData?.attendance || 0,
            sessions: subjectData?.sessions || []
          };
        })
      };
    }
    
    return { title: "Select a view option", data: null };
  };
  
  const viewData = getViewData();
  
  // Render student view
  const renderStudentView = (data) => {
    if (!data) return <p className="text-center text-gray-500">Select a student to view attendance</p>;
    
    // Calculate overall attendance
    const overallAttendance = data.enrolledCourses.reduce(
      (sum, course) => sum + course.attendance, 0
    ) / data.enrolledCourses.length;
    
    return (
      <>
        <div className="mb-8 flex justify-between items-center">
          <div className="bg-white p-4 rounded-md shadow-sm border border-[#EAECF0]">
            <p className="text-[#344054]">
              <span className="font-medium">Student:</span>{" "}
              <span className="text-[#7F56D9] font-bold">{data.name}</span>
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

        {data.enrolledCourses.map((course) => (
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
      </>
    );
  };
  
  // Render course view
  const renderCourseView = (data) => {
    if (!data) return <p className="text-center text-gray-500">Select a course to view attendance</p>;
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
        <h3 className="text-xl font-semibold mb-6 text-[#303030]">Student Performance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Overall Attendance
                </th>
                {data[0]?.subjects?.map(subject => (
                  <th key={subject.id} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {subject.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.studentName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span className={`font-bold ${getProgressColor(item.attendance).replace('bg-', 'text-')}`}>
                        {item.attendance}%
                      </span>
                    </div>
                  </td>
                  {item.subjects?.map(subject => (
                    <td key={subject.id} className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <span className={`font-bold ${getProgressColor(subject.attendance).replace('bg-', 'text-')}`}>
                          {subject.attendance}%
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  // Render subject view
  const renderSubjectView = (data) => {
    if (!data) return <p className="text-center text-gray-500">Select a subject to view attendance</p>;
    
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
        <h3 className="text-xl font-semibold mb-6 text-[#303030]">Subject Attendance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sessions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.studentName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span className={`font-bold ${getProgressColor(item.attendance).replace('bg-', 'text-')}`}>
                        {item.attendance}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-1">
                      {item.sessions?.map((session, idx) => (
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
                </tr>
              ))}
            </tbody>
          </table>
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
            Monitor and analyze student attendance across courses and subjects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* View Selection Controls */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-[#EAECF0]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">View By</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                  value={viewMode}
                  onChange={(e) => {
                    setViewMode(e.target.value);
                    setSelectedStudent(null);
                    setSelectedCourse(null);
                    setSelectedSubject(null);
                  }}
                >
                  <option value="student">Student</option>
                  <option value="course">Course</option>
                  <option value="subject">Subject</option>
                </select>
              </div>
              
              {viewMode === "student" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Student</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                    value={selectedStudent || ""}
                    onChange={(e) => setSelectedStudent(Number(e.target.value))}
                  >
                    <option value="">-- Select Student --</option>
                    {sampleStudentsData.map(student => (
                      <option key={student.id} value={student.id}>{student.name}</option>
                    ))}
                  </select>
                </div>
              )}
              
              {viewMode === "course" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                    value={selectedCourse || ""}
                    onChange={(e) => setSelectedCourse(Number(e.target.value))}
                  >
                    <option value="">-- Select Course --</option>
                    {sampleCoursesData.map(course => (
                      <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                  </select>
                </div>
              )}
              
              {viewMode === "subject" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                    <select
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                      value={selectedCourse || ""}
                      onChange={(e) => {
                        const courseId = Number(e.target.value);
                        setSelectedCourse(courseId);
                        setSelectedSubject(null);
                      }}
                    >
                      <option value="">-- Select Course --</option>
                      {sampleCoursesData.map(course => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Subject</label>
                    <select
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
                      value={selectedSubject || ""}
                      onChange={(e) => setSelectedSubject(Number(e.target.value))}
                      disabled={!selectedCourse}
                    >
                      <option value="">-- Select Subject --</option>
                      {filteredSubjects.map(subject => (
                        <option key={subject.id} value={subject.id}>{subject.name}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Title */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#303030]">{viewData.title}</h3>
          </div>
          
          {/* Content based on view mode */}
          {viewMode === "student" && renderStudentView(viewData.data)}
          {viewMode === "course" && renderCourseView(viewData.data)}
          {viewMode === "subject" && renderSubjectView(viewData.data)}
        </div>
      </div>
    </section>
  );
};

export default AdminAttendancePage;