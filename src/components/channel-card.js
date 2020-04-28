import React from "react";
import SocialLogo from "./social-logo";

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
        <SocialLogo brand={channel} />
        <div>{channel} Logo</div>
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
