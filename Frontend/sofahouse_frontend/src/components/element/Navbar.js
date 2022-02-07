import React from "react";

import "../../assets/css/components/navbar.css"

import navLogo from "../../assets/images/nav-logo.png";

export default function Navbar() {
  return (
    <div id="navbar" className="section">
      <div className="navbar-container">
        <div>
          <img id="nav-logo" src={navLogo} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
