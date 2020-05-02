import React from "react";
import BrandLogo from "./brand-logo";
import "./card.css";
// import getBrandColor from "../utils/brand-color";
import ValueChange from "./value-change";
import formatBigNumber from "../utils/format-big-number";

// style={{ borderTopColor: getBrandColor(channel) }}

const HeadlineCard = ({
  channel,
  userName,
  followerCount,
  followerDescription,
  dailyFollowerChange,
}) => {
  return (
    <section className="card headline">
      <header>
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

export default HeadlineCard;