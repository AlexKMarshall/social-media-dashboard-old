import React from "react";
import UpDownIndicator from "./up-down-indicator";

const ValueChange = ({ change, label }) => {
  const direction = change > 0 ? "up" : "down";

  // TODO return a string to handle spacing between label and value properly
  return (
    <div className={`daily-follower-change ${direction}`}>
      <UpDownIndicator direction={direction} />
      <div>{Math.abs(change)}</div>
      <p>{label}</p>
    </div>
  );
};

export default ValueChange;
