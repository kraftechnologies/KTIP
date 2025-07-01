import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext.jsx';
import { 
  Users, 
  BookOpen, 
  TicketCheck, 
  BarChart2, 
  Settings, 
  CreditCard, 
  Home, 
  LogOut,
  FileText,
  FolderOpen,
  Briefcase,
  MessageSquare,
  Shield,
  DollarSign
} from 'lucide-react';

const SuperAdminLayout = ({ children }) => {
  const { userName, logout } = useAuth();
  const location = useLocation();
  
  const navLinks = [
    { name: 'Dashboard', path: '/admin/super', icon: <Home size={18} /> },
    { name: 'Manage Users', path: '/admin/super/users', icon: <Users size={18} /> },
    { name: 'Assignments', path: '/admin/super/assignments', icon: <FileText size={18} /> },
    { name: 'Modules', path: '/admin/super/modules', icon: <FolderOpen size={18} /> },
    { name: 'Projects', path: '/admin/super/projects', icon: <Briefcase size={18} /> },
    { name: 'Courses', path: '/admin/super/courses', icon: <BookOpen size={18} /> },
    { name: 'Support Tickets', path: '/admin/super/tickets', icon: <TicketCheck size={18} /> },
    { name: 'Announcements', path: '/admin/super/announcements', icon: <MessageSquare size={18} /> },
    { name: 'Analytics', path: '/admin/super/analytics', icon: <BarChart2 size={18} /> },
    { name: 'Financial Tools', path: '/admin/super/financial', icon: <DollarSign size={18} /> },
    { name: 'Admin Management', path: '/admin/super/admin-management', icon: <Shield size={18} /> },
    { name: 'Settings', path: '/admin/super/settings', icon: <Settings size={18} /> },
  ];
  
  const handleLogout = () => {
    logout();
    // Redirect to login page
    window.location.href = '/login';
  };
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">KTIP Super Admin</h2>
          <p className="text-sm text-gray-500 mt-1">{userName || 'Administrator'}</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    location.pathname === link.path
                      ? 'bg-[#7B2FF2] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="border-t mt-6 pt-4">
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                <span className="mr-3"><LogOut size={18} /></span>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;