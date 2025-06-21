import React from "react";
import { useAuth } from "../context/AuthContext";
import AdminAttendance from "../admin/components/AdminAttendance";
import UserAttendance from "./UserAttendance";



const AttendancePage = () => {
  const { isAdmin } = useAuth();

  // Route to appropriate attendance component based on user role
  if (isAdmin) {
    return <AdminAttendance />;
  } else {
    return <UserAttendance />;
  }
};

export default AttendancePage;