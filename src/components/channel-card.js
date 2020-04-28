import React from "react";
import BrandLogo from "./brand-logo";
import UpDownIndicator from "./up-down-indicator";

const ChannelCard = ({
  channel,
  userName,
  followerCount,
  followerDescription,
  dailyFollowerChange,
}) => {
  return (
    <section>
      <header>
        <BrandLogo brand={channel} />
        <div>{userName}</div>
      </header>
      <div>{followerCount}</div>
      <div>{followerDescription || "followers"}</div>
      <footer>
        <UpDownIndicator change={dailyFollowerChange} />
        <div>{Math.abs(dailyFollowerChange)}</div>
        Today
      </footer>
    </section>
  );
};

export default ChannelCard;
