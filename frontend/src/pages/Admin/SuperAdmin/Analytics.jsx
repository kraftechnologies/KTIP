import React, { useState, useEffect } from 'react';
import SuperAdminLayout from './Layout.jsx';
import { superAdminService } from '../../../services/superAdminService.js';
import { TrendingUp, Users, BookOpen, Activity } from 'lucide-react';

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const data = await superAdminService.getAnalytics();
        setAnalytics(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
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

  return (
    <SuperAdminLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-[#7B2FF2] mr-2" size={24} />
              <h3 className="text-xl font-semibold">User Growth</h3>
            </div>
            <div className="space-y-2">
              {analytics?.userGrowth?.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item._id}</span>
                  <span className="font-medium">{item.count} users</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="text-[#7B2FF2] mr-2" size={24} />
              <h3 className="text-xl font-semibold">Course Enrollments</h3>
            </div>
            <div className="space-y-2">
              {analytics?.courseEnrollments?.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item._id}</span>
                  <span className="font-medium">{item.count} courses</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
};

export default Analytics;