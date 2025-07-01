import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext.jsx';
import SuperAdminLayout from './Layout.jsx';
import { superAdminService } from '../../../services/superAdminService.js';
import { Users, BookOpen, CheckCircle, AlertCircle, Activity, UserCheck, Shield, Settings } from 'lucide-react';

const SuperAdminDashboard = () => {
  const { userName } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await superAdminService.getDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <SuperAdminLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B2FF2]"></div>
        </div>
      </SuperAdminLayout>
    );
  }

  const stats = [
    { title: 'Total Users', value: dashboardData?.totalUsers || 0, icon: <Users size={24} className="text-blue-600" /> },
    { title: 'Students', value: dashboardData?.totalStudents || 0, icon: <UserCheck size={24} className="text-green-600" /> },
    { title: 'Mentors', value: dashboardData?.totalMentors || 0, icon: <Shield size={24} className="text-purple-600" /> },
    { title: 'Courses', value: dashboardData?.totalCourses || 0, icon: <BookOpen size={24} className="text-orange-600" /> },
    { title: 'Active Tickets', value: dashboardData?.activeTickets || 0, icon: <AlertCircle size={24} className="text-red-600" /> },
    { title: 'Admins', value: dashboardData?.totalAdmins || 0, icon: <Settings size={24} className="text-gray-600" /> },
  ];

  return (
    <SuperAdminLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            <span className="flex items-center gap-2">
              <Activity size={18} className="text-[#7B2FF2]" />
              <span className="font-medium">Last updated: <span className="text-gray-500">{new Date().toLocaleString()}</span></span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">{stat.title}</h3>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {[
                { user: 'John Doe', action: 'enrolled in', target: 'Web Development Course', time: '2 hours ago' },
                { user: 'Jane Smith', action: 'submitted', target: 'JavaScript Assignment', time: '5 hours ago' },
                { user: 'Mike Johnson', action: 'opened ticket', target: '#45678 - Payment Issue', time: '1 day ago' },
                { user: 'Sarah Williams', action: 'completed', target: 'React Module', time: '2 days ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">
                      <span className="text-[#7B2FF2]">{activity.user}</span> {activity.action} <span className="text-gray-700">{activity.target}</span>
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
              {[
                { name: 'Database', status: 'Operational', statusColor: 'bg-green-500' },
                { name: 'API Services', status: 'Operational', statusColor: 'bg-green-500' },
                { name: 'Storage', status: 'Operational', statusColor: 'bg-green-500' },
                { name: 'Authentication', status: 'Operational', statusColor: 'bg-green-500' },
                { name: 'Payment Processing', status: 'Degraded Performance', statusColor: 'bg-yellow-500' },
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <span className="font-medium">{service.name}</span>
                  <div className="flex items-center">
                    <span className={`w-2 h-2 rounded-full ${service.statusColor} mr-2`}></span>
                    <span className="text-sm">{service.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default SuperAdminDashboard;