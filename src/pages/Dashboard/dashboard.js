import React from "react";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex page-container">
      <Sidebar />
      <main className="flex-grow">
        <div className="flex justify">
          <p>123</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;