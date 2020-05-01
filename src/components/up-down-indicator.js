import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faIconName = {
  up: "caret-up",
  down: "caret-down",
};

const UpDownIndicator = ({ change }) => {
  const direction = change > 0 ? "up" : "down";

  return <FontAwesomeIcon icon={faIconName[direction]} />;
};

export default UpDownIndicator;
