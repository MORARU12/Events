import React from "react";

const Switcher = ({ isToggled, onToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default Switcher;
