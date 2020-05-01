import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faBrandName = {
  facebook: "facebook-square",
  youtube: "youtube",
};

const BrandLogo = ({ className, brand }) => {
  return <FontAwesomeIcon size="2x" icon={["fab", faBrandName[brand]]} />;
};

export default BrandLogo;
