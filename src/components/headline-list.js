import React from "react";

import HeadlineCard from "./headline-card";

const HeadlineList = ({ followerData }) => {
  return (
    <ul>
      {followerData.map((channel) => {
        return (
          <li key={channel.id}>
            <HeadlineCard
              channel={channel.channel}
              userName={channel.userName}
              followerCount={channel.followerCount}
              followerDescription={channel.followerDescription}
              dailyFollowerChange={channel.dailyFollowerChange}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default HeadlineList;
