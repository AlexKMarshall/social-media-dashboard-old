import React from "react";
import UpDownIndicator from "./up-down-indicator";

const addLeadingSpace = (text) => ` ${text}`;

const ValueChange = ({ change, label, className }) => {
  const direction = change > 0 ? "up" : "down";
  const absoluteChange = Math.abs(change);
  const separatedLabel = label === "%" ? label : addLeadingSpace(label);

  return (
    <div className={`value-change ${direction} ${className}`}>
      <UpDownIndicator direction={direction} />
      <p>{`${absoluteChange}${separatedLabel}`}</p>
    </div>
  );
};

export default ValueChange;
