import React from "react";
import iconFacebook from "../assets/icons/icon-facebook.svg";
import iconYoutube from "../assets/icons/icon-youtube.svg";

const brandIconMap = {
  facebook: iconFacebook,
  youtube: iconYoutube,
};

const BrandLogo = ({ brand }) => {
  return <img src={brandIconMap[brand]} alt="" className="svg" />;
};

export default BrandLogo;
