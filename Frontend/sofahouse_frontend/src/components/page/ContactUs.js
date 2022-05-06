import React, { useState } from "react";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/contactUs.css";

import aboutHeadphone from "../../assets/images/about-us/headphone.png";
import contactImg from "../../assets/images/slideshow_ activity/contact-img.png";

import fb from "../../assets/images/contact/fb.png";
import ig from "../../assets/images/contact/ig.png";
import yt from "../../assets/images/contact/yt.png";
import mail from "../../assets/images/contact/mail.png";
import tiktok from "../../assets/images/contact/tiktok.png";
import linkedin from "../../assets/images/contact/linkedin.png";

export default function AboutUs() {
  const initialErrorState = {
    show: false,
    message: "",
  };

  const initialContactFormState = {
    name: "",
    email: "",
    work: "",
    work_other: "",
    service: "",
    service_other: "",
    top_up: "",
    brief: "",
    reference: "",
  };

  // contact form
  const [contactForm, setContactForm] = useState(initialContactFormState);

  // error message
  const [nameError, setNameError] = useState(initialErrorState);
  const [emailError, setEmailError] = useState(initialErrorState);
  const [workError, setWorkError] = useState(initialErrorState);
  const [serviceError, setServiceError] = useState(initialErrorState);
  const [topUpError, setTopUpError] = useState(initialErrorState);
  const [briefError, setBriefError] = useState(initialErrorState);

  const showNameError = (text) => {
    setNameError({
      show: true,
      message: text,
    });
  };

  const showEmailError = (text) => {
    setEmailError({
      show: true,
      message: text,
    });
  };

  const showWorkError = (text) => {
    setWorkError({
      show: true,
      message: text,
    });
  };

  const showServiceError = (text) => {
    setServiceError({
      show: true,
      message: text,
    });
  };

  const showTopUpError = (text) => {
    setTopUpError({
      show: true,
      message: text,
    });
  };

  const showBriefError = (text) => {
    setBriefError({
      show: true,
      message: text,
    });
  };

  const handleChangeContactForm = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setContactForm({ ...contactForm, [name]: value });

    if (name === "name") {
      setNameError(initialErrorState);
    } else if (name === "email") {
      setEmailError(initialErrorState);
    } else if (name === "work" || name === "work_other") {
      setWorkError(initialErrorState);
    } else if (name === "service" || name === "service_other") {
      setServiceError(initialErrorState);
    } else if (name === "top_up") {
      setTopUpError(initialErrorState);
    } else if (name === "brief") {
      setBriefError(initialErrorState);
    }
  };

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (contactForm.work === "Others") {
      contactForm.work = contactForm.work_other;
    }
    if (contactForm.service === "Others") {
      contactForm.service = contactForm.service_other;
    }

    if (!contactForm.name) {
      valid = false;
      showNameError("Please fill your name!");
    }
    if (!contactForm.email) {
      valid = false;
      showEmailError("Please fill your email!");
    } else if (!emailRegex.test(contactForm.email)) {
      valid = false;
      showEmailError("Please fill your email correctly!");
    }
    if (!contactForm.work) {
      valid = false;
      showWorkError("Please select your work type!");
    }
    if (!contactForm.service) {
      valid = false;
      showServiceError("Please select your service type!");
    }
    if (!contactForm.top_up) {
      valid = false;
      showTopUpError("Please select your top up service!");
    }
    if (!contactForm.brief) {
      valid = false;
      showBriefError("Please write your brief!");
    }

    return valid;
  };

  const sendForm = async () => {
    Object.keys(contactForm).forEach(
      (key) => (contactForm[key] = contactForm[key].trim())
    );

    if (!validateForm()) return;

    const mailData = {
      ...contactForm,
      reference: !contactForm.reference ? "-" : contactForm.reference,
    };

    delete mailData.work_other;
    delete mailData.service_other;

    console.log(mailData);
  };

  return (
    <div id="contactus" className="section">
      <div className="page-container">
        <div id="about-info-section">
          <div id="headphone-container">
            <img id="about-headphone" src={aboutHeadphone} alt="" />
          </div>

          <h1 className="bg3-text">CONTACT US</h1>
        </div>

        <div id="contact-form-section">
          <div>
            <img id="contact-img" src={contactImg} alt="" />
          </div>
          <div id="contact-form-info">
            <div className="contact-form-info-column">
              <div>
                <h1 className="avn-bold md-text">
                  Name (First Name / Last Name)
                </h1>
                <input
                  className="contact-input"
                  name="name"
                  maxLength="255"
                  value={contactForm.name}
                  onChange={handleChangeContactForm}
                />
                {/* Invalid */}
                <div>
                  {nameError.show ? (
                    <h1 className="avn-medium md-text error-text">
                      {nameError.message}
                    </h1>
                  ) : null}
                </div>
              </div>
              <div>
                <h1 className="avn-bold md-text">Email</h1>
                <input
                  className="contact-input"
                  name="email"
                  maxLength="64"
                  value={contactForm.email}
                  onChange={handleChangeContactForm}
                />
                {/* Invalid */}
                <div>
                  {emailError.show ? (
                    <h1 className="avn-medium md-text error-text">
                      {emailError.message}
                    </h1>
                  ) : null}
                </div>
              </div>
            </div>

            <div>
              <h1 className="avn-bold md-text">Types of work</h1>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="work"
                  value="Full Song"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Full Song
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="work"
                  value="Ad Jingle"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Ad Jingle
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="work"
                  value="Music Scores"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Music Scores
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="work"
                  value="Others"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Others
                </h1>
                <input
                  className="contact-input"
                  name="work_other"
                  onChange={handleChangeContactForm}
                />
              </div>
              {/* Invalid */}
              <div>
                {workError.show ? (
                  <h1 className="avn-medium md-text error-text">
                    {workError.message}
                  </h1>
                ) : null}
              </div>
            </div>

            <div>
              <h1 className="avn-bold md-text">Types of service</h1>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Lyrics / song writing (Thai & English version)"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Lyrics / song writing (Thai & English version)
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Music production"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Music production
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Vocal recording"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Vocal recording
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Music score"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Music score
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Mixing & mastering"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Mixing & mastering
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Streaming service"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Streaming service
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="service"
                  value="Others"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Others
                </h1>
                <input
                  className="contact-input"
                  name="service_other"
                  onChange={handleChangeContactForm}
                />
              </div>
              {/* Invalid */}
              <div>
                {serviceError.show ? (
                  <h1 className="avn-medium md-text error-text">
                    {serviceError.message}
                  </h1>
                ) : null}
              </div>
            </div>
            <div>
              <h1 className="avn-bold md-text">Top up service</h1>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="top_up"
                  value="Remix version"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Remix version
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="top_up"
                  value="Remake version"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Remake version
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="top_up"
                  value="Streaming version"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Streaming version
                </h1>
              </div>

              <div className="contact-radio">
                <input
                  type="radio"
                  id="html"
                  name="top_up"
                  value="Live version"
                  onChange={handleChangeContactForm}
                />
                <h1 for="html" className="avn-medium md-text">
                  Live version
                </h1>
              </div>
              {/* Invalid */}
              <div>
                {topUpError.show ? (
                  <h1 className="avn-medium md-text error-text">
                    {topUpError.message}
                  </h1>
                ) : null}
              </div>
            </div>

            <div>
              <h1 className="avn-bold md-text">
                Song's objective, mood & tone and other things you want us to
                know more
              </h1>
              <input
                className="contact-input"
                name="brief"
                value={contactForm.brief}
                onChange={handleChangeContactForm}
              />
              {/* Invalid */}
              <div>
                {briefError.show ? (
                  <h1 className="avn-medium md-text error-text">
                    {briefError.message}
                  </h1>
                ) : null}
              </div>
            </div>

            <div>
              <h1 className="avn-bold md-text">Reference:</h1>
              <input
                className="contact-input"
                name="reference"
                value={contactForm.reference}
                onChange={handleChangeContactForm}
              />
              {/* <h1 className="avn-medium md-text error-text">Invalid Message</h1> */}
            </div>
          </div>
        </div>
        <div className="contact-btn">
          <button className="bg2-text" onClick={sendForm}>
            Send
          </button>
        </div>

        <div id="studio-contact">
          <div>
            <iframe
              title="studio-map"
              id="ggmap-studio"
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJLd8u2xWd4jAR_fyqtf0TXns&key=AIzaSyAeBKuCxy2xQ7jvjSdgkXP3VhUEi-LHJEg"
            ></iframe>
          </div>
          <div id="map-info">
            <h1 className="bg4-text avn-bold">CONTACT</h1>
            <p className="md-text avn-medium">
              239/50 Ladprao, Chom Phon, Chatuchak, Bangkok, Thailand, Bangkok
            </p>

            <p className="md-text avn-medium">Email : sofahouse.th@gmail.com</p>
            <p className="md-text avn-medium">Phone: +66 92-456-4055</p>

            <p className="md-text avn-bold follow-text">
              FOLLOW SOFA HOUSE MUSIC
            </p>

            <div id="contact-social">
              <img
                className="contact-social-img"
                src={mail}
                alt=""
                onClick={() => linkPath("mailto:sofahouse.th@gmail.com")}
              />
              <img
                className="contact-social-img"
                src={fb}
                alt=""
                onClick={() =>
                  linkNewTab("https://www.facebook.com/sofahouse.th/")
                }
              />
              <img
                className="contact-social-img"
                src={ig}
                alt=""
                onClick={() =>
                  linkNewTab(
                    "https://www.instagram.com/sofahousemusic.th/?hl=en"
                  )
                }
              />
              <img
                className="contact-social-img"
                src={yt}
                alt=""
                onClick={() =>
                  linkNewTab(
                    "https://www.youtube.com/channel/UCyhA-4Ekza2xGuMRTfo1RrA"
                  )
                }
              />

              <img
                className="contact-social-img"
                src={tiktok}
                alt=""
                onClick={() =>
                  linkNewTab(
                    "https://www.tiktok.com/@sofahousemusic?_d=secCgYIASAHKAESPgo8TlD%2BB0p3TjdtllSjXe3isNv0K5zE7y8a3SWtVPCTNpzGf5OCvwJGpz4ebPB3qdg7LVEsfh3n6tMff4xlGgA%3D&_r=1&checksum=70a58d27c49b7e800afe96a907be207b3e1d7945c36c0741e7dca82564415efc&language=en&sec_uid=MS4wLjABAAAAYClcW1RfhWCxtGNio7cM9EYW5WLZY26AvL9sGofDuu0fcp-mH6_offFUdCGOKxRh&sec_user_id=MS4wLjABAAAARc-Dj5fDVHKf-eALIUCnMv4vvg3AE8WArgjGvSA1fgdVAaFUT_zPDaSUZzgcuUcg&share_app_id=1180&share_author_id=6990595599015920667&share_link_id=B3F3F129-3FE2-4EB6-8D3A-607E2A92E6BD&social_sharing=v1&source=h5_t&tt_from=copy&u_code=dcmg2e67gm0j58&user_id=6837077557445313538&utm_campaign=client_share&utm_medium=ios&utm_source=copy"
                  )
                }
              />
              <img
                className="contact-social-img"
                src={linkedin}
                alt=""
                onClick={() =>
                  linkNewTab(
                    "https://www.linkedin.com/company/sofahouse-music-production/"
                  )
                }
              />
            </div>
          </div>
        </div>
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
