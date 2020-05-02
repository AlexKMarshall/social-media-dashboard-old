import React from "react";

const TotalFollowers = ({ count }) => {
  const formatNumber = (count) => count.toLocaleString(undefined);

  return <div>Total Followers: {formatNumber(count)}</div>;
};

export default TotalFollowers;
