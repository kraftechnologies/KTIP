import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/admin/students", label: "Students", icon: "👥" },
    { path: "/admin/attendance", label: "Attendance", icon: "📋" },
    { path: "/admin/courses", label: "Courses", icon: "📚" },
    { path: "/admin/assignments", label: "Assignments", icon: "📝" },
    { path: "/admin/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="bg-[#7B2FF2] text-white w-64 min-h-screen flex flex-col">
      <div className="p-4 border-b border-purple-800">
        <h2 className="text-xl font-bold">KTIP Admin</h2>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white text-[#7B2FF2] font-medium"
                      : "hover:bg-purple-800"
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;