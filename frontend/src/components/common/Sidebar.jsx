import React from 'react';
import { BarChart3, Users, BookOpen, Calendar, FileText, Settings, Home } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "students", label: "Students", icon: Users },
    { id: "attendance", label: "Attendance", icon: Calendar },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-white min-h-screen border-r border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Admin Panel</h2>
            <p className="text-xs text-gray-500">KTIP Management</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6 px-3 pb-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 mb-2 text-left rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
              }`}
            >
              <Icon className={`mr-3 h-5 w-5 ${
                isActive ? 'text-white' : 'text-gray-500 group-hover:text-purple-600'
              }`} />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;