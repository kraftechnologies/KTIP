import React, { useState, useEffect } from 'react';
import SuperAdminLayout from './Layout.jsx';
import { superAdminService } from '../../../services/superAdminService.js';
import { Plus, Shield, Eye, Edit, Trash2, UserPlus } from 'lucide-react';

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [auditLogs, setAuditLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('admins');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'domain_admin',
    permissions: []
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [adminData, logsData] = await Promise.all([
        superAdminService.getAllUsers({ role: 'admin' }),
        superAdminService.getAuditLogs()
      ]);
      setAdmins(adminData.users || []);
      setAuditLogs(logsData.logs || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await superAdminService.createAdmin(formData);
      setShowModal(false);
      setFormData({ name: '', email: '', role: 'domain_admin', permissions: [] });
      fetchData();
    } catch (error) {
      console.error('Error creating admin:', error);
    }
  };

  const roleColors = {
    super_admin: 'bg-red-100 text-red-800',
    domain_admin: 'bg-blue-100 text-blue-800',
    evaluation_admin: 'bg-green-100 text-green-800',
    support_admin: 'bg-yellow-100 text-yellow-800'
  };

  const rolePermissions = {
    domain_admin: ['manage_students', 'create_assignments', 'manage_modules'],
    evaluation_admin: ['review_submissions', 'score_projects', 'manage_evaluations'],
    support_admin: ['handle_tickets', 'user_support', 'resolve_issues']
  };

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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Management</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#7B2FF2] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#6B2FD2]"
          >
            <UserPlus size={18} />
            Add New Admin
          </button>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('admins')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'admins'
                    ? 'border-[#7B2FF2] text-[#7B2FF2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Admin Roles
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'audit'
                    ? 'border-[#7B2FF2] text-[#7B2FF2]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Audit Logs
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'admins' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Admin</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Permissions</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {admins.map((admin) => (
                  <tr key={admin._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-[#7B2FF2] flex items-center justify-center">
                            <span className="text-white font-medium">
                              {admin.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                          <div className="text-sm text-gray-500">{admin.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${roleColors[admin.role] || 'bg-gray-100 text-gray-800'}`}>
                        {admin.role.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {(rolePermissions[admin.role] || []).map((permission) => (
                          <span key={permission} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                            {permission.replace('_', ' ')}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        <Eye size={16} />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'audit' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Admin Activities</h3>
            <div className="space-y-4">
              {[
                { action: 'Created new domain admin', user: 'Super Admin', timestamp: '2024-01-15 10:30 AM', details: 'Added John Doe as Domain Admin' },
                { action: 'Modified user permissions', user: 'Super Admin', timestamp: '2024-01-15 09:15 AM', details: 'Updated permissions for Jane Smith' },
                { action: 'Deleted support ticket', user: 'Support Admin', timestamp: '2024-01-14 04:45 PM', details: 'Resolved and deleted ticket #12345' },
                { action: 'Updated course content', user: 'Domain Admin', timestamp: '2024-01-14 02:20 PM', details: 'Modified React course modules' }
              ].map((log, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <Shield size={16} className="text-[#7B2FF2] mr-2" />
                      <span className="font-medium text-gray-900">{log.action}</span>
                    </div>
                    <span className="text-xs text-gray-500">{log.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{log.details}</p>
                  <p className="text-xs text-gray-500">By: {log.user}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="domain_admin">Domain Admin</option>
                    <option value="evaluation_admin">Evaluation Admin</option>
                    <option value="support_admin">Support Admin</option>
                  </select>
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#7B2FF2] text-white rounded-md hover:bg-[#6B2FD2]"
                  >
                    Create Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </SuperAdminLayout>
  );
};

export default AdminManagement;