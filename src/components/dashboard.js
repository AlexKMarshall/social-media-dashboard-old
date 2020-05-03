import React, { useState } from "react";
import TotalFollowers from "./total-followers";
import DarkModeSwitch from "./dark-mode-switch";
import HeadlineList from "./headline-list";
import { headlineDataStore } from "./../assets/data/data-store";
import OverviewList from "./overview-list";

const Dashboard = () => {
  const [headlineData] = useState(headlineDataStore);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  const totalFollowers = headlineData
    .map((channel) => Number.parseInt(channel.followerCount))
    .reduce((acc, cur) => acc + cur);

  return (
    <div className={`dashboard ${theme}-theme`}>
      <header>
        <div className="heading">
          <h1 className="impact-text">Social Media Dashboard</h1>
          <TotalFollowers count={totalFollowers} />
        </div>
        <DarkModeSwitch checked={theme === "dark"} toggle={toggleTheme} />
      </header>

      <section id="headlines">
        <HeadlineList followerData={headlineData} />
      </section>
      <section id="overview">
        <header>
          <h2>Overview - Today</h2>
        </header>
        <OverviewList />
      </section>
    </div>
  );
};

export default Dashboard;
