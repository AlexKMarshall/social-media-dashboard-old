import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faBrandName = {
  facebook: "facebook-square",
  youtube: "youtube",
};

const BrandLogo = ({ brand }) => {
  return <FontAwesomeIcon icon={["fab", faBrandName[brand]]} />;
};

export default BrandLogo;
