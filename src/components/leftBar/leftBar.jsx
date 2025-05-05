import "./leftBar.css";
import React from "react";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="logo" className="logo" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/home.svg" alt="icon" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/create.svg" alt="icon" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/updates.svg" alt="icon" />
        </a>
        <a href="/" className="menuIcon">
          <img src="/general/messages.svg" alt="icon" />
        </a>
      </div>
      <a href="/" className="menuIcon">
        <img src="/general/settings.svg" alt="icon" />
      </a>
    </div>
  );
};

export default LeftBar;
