import React, { useState } from "react";

const TotalFollowers = () => {
  const [followerTotal] = useState(0);

  const formatNumber = (count) => count.toLocaleString(undefined);

  return <div>Total Followers: {formatNumber(followerTotal)}</div>;
};

export default TotalFollowers;
