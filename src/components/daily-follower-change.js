import React from "react";
import UpDownIndicator from "./up-down-indicator";

const DailyFollowerChange = ({ change }) => {
  const direction = change > 0 ? "up" : "down";

  return (
    <div className={`daily-follower-change ${direction}`}>
      <UpDownIndicator direction={direction} />
      <div>{Math.abs(change)}</div>
      <p>Today</p>
    </div>
  );
};

export default DailyFollowerChange;
