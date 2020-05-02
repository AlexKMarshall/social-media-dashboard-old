import React from "react";
import BrandLogo from "./brand-logo";
import "./card.css";
import getBrandColor from "../utils/brand-color";
import ValueChange from "./value-change";

const ChannelCard = ({
  channel,
  userName,
  followerCount,
  followerDescription,
  dailyFollowerChange,
}) => {
  return (
    <section className="card headline">
      <header style={{ borderTopColor: getBrandColor(channel) }}>
        <BrandLogo brand={channel} />
        <div>{userName}</div>
      </header>
      <div className="big-number impact-text">
        {formatBigNumber(followerCount)}
      </div>
      <div className="stat-label">{followerDescription || "followers"}</div>
      <footer>
        <ValueChange
          change={dailyFollowerChange}
          label="Today"
          className="daily-follower-change"
        />
      </footer>
    </section>
  );
};

const formatBigNumber = (number) => {
  const breakPointK = 10000;
  if (number < breakPointK) return number;

  const thousands = Math.floor(number / 1000);
  return `${thousands}k`;
};

export default ChannelCard;
