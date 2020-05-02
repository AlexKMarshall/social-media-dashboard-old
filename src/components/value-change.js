import React from "react";
import UpDownIndicator from "./up-down-indicator";

const ValueChange = ({ change, label, className }) => {
  const direction = change > 0 ? "up" : "down";

  // TODO return a string to handle spacing between label and value properly
  return (
    <div className={`${direction} ${className}`}>
      <UpDownIndicator direction={direction} />
      <div>{Math.abs(change)}</div>
      <p>{label}</p>
    </div>
  );
};

export default ValueChange;
