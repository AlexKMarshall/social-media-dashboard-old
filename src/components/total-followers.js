import React, { useState } from "react";

const TotalFollowers = () => {
  const [followerCount] = useState(0);

  const formatCount = (count) => count.toLocaleString(undefined);

  return <div>Total Followers: {formatCount(followerCount)}</div>;
};

export default TotalFollowers;
