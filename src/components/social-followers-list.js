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
    channel: "twitter",
    userName: "@nathanf",
    followerCount: 1044,
    dailyFollowerChange: 99,
  },
  {
    id: 3,
    channel: "instagram",
    userName: "@realnathanf",
    followerCount: 11059,
    dailyFollowerChange: 1099,
  },
  {
    id: 4,
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

export default SocialFollowersList;
