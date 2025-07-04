import React, { useState, useEffect } from "react";
import {
  Users,
  UserCheck,
  BookOpen,
  AlertCircle,
  Settings,
  Activity,
  ClipboardList,
  Megaphone,
  BarChart2,
  Layers,
  Edit,
  Trash2,
  Save,
  X,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../../context/AuthContext.jsx";

// Sidebar configuration
const sidebarLinks = [
  { key: "overview", label: "Overview", icon: <Activity size={20} /> },
  {
    key: "assignments",
    label: "Assignments",
    icon: <ClipboardList size={20} />,
  },
  { key: "users", label: "Users", icon: <Users size={20} /> },
  { key: "modules", label: "Modules", icon: <BookOpen size={20} /> },
  { key: "projects", label: "Projects", icon: <Layers size={20} /> },
  {
    key: "announcements",
    label: "Announcements",
    icon: <Megaphone size={20} />,
  },
  { key: "analytics", label: "Analytics", icon: <BarChart2 size={20} /> },
  { key: "settings", label: "Settings", icon: <Settings size={20} /> },
];

const Dashboard = () => {
  const { userName, logout } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("overview");

  useEffect(() => {
    setDashboardData({
      totalStudents: 80,
      totalMentors: 10,
      totalAssignments: 25,
      totalModules: 12,
      totalProjects: 7,
      activeTickets: 2,
    });
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar section={section} setSection={setSection} logout={logout} />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B2FF2]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar section={section} setSection={setSection} logout={logout} />
      <main className="flex-1 p-8">
        {section === "overview" && (
          <OverviewSection dashboardData={dashboardData} />
        )}
        {section === "assignments" && <AssignmentsSection />}
        {section === "users" && <UsersSection />}
        {section === "modules" && <ModulesSection />}
        {section === "projects" && <ProjectsSection />}
        {section === "announcements" && <AnnouncementsSection />}
        {section === "analytics" && <AnalyticsSection />}
        {section === "settings" && <SettingsSection />}
      </main>
    </div>
  );
};

const Sidebar = ({ section, setSection, logout }) => (
  <aside className="w-64 bg-white shadow-lg flex flex-col relative min-h-screen">
    <div className="h-20 flex items-center justify-center border-b">
      <span className="text-xl font-bold text-[#7B2FF2]">Domain Admin</span>
    </div>
    <nav className="flex-1 py-4">
      {sidebarLinks.map((link) => (
        <button
          key={link.key}
          className={`w-full flex items-center px-6 py-3 text-left hover:bg-[#f3f0fc] transition
            ${
              section === link.key
                ? "bg-[#ede9fe] text-[#7B2FF2] font-semibold"
                : "text-gray-700"
            }`}
          onClick={() => setSection(link.key)}
        >
          <span className="mr-3">{link.icon}</span>
          {link.label}
        </button>
      ))}
    </nav>
    <button
      onClick={logout}
      className="w-full flex items-center px-6 py-3 text-left text-red-600 hover:bg-red-50 absolute bottom-0 left-0"
    >
      <LogOut size={20} className="mr-3" />
      Logout
    </button>
  </aside>
);

// --- Overview Section ---
const OverviewSection = ({ dashboardData }) => {
  const stats = [
    {
      title: "Students",
      value: dashboardData?.totalStudents || 0,
      icon: <UserCheck size={24} className="text-green-600" />,
    },
    {
      title: "Mentors",
      value: dashboardData?.totalMentors || 0,
      icon: <Users size={24} className="text-blue-600" />,
    },
    {
      title: "Assignments",
      value: dashboardData?.totalAssignments || 0,
      icon: <ClipboardList size={24} className="text-orange-600" />,
    },
    {
      title: "Modules",
      value: dashboardData?.totalModules || 0,
      icon: <BookOpen size={24} className="text-purple-600" />,
    },
    {
      title: "Projects",
      value: dashboardData?.totalProjects || 0,
      icon: <Layers size={24} className="text-teal-600" />,
    },
    {
      title: "Active Tickets",
      value: dashboardData?.activeTickets || 0,
      icon: <AlertCircle size={24} className="text-red-600" />,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Domain Admin Dashboard</h1>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
          <span className="flex items-center gap-2">
            <Activity size={18} className="text-[#7B2FF2]" />
            <span className="font-medium">
              Last updated:{" "}
              <span className="text-gray-500">
                {new Date().toLocaleString()}
              </span>
            </span>
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.title}
                </h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className="p-3 rounded-full bg-gray-50">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Assignments Section ---
const AssignmentsSection = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "React Basics", due: "2025-07-10", status: "Scheduled" },
    { id: 2, title: "Node.js Project", due: "2025-07-15", status: "Published" },
  ]);
  const [newAssignment, setNewAssignment] = useState({ title: "", due: "" });
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: "", due: "", status: "" });

  const handleAdd = () => {
    if (!newAssignment.title || !newAssignment.due) return;
    setAssignments([
      ...assignments,
      { ...newAssignment, id: Date.now(), status: "Scheduled" },
    ]);
    setNewAssignment({ title: "", due: "" });
  };

  const handleDelete = (id) =>
    setAssignments(assignments.filter((a) => a.id !== id));

  const handleEdit = (assignment) => {
    setEditId(assignment.id);
    setEditData({
      title: assignment.title,
      due: assignment.due,
      status: assignment.status,
    });
  };

  const handleEditSave = (id) => {
    setAssignments(
      assignments.map((a) => (a.id === id ? { ...a, ...editData } : a))
    );
    setEditId(null);
    setEditData({ title: "", due: "", status: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Assignments</h2>
      <div className="mb-6 flex">
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Title"
          value={newAssignment.title}
          onChange={(e) =>
            setNewAssignment({ ...newAssignment, title: e.target.value })
          }
        />
        <input
          className="border px-2 py-1 mr-2"
          type="date"
          value={newAssignment.due}
          onChange={(e) =>
            setNewAssignment({ ...newAssignment, due: e.target.value })
          }
        />
        <button
          className="bg-[#7B2FF2] text-white px-4 py-1 rounded"
          onClick={handleAdd}
        >
          Add Assignment
        </button>
      </div>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Due Date</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id}>
              {editId === a.id ? (
                <>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      type="date"
                      value={editData.due}
                      onChange={(e) =>
                        setEditData({ ...editData, due: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <select
                      className="border px-2 py-1"
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({ ...editData, status: e.target.value })
                      }
                    >
                      <option>Scheduled</option>
                      <option>Published</option>
                    </select>
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEditSave(a.id)}
                      className="text-green-600"
                    >
                      <Save size={18} />
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="text-gray-500"
                    >
                      <X size={18} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2">{a.title}</td>
                  <td className="p-2">{a.due}</td>
                  <td className="p-2">{a.status}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(a)}
                      className="text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Users Section ---
const UsersSection = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", mentor: "Dr. Smith", progress: 80 },
    { id: 2, name: "Bob", mentor: "Ms. Lee", progress: 60 },
  ]);
  const [mentors, setMentors] = useState([
    { id: 1, name: "Dr. Smith", students: 10 },
    { id: 2, name: "Ms. Lee", students: 8 },
  ]);
  const [editStudentId, setEditStudentId] = useState(null);
  const [editStudent, setEditStudent] = useState({
    name: "",
    mentor: "",
    progress: "",
  });

  const handleStudentEdit = (student) => {
    setEditStudentId(student.id);
    setEditStudent({
      name: student.name,
      mentor: student.mentor,
      progress: student.progress,
    });
  };
  const handleStudentEditSave = (id) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, ...editStudent } : s))
    );
    setEditStudentId(null);
    setEditStudent({ name: "", mentor: "", progress: "" });
  };
  const handleStudentDelete = (id) =>
    setStudents(students.filter((s) => s.id !== id));

  const [newStudent, setNewStudent] = useState({
    name: "",
    mentor: "",
    progress: "",
  });
  const handleStudentAdd = () => {
    if (!newStudent.name || !newStudent.mentor) return;
    setStudents([...students, { id: Date.now(), ...newStudent }]);
    setNewStudent({ name: "", mentor: "", progress: "" });
  };

  const [editMentorId, setEditMentorId] = useState(null);
  const [editMentor, setEditMentor] = useState({ name: "", students: "" });
  const handleMentorEdit = (mentor) => {
    setEditMentorId(mentor.id);
    setEditMentor({ name: mentor.name, students: mentor.students });
  };
  const handleMentorEditSave = (id) => {
    setMentors(mentors.map((m) => (m.id === id ? { ...m, ...editMentor } : m)));
    setEditMentorId(null);
    setEditMentor({ name: "", students: "" });
  };
  const handleMentorDelete = (id) =>
    setMentors(mentors.filter((m) => m.id !== id));

  const [newMentor, setNewMentor] = useState({ name: "", students: "" });
  const handleMentorAdd = () => {
    if (!newMentor.name) return;
    setMentors([...mentors, { id: Date.now(), ...newMentor }]);
    setNewMentor({ name: "", students: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Domain Users</h2>
      <h3 className="font-semibold mt-4 mb-2">Students</h3>
      <div className="mb-4 flex">
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
        />
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Mentor"
          value={newStudent.mentor}
          onChange={(e) =>
            setNewStudent({ ...newStudent, mentor: e.target.value })
          }
        />
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Progress"
          type="number"
          value={newStudent.progress}
          onChange={(e) =>
            setNewStudent({ ...newStudent, progress: e.target.value })
          }
        />
        <button
          className="bg-[#7B2FF2] text-white px-4 py-1 rounded"
          onClick={handleStudentAdd}
        >
          Add Student
        </button>
      </div>
      <table className="w-full bg-white rounded shadow mb-6">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Mentor</th>
            <th className="p-2 text-left">Progress (%)</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              {editStudentId === s.id ? (
                <>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      value={editStudent.name}
                      onChange={(e) =>
                        setEditStudent({ ...editStudent, name: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      value={editStudent.mentor}
                      onChange={(e) =>
                        setEditStudent({
                          ...editStudent,
                          mentor: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      type="number"
                      value={editStudent.progress}
                      onChange={(e) =>
                        setEditStudent({
                          ...editStudent,
                          progress: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleStudentEditSave(s.id)}
                      className="text-green-600"
                    >
                      <Save size={18} />
                    </button>
                    <button
                      onClick={() => setEditStudentId(null)}
                      className="text-gray-500"
                    >
                      <X size={18} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.mentor}</td>
                  <td className="p-2">{s.progress}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleStudentEdit(s)}
                      className="text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleStudentDelete(s.id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="font-semibold mt-4 mb-2">Mentors</h3>
      <div className="mb-4 flex">
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Name"
          value={newMentor.name}
          onChange={(e) => setNewMentor({ ...newMentor, name: e.target.value })}
        />
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Students Assigned"
          type="number"
          value={newMentor.students}
          onChange={(e) =>
            setNewMentor({ ...newMentor, students: e.target.value })
          }
        />
        <button
          className="bg-[#7B2FF2] text-white px-4 py-1 rounded"
          onClick={handleMentorAdd}
        >
          Add Mentor
        </button>
      </div>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Students Assigned</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((m) => (
            <tr key={m.id}>
              {editMentorId === m.id ? (
                <>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      value={editMentor.name}
                      onChange={(e) =>
                        setEditMentor({ ...editMentor, name: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      type="number"
                      value={editMentor.students}
                      onChange={(e) =>
                        setEditMentor({
                          ...editMentor,
                          students: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleMentorEditSave(m.id)}
                      className="text-green-600"
                    >
                      <Save size={18} />
                    </button>
                    <button
                      onClick={() => setEditMentorId(null)}
                      className="text-gray-500"
                    >
                      <X size={18} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2">{m.name}</td>
                  <td className="p-2">{m.students}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleMentorEdit(m)}
                      className="text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleMentorDelete(m.id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Modules Section ---
const ModulesSection = () => {
  const [modules, setModules] = useState([
    { id: 1, title: "Intro to React", type: "Video", status: "Published" },
    { id: 2, title: "Node.js Basics", type: "PDF", status: "Draft" },
  ]);
  const [newModule, setNewModule] = useState({
    title: "",
    type: "Video",
    status: "Draft",
  });
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ title: "", type: "", status: "" });

  const handleAdd = () => {
    if (!newModule.title) return;
    setModules([...modules, { ...newModule, id: Date.now() }]);
    setNewModule({ title: "", type: "Video", status: "Draft" });
  };

  const handleDelete = (id) => setModules(modules.filter((m) => m.id !== id));

  const handleEdit = (module) => {
    setEditId(module.id);
    setEditData({
      title: module.title,
      type: module.type,
      status: module.status,
    });
  };

  const handleEditSave = (id) => {
    setModules(modules.map((m) => (m.id === id ? { ...m, ...editData } : m)));
    setEditId(null);
    setEditData({ title: "", type: "", status: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
      <div className="mb-6 flex">
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Title"
          value={newModule.title}
          onChange={(e) =>
            setNewModule({ ...newModule, title: e.target.value })
          }
        />
        <select
          className="border px-2 py-1 mr-2"
          value={newModule.type}
          onChange={(e) => setNewModule({ ...newModule, type: e.target.value })}
        >
          <option value="Video">Video</option>
          <option value="PDF">PDF</option>
          <option value="Quiz">Quiz</option>
        </select>
        <select
          className="border px-2 py-1 mr-2"
          value={newModule.status}
          onChange={(e) =>
            setNewModule({ ...newModule, status: e.target.value })
          }
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>
        <button
          className="bg-[#7B2FF2] text-white px-4 py-1 rounded"
          onClick={handleAdd}
        >
          Add Module
        </button>
      </div>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((m) => (
            <tr key={m.id}>
              {editId === m.id ? (
                <>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      value={editData.title}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <select
                      className="border px-2 py-1"
                      value={editData.type}
                      onChange={(e) =>
                        setEditData({ ...editData, type: e.target.value })
                      }
                    >
                      <option value="Video">Video</option>
                      <option value="PDF">PDF</option>
                      <option value="Quiz">Quiz</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <select
                      className="border px-2 py-1"
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({ ...editData, status: e.target.value })
                      }
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                    </select>
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEditSave(m.id)}
                      className="text-green-600"
                    >
                      <Save size={18} />
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="text-gray-500"
                    >
                      <X size={18} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2">{m.title}</td>
                  <td className="p-2">{m.type}</td>
                  <td className="p-2">{m.status}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(m)}
                      className="text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Projects Section ---
const ProjectsSection = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "E-commerce Platform",
      status: "Active",
      deadline: "2025-08-01",
    },
    {
      id: 2,
      name: "Portfolio Website",
      status: "Review",
      deadline: "2025-07-20",
    },
  ]);
  const [newProject, setNewProject] = useState({
    name: "",
    deadline: "",
    status: "Active",
  });
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    deadline: "",
    status: "",
  });

  const handleAdd = () => {
    if (!newProject.name || !newProject.deadline) return;
    setProjects([...projects, { ...newProject, id: Date.now() }]);
    setNewProject({ name: "", deadline: "", status: "Active" });
  };

  const handleDelete = (id) => setProjects(projects.filter((p) => p.id !== id));

  const handleEdit = (project) => {
    setEditId(project.id);
    setEditData({
      name: project.name,
      deadline: project.deadline,
      status: project.status,
    });
  };

  const handleEditSave = (id) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, ...editData } : p)));
    setEditId(null);
    setEditData({ name: "", deadline: "", status: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="mb-6 flex">
        <input
          className="border px-2 py-1 mr-2"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
        />
        <input
          className="border px-2 py-1 mr-2"
          type="date"
          value={newProject.deadline}
          onChange={(e) =>
            setNewProject({ ...newProject, deadline: e.target.value })
          }
        />
        <select
          className="border px-2 py-1 mr-2"
          value={newProject.status}
          onChange={(e) =>
            setNewProject({ ...newProject, status: e.target.value })
          }
        >
          <option value="Active">Active</option>
          <option value="Review">Review</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          className="bg-[#7B2FF2] text-white px-4 py-1 rounded"
          onClick={handleAdd}
        >
          Add Project
        </button>
      </div>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Project</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Deadline</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              {editId === p.id ? (
                <>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2">
                    <select
                      className="border px-2 py-1"
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({ ...editData, status: e.target.value })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Review">Review</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <input
                      className="border px-2 py-1"
                      type="date"
                      value={editData.deadline}
                      onChange={(e) =>
                        setEditData({ ...editData, deadline: e.target.value })
                      }
                    />
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEditSave(p.id)}
                      className="text-green-600"
                    >
                      <Save size={18} />
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="text-gray-500"
                    >
                      <X size={18} />
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="p-2">{p.name}</td>
                  <td className="p-2">{p.status}</td>
                  <td className="p-2">{p.deadline}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Announcements Section ---
const AnnouncementsSection = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, message: "Welcome to the new semester!", date: "2025-07-01" },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [editId, setEditId] = useState(null);
  const [editMessage, setEditMessage] = useState("");

  const handleAdd = () => {
    if (!newAnnouncement) return;
    setAnnouncements([
      ...announcements,
      {
        id: Date.now(),
        message: newAnnouncement,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setNewAnnouncement("");
  };

  const handleDelete = (id) =>
    setAnnouncements(announcements.filter((a) => a.id !== id));

  const handleEdit = (a) => {
    setEditId(a.id);
    setEditMessage(a.message);
  };

  const handleEditSave = (id) => {
    setAnnouncements(
      announcements.map((a) =>
        a.id === id ? { ...a, message: editMessage } : a
      )
    );
    setEditId(null);
    setEditMessage("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Announcements</h2>
      <div className="mb-6 flex">
        <input
          className="border px-2 py-1 mr-2 flex-1"
          placeholder="Announcement message"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
        />
        <button
          className="bg-[#7B2FF2] text-white px-4 py-1 rounded"
          onClick={handleAdd}
        >
          Post
        </button>
      </div>
      <ul className="bg-white rounded shadow p-4">
        {announcements.map((a) => (
          <li
            key={a.id}
            className="border-b py-2 last:border-0 flex justify-between items-center gap-2"
          >
            {editId === a.id ? (
              <>
                <input
                  className="border px-2 py-1 flex-1"
                  value={editMessage}
                  onChange={(e) => setEditMessage(e.target.value)}
                />
                <button
                  onClick={() => handleEditSave(a.id)}
                  className="text-green-600 ml-2"
                >
                  <Save size={18} />
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="text-gray-500 ml-2"
                >
                  <X size={18} />
                </button>
              </>
            ) : (
              <>
                <span>{a.message}</span>
                <span className="text-sm text-gray-500">{a.date}</span>
                <button
                  onClick={() => handleEdit(a)}
                  className="text-blue-600 ml-2"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(a.id)}
                  className="text-red-600 ml-2"
                >
                  <Trash2 size={18} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Analytics Section ---
const AnalyticsSection = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Performance Analytics</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Module Completion</h3>
        <div className="mb-2 flex items-center justify-between">
          <span>Completed</span>
          <span>72%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-[#7B2FF2] h-4 rounded-full"
            style={{ width: "72%" }}
          ></div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span>In Progress</span>
          <span>18%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-orange-400 h-4 rounded-full"
            style={{ width: "18%" }}
          ></div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span>Not Started</span>
          <span>10%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gray-400 h-4 rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Student Engagement</h3>
        <div className="mb-2 flex items-center justify-between">
          <span>Active Students</span>
          <span>54</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-green-400 h-4 rounded-full"
            style={{ width: "67%" }}
          ></div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span>Inactive Students</span>
          <span>26</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-red-400 h-4 rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Project Progress</h3>
        <div className="mb-2 flex items-center justify-between">
          <span>Completed</span>
          <span>60%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span>Ongoing</span>
          <span>30%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-yellow-400 h-4 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <span>Not Started</span>
          <span>10%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gray-400 h-4 rounded-full"
            style={{ width: "10%" }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

// --- Settings Section ---
const SettingsSection = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Settings</h2>
    <form className="bg-white p-6 rounded shadow max-w-md">
      <div className="mb-4">
        <label className="block font-semibold mb-1">Profile Picture</label>
        <input type="file" className="border px-2 py-1 w-full" />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Name</label>
        <input
          type="text"
          className="border px-2 py-1 w-full"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          className="border px-2 py-1 w-full"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Password</label>
        <input
          type="password"
          className="border px-2 py-1 w-full"
          placeholder="New Password"
        />
      </div>
      <button
        type="submit"
        className="bg-[#7B2FF2] text-white px-4 py-2 rounded"
      >
        Update Profile
      </button>
    </form>
  </div>
);

export default Dashboard;
