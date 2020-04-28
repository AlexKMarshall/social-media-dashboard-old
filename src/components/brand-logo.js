import React from "react";

const brandToFAMap = {
  facebook: "facebook-square",
  youtube: "youtube",
};

const BrandLogo = ({ brand }) => {
  const fontAwesomeClass = `fab fa-${brandToFAMap[brand]}`;

  return <i className={fontAwesomeClass}></i>;
};

export default BrandLogo;
