import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiMenu, FiBell, FiLogOut, FiHome, FiUsers, FiCalendar, FiDollarSign, FiBarChart2, FiSettings } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUserPlus, FaChartLine, FaPercent } from 'react-icons/fa';

const links = [
  { name: 'Home', path: '/admin/hr', icon: <FiHome className="text-lg mr-2" /> },
  { name: 'Employee Directory', path: '/admin/hr/employees', icon: <FiUsers className="text-lg mr-2" /> },
  { name: 'Leave Requests', path: '/admin/hr/leave-requests', icon: <FiCalendar className="text-lg mr-2" /> },
  { name: 'Payroll', path: '/admin/hr/payroll', icon: <FiDollarSign className="text-lg mr-2" /> },
  { name: 'Performance Reviews', path: '/admin/hr/performance', icon: <FiBarChart2 className="text-lg mr-2" /> },
  { name: 'Settings', path: '/admin/hr/settings', icon: <FiSettings className="text-lg mr-2" /> }
];

const SIDEBAR_WIDTH = 'w-64';

const Sidebar = ({ onClose }) => (
  <aside className={`fixed top-0 left-0 h-full bg-purple-700 text-white flex flex-col py-8 px-4 z-40 ${SIDEBAR_WIDTH}`}>
    <div className="text-2xl font-bold mb-8">HR Admin</div>
    <nav className="flex flex-col gap-4">
      {links.map(link => (
        <Link
          key={link.name}
          to={link.path}
          className="hover:bg-purple-800 rounded px-3 py-2 transition flex items-center"
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </nav>
  </aside>
);

const TopNavbar = ({ onSidebarToggle, onLogout, sidebarOpen }) => (
  <header className={`flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-20 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
    <div className="flex items-center gap-4">
      <button onClick={onSidebarToggle} aria-label="Toggle sidebar">
        <FiMenu size={24} />
      </button>
      <span className="text-xl font-bold text-purple-700">HR Admin Dashboard</span>
    </div>
    <div className="flex items-center gap-6">
      <button className="relative" aria-label="Notifications">
        <FiBell size={22} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
      </button>
      <button onClick={onLogout} className="flex items-center gap-1 text-purple-700 hover:text-purple-900">
        <FiLogOut size={20} /> Logout
      </button>
    </div>
  </header>
);

const hrStats = [
  { label: 'Total Leads', value: 1240, icon: <FaUserPlus className="text-2xl text-purple-700" /> },
  { label: 'New Leads (This Month)', value: 87, icon: <FaChartLine className="text-2xl text-green-600" /> },
  { label: 'Conversion Rate', value: '12.5%', icon: <FaPercent className="text-2xl text-blue-600" /> },
];

const leadsData = [
  { month: 'Jan', leads: 80 },
  { month: 'Feb', leads: 95 },
  { month: 'Mar', leads: 110 },
  { month: 'Apr', leads: 130 },
  { month: 'May', leads: 120 },
  { month: 'Jun', leads: 140 },
  { month: 'Jul', leads: 150 },
  { month: 'Aug', leads: 170 },
  { month: 'Sep', leads: 160 },
  { month: 'Oct', leads: 180 },
  { month: 'Nov', leads: 200 },
  { month: 'Dec', leads: 185 },
];

const recentLeads = [
  { name: 'John Doe', email: 'john@example.com', status: 'Contacted', date: '2024-06-01' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'New', date: '2024-06-02' },
  { name: 'Bob Lee', email: 'bob@example.com', status: 'Converted', date: '2024-06-03' },
  { name: 'Alice Brown', email: 'alice@example.com', status: 'Contacted', date: '2024-06-04' },
  { name: 'Charlie Green', email: 'charlie@example.com', status: 'New', date: '2024-06-05' },
];

const HRDashboardHome = () => (
  <div>
    {/* Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {hrStats.map(stat => (
        <div key={stat.label} className="bg-white rounded-lg shadow p-6 flex items-center gap-4">
          <div>{stat.icon}</div>
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
    {/* Leads Over Time Chart */}
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Leads Over Time</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={leadsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="leads" stroke="#7B2FF2" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    {/* Recent Leads Table */}
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Recent Leads</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentLeads.map((lead, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-4">{lead.name}</td>
                <td className="py-2 px-4">{lead.email}</td>
                <td className="py-2 px-4">{lead.status}</td>
                <td className="py-2 px-4">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const HrAdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      <TopNavbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} onLogout={handleLogout} sidebarOpen={sidebarOpen} />
      <main className={`p-8 transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default HrAdminDashboard;
export { HRDashboardHome }; 