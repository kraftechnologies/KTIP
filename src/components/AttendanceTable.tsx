import React from "react";

interface Subject {
  id: number;
  name: string;
  attendance: number;
  sessions: number[];
}

interface AttendanceTableProps {
  attendanceData: Subject[];
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({ attendanceData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Subject
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Attendance %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Sessions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {attendanceData.length > 0 ? (
            attendanceData.map((subject) => (
              <tr key={subject.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {subject.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                      <div
                        className={`h-2.5 rounded-full ${getProgressColor(subject.attendance)}`}
                        style={{ width: `${subject.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{subject.attendance}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex space-x-1">
                    {subject.sessions.map((session, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${
                          session ? "bg-green-500" : "bg-red-500"
                        }`}
                        title={`Session ${index + 1}: ${
                          session ? "Present" : "Absent"
                        }`}
                      ></div>
                    ))}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="px-4 py-3 whitespace-nowrap text-sm text-center text-gray-700 dark:text-gray-300"
              >
                No attendance data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Function to determine progress bar color based on attendance percentage
const getProgressColor = (attendance: number): string => {
  if (attendance >= 90) {
    return "bg-green-500"; // Excellent attendance
  } else if (attendance >= 75) {
    return "bg-blue-500"; // Good attendance
  } else if (attendance >= 60) {
    return "bg-yellow-500"; // Average attendance
  } else {
    return "bg-red-500"; // Poor attendance
  }
};

export default AttendanceTable;