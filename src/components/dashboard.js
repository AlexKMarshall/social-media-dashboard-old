import React from "react";
import TotalFollowers from "./total-followers";
import DarkModeSwitch from "./dark-mode-switch";
import SocialFollowersList from "./social-followers-list";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h1>Social Media Dashboard</h1>
        <TotalFollowers />
      </header>
      <DarkModeSwitch />
      <SocialFollowersList />
    </div>
  );
};

export default Dashboard;
