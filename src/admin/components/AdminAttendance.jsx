import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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

function getProgressColor(attendance) {
  if (attendance >= 90) return "bg-green-500";
  if (attendance >= 75) return "bg-purple-500";
  if (attendance >= 60) return "bg-yellow-500";
  return "bg-red-500";
}

const AdminAttendance = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { isLoggedIn, isAdmin } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn || !isAdmin) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold text-red-600 mb-4">Access Denied</h3>
        <p className="text-gray-600 mb-4">You need admin privileges to access this page.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
        >
          Go to Home
        </button>
      </div>
    );
  }

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

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Attendance Management</h2>
      
      {/* Subject Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h3 className="text-lg font-semibold mb-4">Select Subject</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {adminSubjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => {
                setSelectedSubject(subject);
                setSelectedStudent(null);
              }}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedSubject?.id === subject.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <h4 className="font-medium text-gray-900">{subject.name}</h4>
              <p className="text-sm text-gray-500">
                {getStudentsForSubject(subject.id).length} students
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Students List for Selected Subject */}
      {selectedSubject && (
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Students in {selectedSubject.name}
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendance %
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getStudentsForSubject(selectedSubject.id).map(student => (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.attendance}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        student.attendance >= 75 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {student.attendance >= 75 ? 'Good' : 'Poor'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedStudent(student)}
                        className="text-purple-600 hover:text-purple-900"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Student Detail View */}
      {selectedStudent && (
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              {selectedStudent.name} - Attendance Details
            </h3>
            <button
              onClick={() => setSelectedStudent(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              Subject: {selectedSubject.name}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Overall Attendance: {selectedStudent.attendance}%
            </p>
          </div>

          <div className="grid grid-cols-8 gap-2">
            {selectedStudent.sessions.map((status, idx) => (
              <div 
                key={idx} 
                className={`p-3 rounded-md text-center ${
                  status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                <div className="font-medium">Day {idx + 1}</div>
                <div className="text-xs">{status ? "Present" : "Absent"}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
            <span>Total Sessions: {selectedStudent.sessions.length}</span>
            <span>Present: {selectedStudent.sessions.filter(s => s === 1).length}</span>
            <span>Absent: {selectedStudent.sessions.filter(s => s === 0).length}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAttendance;