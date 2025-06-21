import React, { useState } from "react";

// Sample admin meeting attendance data
const adminMeetingData = {
  scheduledMeetings: [
    { id: 1, date: "2024-01-15", title: "Weekly Team Meeting", status: "present", time: "10:00 AM" },
    { id: 2, date: "2024-01-22", title: "Course Review Meeting", status: "present", time: "2:00 PM" },
    { id: 3, date: "2024-01-29", title: "Student Progress Review", status: "absent", time: "11:00 AM" },
    { id: 4, date: "2024-02-05", title: "Curriculum Planning", status: "present", time: "3:00 PM" },
    { id: 5, date: "2024-02-12", title: "Faculty Meeting", status: "absent", time: "9:00 AM" },
    { id: 6, date: "2024-02-19", title: "Assessment Review", status: "present", time: "1:00 PM" },
    { id: 7, date: "2024-02-26", title: "Monthly Review", status: "present", time: "4:00 PM" },
  ]
};

const AdminMyAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState("February");
  
  const months = ["January", "February", "March", "April"];
  
  // Filter meetings by selected month
  const filteredMeetings = adminMeetingData.scheduledMeetings.filter(meeting => {
    const meetingDate = new Date(meeting.date);
    const monthName = meetingDate.toLocaleString('default', { month: 'long' });
    return monthName === selectedMonth;
  });

  // Calculate attendance stats
  const totalMeetings = filteredMeetings.length;
  const presentCount = filteredMeetings.filter(m => m.status === "present").length;
  const attendanceRate = totalMeetings > 0 ? ((presentCount / totalMeetings) * 100).toFixed(1) : 0;

  const getStatusColor = (status) => {
    return status === "present" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const getProgressColor = (rate) => {
    return rate >= 75 ? "bg-green-500" : "bg-red-500";
  };

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Attendance</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Attendance Rate</h3>
          <div className="text-3xl font-bold text-purple-600">{attendanceRate}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className={`h-2 rounded-full ${getProgressColor(attendanceRate)}`}
              style={{ width: `${attendanceRate}%` }}
            ></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Present</h3>
          <div className="text-3xl font-bold text-green-600">{presentCount}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Total Meetings</h3>
          <div className="text-3xl font-bold text-blue-600">{totalMeetings}</div>
        </div>
      </div>

      {/* Month Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Meeting Attendance</h3>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>

        {/* Meetings List */}
        <div className="space-y-4">
          {filteredMeetings.length > 0 ? (
            filteredMeetings.map(meeting => (
              <div key={meeting.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{meeting.title}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(meeting.status)}`}>
                  {meeting.status === "present" ? "Present" : "Absent"}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">No meetings scheduled for {selectedMonth}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMyAttendance;