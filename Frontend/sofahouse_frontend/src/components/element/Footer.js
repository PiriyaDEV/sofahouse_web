import React from "react";

import "../../assets/css/components/footer.css";
import "../../assets/css/page.css";
import "../../assets/css/text.css";

export default function Footer() {
  return (
    <div id="footer" className="section">
      <div id="footer-container" className="page-container">
        <h1
          className="xm-text avn-book darkgrey-text pointer"
          onClick={() => linkPath("mailto:sofahouse.th@gmail.com")}
        >
          Email: sofahouse.th@gmail.com
        </h1>
        <div className="vl"></div>
        <h1
          className="xm-text avn-book darkgrey-text pointer"
          onClick={() =>
            linkNewTab("https://g.page/ideo-chula-samyan-01?share")
          }
        >
          Location: https://g.page/ideo-chula-samyan-01?share
        </h1>
        <div className="vl"></div>
        <h1 className="xm-text avn-book darkgrey-text">Phone: +66 92-456-4055</h1>
      </div>
    </div>
  );
}

let linkNewTab = (path) => {
  window.open(path, "_blank");
};

let linkPath = (value) => {
  window.location.href = value;
};
