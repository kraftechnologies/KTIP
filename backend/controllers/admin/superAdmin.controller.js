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
    const totalUsers = await User.countDocuments();
    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalMentors = await User.countDocuments({ role: 'mentor' });
    const totalAdmins = await User.countDocuments({ role: { $in: ['domain_admin', 'evaluation_admin', 'support_admin'] } });
    const activeTickets = await Ticket.countDocuments({ status: 'open' });
    const totalCourses = await Course.countDocuments();
    
    res.json({
      totalUsers,
      totalStudents,
      totalMentors,
      totalAdmins,
      activeTickets,
      totalCourses
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User Management
const getAllUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, role, search } = req.query;
    const query = {};
    
    if (role) query.role = role;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }
    
    const users = await User.find(query)
      .select('-password')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
      
    const total = await User.countDocuments(query);
    
    res.json({ users, total, page, pages: Math.ceil(total / limit) });
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
    const assignments = await Assignment.find().populate('domain', 'name');
    res.json(assignments);
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
    const modules = await Module.find().populate('domain', 'name');
    res.json(modules);
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
    const projects = await Project.find().populate('assignedTeams', 'name');
    res.json(projects);
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
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Support Tickets
const getAllTickets = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const tickets = await Ticket.find(query).populate('userId', 'name email');
    res.json(tickets);
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
    const userGrowth = await User.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    
    const courseEnrollments = await Course.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }
        }
      }
    ]);
    
    res.json({ userGrowth, courseEnrollments });
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