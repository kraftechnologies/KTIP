import React from "react";

const AttendanceTable = ({ attendanceData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-[#EAECF0]">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
              Subject
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
              Attendance %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
              Sessions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-[#EAECF0]">
          {attendanceData.length > 0 ? (
            attendanceData.map((subject) => (
              <tr key={subject.id} className="hover:bg-[#F9FAFB]">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#344054]">
                  {subject.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-[#F2F4F7] rounded-full h-2.5 mr-2">
                      <div
                        className={`h-2.5 rounded-full ${getProgressColor(subject.attendance)}`}
                        style={{ width: `${subject.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-[#344054]">{subject.attendance}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-[#344054]">
                  <div className="flex space-x-1">
                    {subject.sessions.map((session, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${
                          session ? "bg-[#12B76A]" : "bg-[#F04438]"
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
                className="px-4 py-3 whitespace-nowrap text-sm text-center text-[#667085]"
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
const getProgressColor = (attendance) => {
  if (attendance >= 90) {
    return "bg-[#12B76A]"; // Green - Excellent attendance
  } else if (attendance >= 75) {
    return "bg-[#7F56D9]"; // Purple - Good attendance
  } else if (attendance >= 60) {
    return "bg-[#F79009]"; // Yellow/Orange - Average attendance
  } else {
    return "bg-[#F04438]"; // Red - Poor attendance
  }
};

export default AttendanceTable;