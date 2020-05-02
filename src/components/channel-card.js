import React from "react";
import BrandLogo from "./brand-logo";
import "./card.css";
import getBrandColor from "../utils/brand-color";
import DailyFollowerChange from "./daily-follower-change";

const ChannelCard = ({
  channel,
  userName,
  followerCount,
  followerDescription,
  dailyFollowerChange,
}) => {
  return (
    <section className="card">
      <header style={{ borderTopColor: getBrandColor(channel) }}>
        <BrandLogo brand={channel} />
        <div>{userName}</div>
      </header>
      <div className="big-number impact-text">{followerCount}</div>
      <div className="stat-label">{followerDescription || "followers"}</div>
      <footer>
        <DailyFollowerChange change={dailyFollowerChange} />
      </footer>
    </section>
  );
};

export default ChannelCard;
