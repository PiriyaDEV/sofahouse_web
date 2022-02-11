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
        <img id="contact-mail" className="big-contact" src={mail} alt="" />
      )}
      {hover === true && (
        <img id="contact-fb" className="small-contact" src={fb} alt="" />
      )}
      {hover === true && (
        <img id="contact-yt" className="small-contact" src={yt} alt="" />
      )}
      {hover === true && (
        <img id="contact-ig" className="small-contact" src={ig} alt="" />
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
