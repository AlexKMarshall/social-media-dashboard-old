import React from "react";
import BrandLogo from "./brand-logo";

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
        <div>{dailyFollowerChange > 0 ? "Up" : "Down"}</div>
        <div>{dailyFollowerChange}</div>
        Today
      </footer>
    </section>
  );
};

export default ChannelCard;
