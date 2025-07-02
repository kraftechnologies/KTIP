import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaBookOpen, FaTasks, FaProjectDiagram, FaBell, FaFileAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const UserSidebar = () => {
  const navigate = useNavigate();
  const { logout, userName } = useAuth();

  const navItems = [
    { path: "/user-dashboard", label: "Dashboard", icon: <FaTachometerAlt />, exact: true},
    { path: "/user-dashboard/modules", label: "Modules", icon: <FaBookOpen /> },
    { path: "/user-dashboard/assignments", label: "Assignments", icon: <FaTasks /> },
    { path: "/user-dashboard/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { path: "/user-dashboard/notifications", label: "Notifications", icon: <FaBell /> },
    { path: "/user-dashboard/resume", label: "Resume", icon: <FaFileAlt /> },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="bg-white shadow-lg w-64 h-screen flex flex-col justify-between sticky top-0 border-r border-gray-200">
      {/* Top Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-purple-700 tracking-wide">KTIP Student</h2>
        <p className="text-sm text-gray-500 mt-1">Hello, {userName || "User"}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
             end={item.exact}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 text-m rounded-md transition ${
                isActive
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer Buttons */}
      <div className="px-4 py-3 border-t border-gray-200">
        <NavLink
          to="/user-dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md text-base transition ${
              isActive
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
            }`
          }
        >
          <FaCog />
          Settings
        </NavLink>
        <button
          onClick={handleLogout}
          className="mt-3 flex items-center gap-3 px-3 py-2 w-full rounded-md text-base text-red-600 hover:bg-red-100 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
