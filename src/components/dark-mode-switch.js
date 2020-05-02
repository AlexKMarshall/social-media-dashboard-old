import React from "react";

const DarkModeSwitch = ({ toggle }) => {
  return (
    <div>
      <label for="dark-mode-toggle">Dark Mode</label>
      <input
        type="checkbox"
        name="dark-mode-toggle"
        id="dark-mode-toggle"
        onClick={toggle}
      />
    </div>
  );
};

export default DarkModeSwitch;
