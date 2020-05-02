import React from "react";
import BrandLogo from "./brand-logo";
import "./card.css";
import ValueChange from "./value-change";
import formatBigNumber from "../utils/format-big-number";
import RoundedCorner from "./rounded-corner";

const HeadlineCard = ({
  channel,
  userName,
  followerCount,
  followerDescription,
  dailyFollowerChange,
}) => {
  return (
    <RoundedCorner>
      <section className={`card headline ${channel}`}>
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
    </RoundedCorner>
  );
};

export default HeadlineCard;
