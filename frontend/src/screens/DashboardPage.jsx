import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Welcome to your Dashboard</h1>
      <p>This is your personal dashboard. You can add more content here.</p>
    </div>
  );
};

export default DashboardPage;
