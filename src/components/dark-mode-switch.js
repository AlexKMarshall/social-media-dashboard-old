import React from "react";
import "./toggle.css";

const DarkModeSwitch = ({ toggle }) => {
  return (
    <div className="toggle-label">
      <input
        type="checkbox"
        name="theme-toggle"
        id="theme-toggle"
        onClick={toggle}
      />
      <div className="sliding-groove"></div>
      <label className="toggle-label" htmlFor="theme-toggle"></label>
    </div>
  );
};

export default DarkModeSwitch;
