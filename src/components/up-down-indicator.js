import React from "react";
import iconDown from "./../assets/icons/icon-down.svg";
import iconUp from "./../assets/icons/icon-up.svg";

const UpDownIndicator = ({ direction }) => {
  const icon = direction === "up" ? iconUp : iconDown;
  return <img src={icon} alt={`${direction} arrow`} className="svg" />;
};

export default UpDownIndicator;
