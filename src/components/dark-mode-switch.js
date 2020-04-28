import React from "react";

const DarkModeSwitch = () => {
  return (
    <div>
      <label for="dark-mode-toggle">Dark Mode</label>
      <input type="checkbox" name="dark-mode-toggle" id="dark-mode-toggle" />
    </div>
  );
};

export default DarkModeSwitch;
