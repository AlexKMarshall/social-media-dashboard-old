import React from "react";
import iconFacebook from "../assets/icons/icon-facebook.svg";
import iconYoutube from "../assets/icons/icon-youtube.svg";
import iconTwitter from "../assets/icons/icon-twitter.svg";
import iconInstagram from "../assets/icons/icon-instagram.svg";

const brandIconMap = {
  facebook: iconFacebook,
  youtube: iconYoutube,
  twitter: iconTwitter,
  instagram: iconInstagram,
};

const BrandLogo = ({ brand }) => {
  return <img src={brandIconMap[brand]} alt="" />;
};

export default BrandLogo;
