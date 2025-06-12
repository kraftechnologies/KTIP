import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AttendancePage from './components/AttendancePage'
import AdminAttendancePage from './components/AdminAttendancePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Change between AttendancePage and AdminAttendancePage as needed */}
    <AdminAttendancePage />
  </React.StrictMode>,
)