import React from 'react';

const Courses = () => {
  // Mock courses data - in a real app, this would come from an API
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn modern web development technologies',
      progress: 75,
      instructor: 'John Doe',
      startDate: '2024-02-01',
    },
    {
      id: 2,
      title: 'Data Science',
      description: 'Master data analysis and machine learning',
      progress: 60,
      instructor: 'Jane Smith',
      startDate: '2024-02-15',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Build iOS and Android applications',
      progress: 30,
      instructor: 'Mike Johnson',
      startDate: '2024-03-01',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Instructor: {course.instructor}
              </p>
              <p className="text-sm text-gray-500">
                Start Date: {course.startDate}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#7B2FF2] h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">{course.progress}% Complete</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 