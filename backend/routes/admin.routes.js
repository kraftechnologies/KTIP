const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { isSuperAdmin } = require('../middleware/roleCheck');
const superAdminController = require('../controllers/admin/superAdmin.controller');

// Super Admin Routes - Apply auth middleware to all routes
router.use(authMiddleware);
router.use(isSuperAdmin);

// Dashboard
router.get('/dashboard', superAdminController.getDashboard);

// User Management
router.get('/users', superAdminController.getAllUsers);
router.patch('/users/:userId/block', superAdminController.blockUser);
router.patch('/users/:userId/unblock', superAdminController.unblockUser);
router.patch('/users/:userId/assign-domain', superAdminController.assignDomain);

// Assignment Management
router.post('/assignments', superAdminController.createAssignment);
router.get('/assignments', superAdminController.getAllAssignments);

// Module Management
router.post('/modules', superAdminController.uploadModule);
router.get('/modules', superAdminController.getAllModules);

// Project Management
router.post('/projects', superAdminController.createProject);
router.get('/projects', superAdminController.getAllProjects);

// Course Management
router.post('/courses', superAdminController.createCourse);
router.get('/courses', superAdminController.getAllCourses);

// Support Tickets
router.get('/tickets', superAdminController.getAllTickets);
router.patch('/tickets/:ticketId/assign', superAdminController.assignTicket);

// Announcements
router.post('/announcements', superAdminController.sendAnnouncement);

// Analytics
router.get('/analytics', superAdminController.getAnalytics);

// Admin Management
router.post('/admins', superAdminController.createAdmin);
router.get('/audit-logs', superAdminController.getAuditLogs);

module.exports = router;