import React from "react";
import "./toggle.css";

const DarkModeSwitch = ({ toggle }) => {
  return (
    <label className="toggle-label" htmlFor="theme-toggle">
      <p className="label-text">Dark Mode</p>
      <input
        type="checkbox"
        name="theme-toggle"
        id="theme-toggle"
        onClick={toggle}
      />
      <div className="sliding-groove"></div>
      {/* <label className="toggle-label" ></label> */}
    </label>
  );
};

export default DarkModeSwitch;
