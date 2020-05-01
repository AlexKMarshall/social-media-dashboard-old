import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const faBrandName = {
  facebook: "facebook-square",
  youtube: "youtube",
};

const brandColors = {
  facebook: "hsl(195, 100%, 50%)",
  youtube: "hsl(348, 97%, 39%)",
};

const BrandLogo = ({ size = "2x", brand }) => {
  return (
    <FontAwesomeIcon
      style={{ color: brandColors[brand] }}
      size={size}
      icon={["fab", faBrandName[brand]]}
    />
  );
};

export default BrandLogo;
