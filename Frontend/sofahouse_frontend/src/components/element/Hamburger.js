import React from "react";
import { slide as Menu } from "react-burger-menu";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/components/hamburger.css";

export default function Hamburger() {
  return (
    // Pass on our props
    <Menu id="hp-hamburger" right>
      <div className="menu-item hamburger-text hamburger-active" onClick={() => linkPath("/")}>
        <h1 className="bg-text">Home</h1>
      </div>

      <div className="menu-item hamburger-text" onClick={() => linkPath("/portfolio")}>
        <h1 className="bg-text">Portfolio</h1>
      </div>

      <div className="menu-item hamburger-text" onClick={() => linkPath("/service")}>
        <h1 className="bg-text">Service</h1>
      </div>

      <div className="menu-item hamburger-text hamburger-last" onClick={() => linkPath("/contact")}>
        <h1 className="bg-text">Contact</h1>
      </div>
    </Menu>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
