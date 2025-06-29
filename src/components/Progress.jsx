import React from 'react';

const Progress = () => {
  // Mock progress data - in a real app, this would come from an API
  const progressData = {
    overallProgress: 75,
    courses: [
      {
        name: 'Web Development',
        progress: 75,
        completedModules: 6,
        totalModules: 8,
      },
      {
        name: 'Data Science',
        progress: 60,
        completedModules: 3,
        totalModules: 5,
      },
      {
        name: 'Mobile App Development',
        progress: 30,
        completedModules: 1,
        totalModules: 4,
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Learning Progress</h2>
      
      {/* Overall Progress */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Overall Progress</h3>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-[#7B2FF2] h-4 rounded-full"
            style={{ width: `${progressData.overallProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {progressData.overallProgress}% of curriculum completed
        </p>
      </div>

      {/* Course-wise Progress */}
      <div className="space-y-4">
        {progressData.courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <span className="text-sm text-gray-500">
                {course.completedModules}/{course.totalModules} modules
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#7B2FF2] h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {course.progress}% Complete
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress; 