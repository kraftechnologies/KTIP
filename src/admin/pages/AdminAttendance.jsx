import React, { useState } from "react";

const AdminAttendance = () => {
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedDate, setSelectedDate] = useState("");
  
  // Sample data for courses
  const courses = [
    { id: "web-dev", name: "Web Development" },
    { id: "react", name: "React Fundamentals" },
    { id: "node", name: "Node.js Backend" },
    { id: "ui-ux", name: "UI/UX Design" },
  ];
  
  // Sample data for attendance records
  const attendanceRecords = [
    { id: 1, studentName: "John Doe", studentId: "ST001", course: "Web Development", date: "2025-06-15", status: "present" },
    { id: 2, studentName: "Jane Smith", studentId: "ST002", course: "Web Development", date: "2025-06-15", status: "absent" },
    { id: 3, studentName: "Alex Johnson", studentId: "ST003", course: "React Fundamentals", date: "2025-06-15", status: "present" },
    { id: 4, studentName: "Emily Brown", studentId: "ST004", course: "Node.js Backend", date: "2025-06-15", status: "present" },
    { id: 5, studentName: "Michael Wilson", studentId: "ST005", course: "UI/UX Design", date: "2025-06-15", status: "absent" },
  ];
  
  // Filter records based on selected course and date
  const filteredRecords = attendanceRecords.filter(record => {
    const courseMatch = selectedCourse === "all" || record.course === selectedCourse;
    const dateMatch = !selectedDate || record.date === selectedDate;
    return courseMatch && dateMatch;
  });

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Attendance Management</h1>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B2FF2]"
            >
              <option value="all">All Courses</option>
              {courses.map(course => (
                <option key={course.id} value={course.name}>{course.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B2FF2]"
            />
          </div>
          
          <div className="flex items-end">
            <button className="bg-[#7B2FF2] text-white px-4 py-2 rounded-md hover:bg-[#6020D2] transition-colors">
              Mark Attendance
            </button>
          </div>
        </div>
      </div>
      
      {/* Attendance Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.studentId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.studentName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.course}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    record.status === "present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                    {record.status === "present" ? "Present" : "Absent"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-[#7B2FF2] hover:text-[#6020D2] mr-3">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAttendance;