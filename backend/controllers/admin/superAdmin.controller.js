const User = require('../../models/User');
const Assignment = require('../../models/Assignment');
const Module = require('../../models/Module');
const Project = require('../../models/Project');
const Course = require('../../models/Course');
const Ticket = require('../../models/Ticket');
const Notification = require('../../models/Notification');
const Evaluation = require('../../models/Evaluation');

// Dashboard Analytics
const getDashboard = async (req, res) => {
  try {
    // Mock data for development without database
    res.json({
      totalUsers: 150,
      totalStudents: 120,
      totalMentors: 15,
      totalAdmins: 8,
      activeTickets: 5,
      totalCourses: 12
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User Management
const getAllUsers = async (req, res) => {
  try {
    // Mock users data
    const mockUsers = [
      { _id: '1', name: 'John Doe', email: 'john@example.com', role: 'student', isBlocked: false },
      { _id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'student', isBlocked: false },
      { _id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'mentor', isBlocked: false },
      { _id: '4', name: 'Sarah Wilson', email: 'sarah@example.com', role: 'domain_admin', isBlocked: false }
    ];
    
    res.json({ users: mockUsers, total: mockUsers.length, page: 1, pages: 1 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const blockUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndUpdate(userId, { isBlocked: true });
    res.json({ message: 'User blocked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const unblockUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await User.findByIdAndUpdate(userId, { isBlocked: false });
    res.json({ message: 'User unblocked successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const assignDomain = async (req, res) => {
  try {
    const { userId } = req.params;
    const { domain } = req.body;
    await User.findByIdAndUpdate(userId, { assignedDomain: domain });
    res.json({ message: 'Domain assigned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Assignment Management
const createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllAssignments = async (req, res) => {
  try {
    const mockAssignments = [
      { _id: '1', title: 'React Basics', description: 'Learn React fundamentals', difficulty: 'medium', dueDate: '2024-02-15' },
      { _id: '2', title: 'Node.js API', description: 'Build REST API', difficulty: 'hard', dueDate: '2024-02-20' }
    ];
    res.json(mockAssignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Module Management
const uploadModule = async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllModules = async (req, res) => {
  try {
    const mockModules = [
      { _id: '1', title: 'JavaScript Fundamentals', type: 'video', description: 'Learn JS basics', createdAt: '2024-01-15' },
      { _id: '2', title: 'React Components', type: 'pdf', description: 'Component guide', createdAt: '2024-01-20' }
    ];
    res.json(mockModules);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Project Management
const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const mockProjects = [
      { _id: '1', title: 'E-commerce App', description: 'Build shopping app', status: 'active', teamSize: 3, deadline: '2024-03-01', createdAt: '2024-01-10' },
      { _id: '2', title: 'Blog Platform', description: 'Create blog system', status: 'completed', teamSize: 2, deadline: '2024-02-15', createdAt: '2024-01-05' }
    ];
    res.json(mockProjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Course Management
const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const mockCourses = [
      { _id: '1', title: 'Full Stack Development', description: 'Complete web development course', price: 299, category: 'Web Development' },
      { _id: '2', title: 'React Masterclass', description: 'Advanced React concepts', price: 199, category: 'Frontend' }
    ];
    res.json(mockCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Support Tickets
const getAllTickets = async (req, res) => {
  try {
    const mockTickets = [
      { _id: '1', title: 'Login Issue', description: 'Cannot access account', status: 'open', priority: 'high', userId: { name: 'John Doe' }, createdAt: '2024-01-15' },
      { _id: '2', title: 'Payment Problem', description: 'Course payment failed', status: 'in-progress', priority: 'medium', userId: { name: 'Jane Smith' }, createdAt: '2024-01-14' }
    ];
    res.json(mockTickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const assignTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { assignedTo } = req.body;
    await Ticket.findByIdAndUpdate(ticketId, { assignedTo });
    res.json({ message: 'Ticket assigned successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Announcements
const sendAnnouncement = async (req, res) => {
  try {
    const { title, message, targetGroup } = req.body;
    const notification = new Notification({
      title,
      message,
      targetGroup,
      createdBy: req.user.id
    });
    await notification.save();
    res.status(201).json({ message: 'Announcement sent successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Analytics
const getAnalytics = async (req, res) => {
  try {
    const mockAnalytics = {
      userGrowth: [
        { _id: '2024-01', count: 45 },
        { _id: '2024-02', count: 62 },
        { _id: '2024-03', count: 38 }
      ],
      courseEnrollments: [
        { _id: 'Web Development', count: 85 },
        { _id: 'Mobile Development', count: 42 },
        { _id: 'Data Science', count: 23 }
      ]
    };
    res.json(mockAnalytics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin Management
const createAdmin = async (req, res) => {
  try {
    const { name, email, role, permissions } = req.body;
    const admin = new User({
      name,
      email,
      role,
      permissions,
      password: 'defaultPassword123' // Should be changed on first login
    });
    await admin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAuditLogs = async (req, res) => {
  try {
    // Implementation for audit logs
    res.json({ logs: [] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDashboard,
  getAllUsers,
  blockUser,
  unblockUser,
  assignDomain,
  createAssignment,
  getAllAssignments,
  uploadModule,
  getAllModules,
  createProject,
  getAllProjects,
  createCourse,
  getAllCourses,
  getAllTickets,
  assignTicket,
  sendAnnouncement,
  getAnalytics,
  createAdmin,
  getAuditLogs
};