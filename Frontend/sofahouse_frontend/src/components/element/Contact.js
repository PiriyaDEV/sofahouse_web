import React, { useState } from "react";

import "../../assets/css/components/contact.css";

import paperPlane from "../../assets/images/contact/paperplane.png";
import fb from "../../assets/images/contact/fb.png";
import ig from "../../assets/images/contact/ig.png";
import yt from "../../assets/images/contact/yt.png";
import mail from "../../assets/images/contact/mail.png";

export default function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div id="contact">
      {hover === true && (
        <img
          id="contact-mail"
          className="big-contact"
          src={mail}
          alt=""
          onClick={() => linkPath("mailto:sofahouse.th@gmail.com")}
        />
      )}
      {hover === true && (
        <img
          id="contact-fb"
          className="small-contact"
          src={fb}
          alt=""
          onClick={() => linkNewTab("https://www.facebook.com/sofahouse.th/")}
        />
      )}
      {hover === true && (
        <img
          id="contact-yt"
          className="small-contact"
          src={yt}
          alt=""
          onClick={() =>
            linkNewTab(
              "https://www.youtube.com/channel/UCyhA-4Ekza2xGuMRTfo1RrA"
            )
          }
        />
      )}
      {hover === true && (
        <img
          id="contact-ig"
          className="small-contact"
          src={ig}
          alt=""
          onClick={() =>
            linkNewTab("https://www.instagram.com/sofahousemusic.th/?hl=en")
          }
        />
      )}
      <div
        id="contact-main-btn"
        className="section"
        onClick={() => setHover(!hover)}
      >
        <img id="paperplane" src={paperPlane} alt="" />
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
