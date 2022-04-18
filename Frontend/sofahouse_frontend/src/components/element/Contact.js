import React, { useState } from "react";

import "../../assets/css/components/contact.css";

import paperPlane from "../../assets/images/contact/paperplane.png";
import fb from "../../assets/images/contact/fb.png";
import ig from "../../assets/images/contact/ig.png";
import yt from "../../assets/images/contact/yt.png";
import mail from "../../assets/images/contact/mail.png";
import tiktok from "../../assets/images/contact/tiktok.png"

export default function Contact() {
  const [hover, setHover] = useState(false);
  const [closeContact, setCloseContact] = useState(false);

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
      {hover === true && (
        <img
          id="contact-tiktok"
          className="small-contact"
          src={tiktok}
          alt=""
          onClick={() =>
            linkNewTab("https://www.tiktok.com/@sofahousemusic?_d=secCgYIASAHKAESPgo8TlD%2BB0p3TjdtllSjXe3isNv0K5zE7y8a3SWtVPCTNpzGf5OCvwJGpz4ebPB3qdg7LVEsfh3n6tMff4xlGgA%3D&_r=1&checksum=70a58d27c49b7e800afe96a907be207b3e1d7945c36c0741e7dca82564415efc&language=en&sec_uid=MS4wLjABAAAAYClcW1RfhWCxtGNio7cM9EYW5WLZY26AvL9sGofDuu0fcp-mH6_offFUdCGOKxRh&sec_user_id=MS4wLjABAAAARc-Dj5fDVHKf-eALIUCnMv4vvg3AE8WArgjGvSA1fgdVAaFUT_zPDaSUZzgcuUcg&share_app_id=1180&share_author_id=6990595599015920667&share_link_id=B3F3F129-3FE2-4EB6-8D3A-607E2A92E6BD&social_sharing=v1&source=h5_t&tt_from=copy&u_code=dcmg2e67gm0j58&user_id=6837077557445313538&utm_campaign=client_share&utm_medium=ios&utm_source=copy")
          }
        />
      )}
      <div
        id="contact-main-btn"
        className="section"
        onClick={() => {setHover(!hover); setCloseContact(true);}}
      >
        <img id="paperplane" src={paperPlane} alt="" />
      </div>
      {closeContact === false &&  (  
      <div id="contact-bubble">
        {/* eslint-disable-next-line */}
        <h1 onClick={() => setCloseContact(true)} className="contact-close"/>
        <div id="contact-bubble-box" className="section bg-text" onClick={() => setHover(!hover)}>
          Contact us Here!
        </div>
      </div>
      )}
     
    </div>
  );
}

let linkNewTab = (path) => {
  window.open(path, "_blank");
};

let linkPath = (value) => {
  window.location.href = value;
};
