import React, { useState } from "react";

import ChannelCard from "./channel-card";

const dataStore = [
  {
    id: 1,
    channel: "facebook",
    userName: "@nathanf",
    followerCount: 1987,
    dailyFollowerChange: 12,
  },
  {
    id: 2,
    channel: "youtube",
    userName: "Nathan F.",
    followerCount: "8239",
    followerDescription: "subscribers",
    dailyFollowerChange: -144,
  },
];

const SocialFollowersList = () => {
  const [followerData] = useState(dataStore);

  return (
    <ul>
      {followerData.map((channel) => {
        return (
          <li key={channel.id}>
            <ChannelCard
              channel={channel.channel}
              username={channel.userName}
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

export default SocialFollowersList;
