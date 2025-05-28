import React from "react";
import AttendanceTable from "./AttendanceTable";
import AttendanceChart from "./AttendanceChart";

// Sample data for a student's enrolled courses
const sampleStudentData = {
  name: "John Doe",
  email: "john.doe@example.com",
  enrolledCourses: [
    { 
      id: 1, 
      name: "Web Development", 
      attendance: 85,
      subjects: [
        { id: 101, name: "HTML & CSS", attendance: 90, sessions: [1, 1, 1, 1, 0, 1, 1, 1] },
        { id: 102, name: "JavaScript", attendance: 80, sessions: [1, 1, 0, 1, 1, 0, 1, 1] },
        { id: 103, name: "React", attendance: 85, sessions: [1, 1, 1, 0, 1, 1, 1, 0] }
      ]
    },
    { 
      id: 2, 
      name: "Data Science", 
      attendance: 78,
      subjects: [
        { id: 201, name: "Python Basics", attendance: 75, sessions: [1, 0, 1, 1, 0, 1, 1, 0] },
        { id: 202, name: "Data Analysis", attendance: 80, sessions: [1, 1, 0, 1, 1, 0, 1, 1] },
        { id: 203, name: "Machine Learning", attendance: 78, sessions: [1, 1, 0, 1, 0, 1, 1, 1] }
      ]
    }
  ]
};

const AttendancePage: React.FC = () => {
  // Get overall attendance across all courses
  const overallAttendance = sampleStudentData.enrolledCourses.reduce(
    (sum, course) => sum + course.attendance, 0
  ) / sampleStudentData.enrolledCourses.length;
  
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3 text-white">My Attendance</h2>
          <div className="w-20 h-1 bg-[#18cb96] mx-auto mb-6"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Track your attendance across different courses and subjects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <div className="bg-neutral-800 p-4 rounded-md border border-neutral-500">
              <p className="text-white">
                <span className="font-medium">Student:</span>{" "}
                <span className="text-[#18cb96] font-bold">{sampleStudentData.name}</span>
              </p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-md border border-neutral-500">
              <p className="text-white">
                <span className="font-medium">Overall Attendance:</span>{" "}
                <span className="text-[#18cb96] font-bold">{overallAttendance.toFixed(2)}%</span>
              </p>
            </div>
          </div>

          {sampleStudentData.enrolledCourses.map((course) => (
            <div key={course.id} className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-white">{course.name}</h3>
                <div className="bg-neutral-800 px-4 py-2 rounded-md border border-neutral-500">
                  <p className="text-white">
                    <span className="font-medium">Course Attendance:</span>{" "}
                    <span className="text-[#18cb96] font-bold">{course.attendance}%</span>
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-500 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-white">Attendance Chart</h3>
                  <AttendanceChart attendanceData={course.subjects} />
                </div>
                
                <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-500 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-white">Subject Details</h3>
                  <AttendanceTable attendanceData={course.subjects} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttendancePage;