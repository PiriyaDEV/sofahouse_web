import React from "react";
import { slide as Menu } from "react-burger-menu";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/components/hamburger.css";

export default function Hamburger(props) {
  return (

    // Pass on our props
    <Menu id="hp-hamburger" right>
      <div className= {`menu-item hamburger-text ${
      props.path === "/" ? "hamburger-active" : null
    }`} onClick={() => linkPath("/")}>
        <h1 className="sm-text">Home</h1>
      </div>

      <div className= {`menu-item hamburger-text ${
      props.path === "portfolio" ? "hamburger-active" : null
    }`} onClick={() => linkPath("/portfolio")}>
        <h1 className="sm-text">Portfolio</h1>
      </div>

      <div className={`menu-item hamburger-text ${
      props.path === "service" ? "hamburger-active" : null
    }`} onClick={() => linkPath("/service")}>
        <h1 className="sm-text">Service</h1>
      </div>
      
      <div className={`menu-item hamburger-text hamburger-last ${
      props.path === "aboutus" ? "hamburger-active" : null
    }`} onClick={() => linkPath("/about")}>
        <h1 className="sm-text">About Us</h1>
      </div>

      <div className={`menu-item hamburger-text hamburger-last ${
      props.path === "contactus" ? "hamburger-active" : null
    }`} onClick={() => linkPath("/contact")}>
        <h1 className="sm-text">Contact Us</h1>
      </div>
    </Menu>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
