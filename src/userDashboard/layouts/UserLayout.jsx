// src/userDashboard/layouts/UserLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import UserSidebar from "../components/UserSidebar";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar />

      <div className="flex-1 flex flex-col">
        <UserHeader />
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
