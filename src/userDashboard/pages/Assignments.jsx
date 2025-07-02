import React, { useState } from "react";

const mockAssignments = [
  {
    id: 1,
    title: "React Basics",
    deadline: "2025-07-05",
    status: "Not Started",
    feedback: "",
    submission: null,
    comment: "",
  },
  {
    id: 2,
    title: "Node.js API Project",
    deadline: "2025-07-10",
    status: "Submitted",
    feedback: "Good structure! Improve error handling.",
    submission: "node_project.zip",
    comment: "",
  },
  {
    id: 3,
    title: "CSS Grid Layout",
    deadline: "2025-07-01",
    status: "Reviewed",
    feedback: "Excellent layout and responsiveness!",
    submission: "grid_assignment.pdf",
    comment: "",
  },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(mockAssignments);

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = assignments.map((a) =>
      a.id === id
        ? {
            ...a,
            status: "Submitted",
            submission: file.name,
            feedback: "Pending review...",
          }
        : a
    );
    setAssignments(updated);
  };

  const handleRemoveSubmission = (id) => {
    const updated = assignments.map((a) =>
      a.id === id ? { ...a, submission: null, status: "Not Started", feedback: "" } : a
    );
    setAssignments(updated);
  };

  const handleCommentChange = (e, id) => {
    const updated = assignments.map((a) =>
      a.id === id ? { ...a, comment: e.target.value } : a
    );
    setAssignments(updated);
  };

  const handleSubmitComment = (id) => {
    const current = assignments.find((a) => a.id === id);
    if (current.comment.trim()) {
      alert(`Comment submitted for "${current.title}": ${current.comment}`);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">📄 Assignments</h1>

      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white p-5 rounded-xl shadow border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold text-purple-700">
                  {assignment.title}
                </h2>
                <p className="text-sm text-gray-500">Deadline: {assignment.deadline}</p>
                <p
                  className={`mt-1 text-sm font-medium ${
                    assignment.status === "Not Started"
                      ? "text-red-500"
                      : assignment.status === "Submitted"
                      ? "text-yellow-500"
                      : "text-green-600"
                  }`}
                >
                  Status: {assignment.status}
                </p>
              </div>

              <div className="text-right">
                {assignment.submission ? (
                  <>
                    <p className="text-sm text-gray-600 mb-2">📎 {assignment.submission}</p>
                    {assignment.status !== "Reviewed" && (
                      <div className="flex gap-2 justify-end">
                        <label className="text-sm text-blue-600 cursor-pointer hover:underline">
                          Modify
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(e, assignment.id)}
                          />
                        </label>
                        <button
                          onClick={() => handleRemoveSubmission(assignment.id)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <label className="text-sm text-blue-600 cursor-pointer hover:underline">
                    Upload File
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, assignment.id)}
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Feedback only if Reviewed */}
            {assignment.status === "Reviewed" && assignment.feedback && (
              <div className="mt-4 p-3 bg-gray-100 rounded-md text-sm text-gray-700 border-l-4 border-green-500">
                <strong>Mentor Feedback:</strong> {assignment.feedback}
              </div>
            )}

            {/* Comment Section */}
            <div className="mt-4">
              <label className="text-sm text-gray-700 font-medium">Add Comment:</label>
              <textarea
                value={assignment.comment}
                onChange={(e) => handleCommentChange(e, assignment.id)}
                placeholder="Write a note to your mentor..."
                className="w-full border border-gray-300 p-2 mt-1 rounded-md text-sm"
                rows={2}
              />
              <button
                onClick={() => handleSubmitComment(assignment.id)}
                className="mt-2 bg-purple-600 text-white text-sm px-4 py-1 rounded hover:bg-purple-700"
              >
                Submit Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
