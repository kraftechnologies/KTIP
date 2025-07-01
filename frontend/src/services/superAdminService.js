import { apiCall } from './api.js';

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});

export const superAdminService = {
  // Dashboard
  getDashboard: () => 
    apiCall('/admin/dashboard', { method: 'GET', headers: getAuthHeaders() }),

  // User Management
  getAllUsers: (params = {}) => 
    apiCall(`/admin/users?${new URLSearchParams(params)}`, { headers: getAuthHeaders() }),
  
  blockUser: (userId) => 
    apiCall(`/admin/users/${userId}/block`, { 
      method: 'PATCH', 
      headers: getAuthHeaders() 
    }),
  
  unblockUser: (userId) => 
    apiCall(`/admin/users/${userId}/unblock`, { 
      method: 'PATCH', 
      headers: getAuthHeaders() 
    }),
  
  assignDomain: (userId, domain) => 
    apiCall(`/admin/users/${userId}/assign-domain`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ domain })
    }),

  // Assignment Management
  createAssignment: (data) => 
    apiCall('/admin/assignments', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }),
  
  getAllAssignments: () => 
    apiCall('/admin/assignments', { headers: getAuthHeaders() }),

  // Module Management
  uploadModule: (data) => 
    apiCall('/admin/modules', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }),
  
  getAllModules: () => 
    apiCall('/admin/modules', { headers: getAuthHeaders() }),

  // Project Management
  createProject: (data) => 
    apiCall('/admin/projects', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }),
  
  getAllProjects: () => 
    apiCall('/admin/projects', { headers: getAuthHeaders() }),

  // Course Management
  createCourse: (data) => 
    apiCall('/admin/courses', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }),
  
  getAllCourses: () => 
    apiCall('/admin/courses', { headers: getAuthHeaders() }),

  // Support Tickets
  getAllTickets: (status) => 
    apiCall(`/admin/tickets${status ? `?status=${status}` : ''}`, { headers: getAuthHeaders() }),
  
  assignTicket: (ticketId, assignedTo) => 
    apiCall(`/admin/tickets/${ticketId}/assign`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ assignedTo })
    }),

  // Announcements
  sendAnnouncement: (data) => 
    apiCall('/admin/announcements', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }),

  // Analytics
  getAnalytics: () => 
    apiCall('/admin/analytics', { headers: getAuthHeaders() }),

  // Admin Management
  createAdmin: (data) => 
    apiCall('/admin/admins', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(data)
    }),
  
  getAuditLogs: () => 
    apiCall('/admin/audit-logs', { headers: getAuthHeaders() })
};