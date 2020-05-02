import React from "react";

import ChannelCard from "./channel-card";

const SocialFollowersList = ({ followerData }) => {
  //const [followerData] = useState(dataStore);

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
