import React from "react";

const AdminDashboard = () => {
  // Sample data for dashboard stats
  const stats = [
    { title: "Total Students", value: "120", icon: "👥", color: "bg-blue-100 text-blue-800" },
    { title: "Attendance Rate", value: "87%", icon: "📋", color: "bg-green-100 text-green-800" },
    { title: "Active Courses", value: "8", icon: "📚", color: "bg-purple-100 text-purple-800" },
    { title: "Pending Assignments", value: "24", icon: "📝", color: "bg-yellow-100 text-yellow-800" },
  ];

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color} mr-4`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Recent Activity</h2>
        </div>
        <div className="p-6">
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">👤</span>
                <div>
                  <p className="font-medium">New student registered</p>
                  <p className="text-sm text-gray-500">John Doe joined the platform</p>
                </div>
                <span className="ml-auto text-sm text-gray-500">2 hours ago</span>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 p-2 rounded-full mr-3">📋</span>
                <div>
                  <p className="font-medium">Attendance updated</p>
                  <p className="text-sm text-gray-500">Web Development class attendance marked</p>
                </div>
                <span className="ml-auto text-sm text-gray-500">5 hours ago</span>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <span className="bg-purple-100 text-purple-800 p-2 rounded-full mr-3">📚</span>
                <div>
                  <p className="font-medium">New course added</p>
                  <p className="text-sm text-gray-500">React Advanced Concepts course created</p>
                </div>
                <span className="ml-auto text-sm text-gray-500">1 day ago</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;