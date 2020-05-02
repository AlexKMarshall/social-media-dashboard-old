import React, { useState } from "react";
import TotalFollowers from "./total-followers";
import DarkModeSwitch from "./dark-mode-switch";
import SocialFollowersList from "./social-followers-list";
import "./dashboard.css";
import dataStore from "./../assets/data/data-store";

const Dashboard = () => {
  const [followerData] = useState(dataStore);

  return (
    <div className="dashboard">
      <header>
        <h1 className="impact-text">Social Media Dashboard</h1>
        {/* <TotalFollowers /> */}
      </header>
      {/* <DarkModeSwitch /> */}
      <SocialFollowersList followerData={followerData} />
    </div>
  );
};

export default Dashboard;
