import React from 'react';

const DashboardCard = ({ title, content }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default DashboardCard;