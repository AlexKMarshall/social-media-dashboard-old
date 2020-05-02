import React, { useState } from "react";
import TotalFollowers from "./total-followers";
import DarkModeSwitch from "./dark-mode-switch";
import SocialFollowersList from "./social-followers-list";
import "./dashboard.css";
import dataStore from "./../assets/data/data-store";

const Dashboard = () => {
  const [followerData] = useState(dataStore);

  const totalFollowers = followerData
    .map((channel) => Number.parseInt(channel.followerCount))
    .reduce((acc, cur) => acc + cur);

  return (
    <div className="dashboard">
      <header>
        <h1 className="impact-text">Social Media Dashboard</h1>
        <TotalFollowers count={totalFollowers} />
      </header>
      {/* <DarkModeSwitch /> */}
      <SocialFollowersList followerData={followerData} />
    </div>
  );
};

export default Dashboard;
