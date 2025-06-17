import React, { useState } from "react";

const AdminStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  
  // Sample data for courses
  const courses = [
    { id: "web-dev", name: "Web Development" },
    { id: "react", name: "React Fundamentals" },
    { id: "node", name: "Node.js Backend" },
    { id: "ui-ux", name: "UI/UX Design" },
  ];
  
  // Sample data for students
  const students = [
    { id: "ST001", name: "John Doe", email: "john.doe@example.com", course: "Web Development", joinDate: "2025-01-15", status: "active" },
    { id: "ST002", name: "Jane Smith", email: "jane.smith@example.com", course: "Web Development", joinDate: "2025-01-20", status: "active" },
    { id: "ST003", name: "Alex Johnson", email: "alex.j@example.com", course: "React Fundamentals", joinDate: "2025-02-05", status: "inactive" },
    { id: "ST004", name: "Emily Brown", email: "emily.b@example.com", course: "Node.js Backend", joinDate: "2025-02-10", status: "active" },
    { id: "ST005", name: "Michael Wilson", email: "michael.w@example.com", course: "UI/UX Design", joinDate: "2025-03-01", status: "active" },
  ];
  
  // Filter students based on search term and selected course
  const filteredStudents = students.filter(student => {
    const searchMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        student.id.toLowerCase().includes(searchTerm.toLowerCase());
    const courseMatch = selectedCourse === "all" || student.course === selectedCourse;
    return searchMatch && courseMatch;
  });

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Student Management</h1>
      
      {/* Filters and Actions */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search Students</label>
            <input
              type="text"
              placeholder="Search by name, email or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7B2FF2]"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Course</label>
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
          
          <div className="flex items-end">
            <button className="bg-[#7B2FF2] text-white px-4 py-2 rounded-md hover:bg-[#6020D2] transition-colors">
              Add New Student
            </button>
          </div>
        </div>
      </div>
      
      {/* Students Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.course}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.joinDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    student.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {student.status === "active" ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-[#7B2FF2] hover:text-[#6020D2] mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminStudents;