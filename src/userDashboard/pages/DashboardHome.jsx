import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaProjectDiagram, FaStickyNote, FaClipboardList } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const DashboardHome = () => {
  const { userName } = useAuth();

  // Mock data – Replace with dynamic data as needed
  const currentCourse = "Full Stack Web Development";
  const moduleProgress = 60; // %
  const projectProgress = 40; // %
  const upcomingTasks = ["Submit Assignment 2", "Quiz on React", "Project milestone review"];
  const mentorNotes = "Join the group call tomorrow at 11AM for project feedback.";

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Welcome Panel */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userName || "Student"} 👋</h1>
        <p className="text-sm text-gray-500 mt-1">Course: <strong>{currentCourse}</strong></p>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-sm text-gray-600 mb-1">Module Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: `${moduleProgress}%` }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{moduleProgress}% completed</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-1">Project Progress</p>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-indigo-500 h-3 rounded-full" style={{ width: `${projectProgress}%` }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{projectProgress}% completed</p>
          </div>
        </div>
      </div>

      {/* Quick Links and Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-3 text-purple-700">
            <FaClipboardList className="text-lg" />
            <h2 className="font-semibold text-lg">Today's Tasks</h2>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {upcomingTasks.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-3 text-indigo-600">
            <FaStickyNote className="text-lg" />
            <h2 className="font-semibold text-lg">Mentor's Note</h2>
          </div>
          <p className="text-sm text-gray-700">{mentorNotes}</p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/dashboard/modules" className="dashboard-card">
          <FaTasks className="text-3xl text-purple-600" />
          <p className="mt-2 text-gray-800 font-medium">Modules</p>
        </Link>

        <Link to="/dashboard/assignments" className="dashboard-card">
          <FaClipboardList className="text-3xl text-green-600" />
          <p className="mt-2 text-gray-800 font-medium">Assignments</p>
        </Link>

        <Link to="/dashboard/projects" className="dashboard-card">
          <FaProjectDiagram className="text-3xl text-blue-600" />
          <p className="mt-2 text-gray-800 font-medium">Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
