import React, { useState } from "react";

import ChannelCard from "./channel-card";

const SocialFollowersList = () => {
  const [channelIds] = useState([0, 1, 2]);

  return (
    <ul>
      {channelIds.map((channelId) => {
        return (
          <li key="channelId">
            <ChannelCard id="channelId" />
          </li>
        );
      })}
    </ul>
  );
};

export default SocialFollowersList;
