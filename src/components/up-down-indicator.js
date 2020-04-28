import React from "react";

const faIconMap = {
  up: "fas fa-caret-up",
  down: "fas fa-caret-down",
};

const UpDownIndicator = ({ change }) => {
  const direction = change > 0 ? "up" : "down";
  const iconClass = faIconMap[direction];
  return <i className={iconClass}></i>;
};

export default UpDownIndicator;
