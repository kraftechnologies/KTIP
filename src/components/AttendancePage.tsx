import React, { useState } from "react";
import AttendanceTable from "./AttendanceTable";
import AttendanceChart from "./AttendanceChart";

// Sample data - replace with API calls when backend is ready
const sampleCourses = [
  { id: 1, name: "Web Development" },
  { id: 2, name: "Mobile Development" },
  { id: 3, name: "Data Science" },
  { id: 4, name: "Cloud Computing" }
];

const sampleAttendanceData = {
  1: [ // Web Development
    { id: 1, name: "John Doe", attendance: 85, sessions: [1, 1, 0, 1, 1, 1, 0, 1] },
    { id: 2, name: "Jane Smith", attendance: 92, sessions: [1, 1, 1, 1, 0, 1, 1, 1] },
    { id: 3, name: "Mike Johnson", attendance: 78, sessions: [1, 0, 1, 1, 0, 1, 1, 0] },
    { id: 4, name: "Sarah Williams", attendance: 95, sessions: [1, 1, 1, 1, 1, 0, 1, 1] }
  ],
  2: [ // Mobile Development
    { id: 5, name: "Alex Brown", attendance: 88, sessions: [1, 1, 1, 0, 1, 1, 0, 1] },
    { id: 6, name: "Emily Davis", attendance: 75, sessions: [1, 0, 1, 0, 1, 1, 0, 1] },
    { id: 7, name: "Chris Wilson", attendance: 90, sessions: [1, 1, 1, 1, 0, 1, 1, 0] }
  ],
  3: [ // Data Science
    { id: 8, name: "Taylor Moore", attendance: 92, sessions: [1, 1, 1, 1, 0, 1, 1, 1] },
    { id: 9, name: "Jordan Lee", attendance: 85, sessions: [1, 1, 0, 1, 1, 1, 0, 1] },
    { id: 10, name: "Casey Martin", attendance: 79, sessions: [1, 0, 1, 1, 0, 1, 1, 0] }
  ],
  4: [ // Cloud Computing
    { id: 11, name: "Riley Thompson", attendance: 94, sessions: [1, 1, 1, 1, 1, 0, 1, 1] },
    { id: 12, name: "Avery Garcia", attendance: 82, sessions: [1, 1, 0, 1, 1, 0, 1, 1] }
  ]
};

const AttendancePage: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<number>(1);
  
  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(Number(e.target.value));
  };

  const currentAttendanceData = sampleAttendanceData[selectedCourse as keyof typeof sampleAttendanceData] || [];
  
  // Calculate average attendance for the selected course
  const averageAttendance = currentAttendanceData.length > 0
    ? currentAttendanceData.reduce((sum, student) => sum + student.attendance, 0) / currentAttendanceData.length
    : 0;

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-white">Student Attendance</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Track and analyze student attendance across different courses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <label htmlFor="courseSelect" className="block text-white font-medium mb-2">
                Select Course:
              </label>
              <select
                id="courseSelect"
                value={selectedCourse}
                onChange={handleCourseChange}
                className="px-4 py-2 rounded-md bg-neutral-700 text-white border border-neutral-500 focus:border-[#18cb96] focus:outline-none"
              >
                {sampleCourses.map(course => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-neutral-800 p-4 rounded-md border border-neutral-500">
              <p className="text-white">
                <span className="font-medium">Average Attendance:</span>{" "}
                <span className="text-[#18cb96] font-bold">{averageAttendance.toFixed(2)}%</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-500 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-white">Attendance Chart</h3>
              <AttendanceChart attendanceData={currentAttendanceData} />
            </div>
            
            <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-500 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-white">Attendance Details</h3>
              <AttendanceTable attendanceData={currentAttendanceData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendancePage;