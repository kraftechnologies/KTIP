import React from "react";

interface Student {
  id: number;
  name: string;
  attendance: number;
  sessions: number[];
}

interface AttendanceTableProps {
  attendanceData: Student[];
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({ attendanceData }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-neutral-700">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Attendance %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Sessions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-700">
          {attendanceData.length > 0 ? (
            attendanceData.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                  {student.name}
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-neutral-600 rounded-full h-2.5 mr-2">
                      <div
                        className="bg-[#18cb96] h-2.5 rounded-full"
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-white">{student.attendance}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-white">
                  <div className="flex space-x-1">
                    {student.sessions.map((session, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full ${
                          session ? "bg-[#18cb96]" : "bg-red-500"
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
                className="px-4 py-3 whitespace-nowrap text-sm text-center text-white"
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

export default AttendanceTable;