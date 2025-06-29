import React from 'react';

const Assignments = () => {
  // Mock assignments data - in a real app, this would come from an API
  const assignments = [
    {
      id: 1,
      title: 'React Project',
      course: 'Web Development',
      dueDate: '2024-03-15',
      status: 'Pending',
      description: 'Build a full-stack React application with authentication',
    },
    {
      id: 2,
      title: 'Data Analysis Report',
      course: 'Data Science',
      dueDate: '2024-03-20',
      status: 'Pending',
      description: 'Analyze and visualize a dataset using Python',
    },
    {
      id: 3,
      title: 'Mobile App UI Design',
      course: 'Mobile App Development',
      dueDate: '2024-03-25',
      status: 'In Progress',
      description: 'Design and implement a mobile app interface',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{assignment.title}</h3>
                <p className="text-gray-600 mb-2">{assignment.description}</p>
                <p className="text-sm text-gray-500">
                  Course: {assignment.course}
                </p>
                <p className="text-sm text-gray-500">
                  Due: {assignment.dueDate}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  assignment.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {assignment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments; 