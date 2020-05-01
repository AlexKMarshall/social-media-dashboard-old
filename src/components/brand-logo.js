import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getBrandColor from "../utils/brand-color";

const faBrandName = {
  facebook: "facebook-square",
  youtube: "youtube",
};

const BrandLogo = ({ size = "2x", brand }) => {
  return (
    <FontAwesomeIcon
      style={{ color: getBrandColor(brand) }}
      size={size}
      icon={["fab", faBrandName[brand]]}
    />
  );
};

export default BrandLogo;
