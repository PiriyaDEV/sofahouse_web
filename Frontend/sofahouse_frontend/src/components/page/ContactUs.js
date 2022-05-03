import React, { useState } from "react";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/contactUs.css";

// import aboutHeadphone from "../../assets/images/about-us/headphone.png";
import picture from "../../assets/images/IMG_3746.JPG";

export default function AboutUs() {
  return (
    <div id="contactus" className="section">
      <div id="contact-picture">
          <h1 className="bg4-text">Contact Us</h1>
        <img src={picture} alt="" />
      </div>
      <div>
          <div>
              <h1>Information</h1>
              <div>
                  <h1>Name (Firstname & Lastname)</h1>

              </div>
          </div>
      </div>
    </div>
  );
}
