import React, { useState } from "react";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/service.css";
import "../../assets/css/page/home.css";

// Import Pictures

import serviceMain1 from "../../assets/images/service/service-main-1.png";
import serviceMain2 from "../../assets/images/service/service-main-2.png";
import serviceMain3 from "../../assets/images/service/service-main-3.png";

import vinylMc from "../../assets/images/vinyl-mc.png";
import vinylPlay from "../../assets/images/vinyl-play.png";
import vinylDisc from "../../assets/images/vinyl-disc.png";
import headset from "../../assets/images/vinyl-hp.png";

import service1 from "../../assets/images/service/service-1.png";
import service2 from "../../assets/images/service/service-2.png";
import service3 from "../../assets/images/service/service-3.png";
import service4 from "../../assets/images/service/service-4.png";
import service5 from "../../assets/images/service/service-5.png";
import service6 from "../../assets/images/service/service-6.png";

export default function Service() {
  const [production, setProduction] = useState("pre-production");

  return (
    <div id="service" className="section">
      <div className="page-container">
        <div id="white-service">
          {/* Music Main Section */}
          <div id="music-main-section">
            <div>
              <img className="music-main-pics" src={serviceMain1} alt="" />
              <p className="xm-text skv-bold">
                บริการให้คำปรึกษาเกี่ยวกับเพลงฟรี <br />
                <div />
                <span
                  className="service-link"
                  onClick={() => linkPath("/contact")}
                >
                  Free Consult (Click!)
                </span>
              </p>
            </div>
            <div>
              <img className="music-main-pics" src={serviceMain2} alt="" />
              <p className="xm-text skv-bold">
                ดึงเอกลักษณ์ของศิลปิน ผ่านเสียงดนตรี, <br /> เนื้อเสียง
                และสไตล์การร้องของแต่ละคน
              </p>
            </div>
            <div>
              <img className="music-main-pics" src={serviceMain3} alt="" />
              <p className="xm-text skv-bold">
                กำหนดแนวทาง Mood & Tone และกราฟอารมณ์ของ <br />
                เพลงให้เข้ากับคอนเซ็ปต์โดยรวม
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div id="music-middle-section">
            <div id="home-vinyl-section">
              <img className="home-vinyl vinyl-play" src={vinylPlay} alt="" />
              <img
                // className="home-vinyl vinyl-disc rotate"
                className="home-vinyl vinyl-disc rotate"
                src={vinylDisc}
                alt=""
              />
              <img className="home-vinyl headset" src={headset} alt="" />
              <img className="home-vinyl vinyl-mc" src={vinylMc} alt="" />
            </div>
            <div id="production-section">
              <div id="production-btn-section">
                <button
                  className={`sm-text avn-medium production-btn ${
                    production === "pre-production" ? "production-active" : null
                  }`}
                  onClick={() => setProduction("pre-production")}
                >
                  Pre-Production
                </button>
                <button
                  className={`sm-text avn-medium production-btn ${
                    production === "production" ? "production-active" : null
                  }`}
                  onClick={() => setProduction("production")}
                >
                  Production
                </button>
                <button
                  className={`sm-text avn-medium production-btn ${
                    production === "post-production"
                      ? "production-active"
                      : null
                  }`}
                  onClick={() => setProduction("post-production")}
                >
                  Post-Production
                </button>
              </div>
              {production === "pre-production" && (
                <div className="service-1">
                  <p className="md-text avn-bold">
                    Music Consulting{" "}
                    <span className="skv-medium">
                      - ให้คำปรึกษาด้านดนตรีและแนวเพลงที่สนใจจะทำ
                      รวมถึงความต้องการ
                    </span>
                    <br className="sv-br" />
                    Matching Identity{" "}
                    <span className="skv-medium">
                      -
                      สร้างเอกลักษณ์ผ่านเสียงและจุดเด่นด้านดนตรีจากตัวตนของเราให้แตกต่างจากคนอื่น
                    </span>
                    <br className="sv-br" />
                    Mood Landscape{" "}
                    <span className="skv-medium">
                      - จับแนว mood & tone
                      ผ่านกราฟและสีของเพลงโดยรวมให้มีสตอรี่และความรู้สึกร่วม
                    </span>
                    <br className="sv-br" />
                    Reference & Marketing Techniques Regarding Music{" "}
                    <span className="skv-medium">
                      - วิธีเลือกใช้เสียง ในการแต่งเพลง ให้ติดหูและติดตลาด
                    </span>
                  </p>
                </div>
              )}
              {production === "production" && (
                <div className="service-2">
                  <p className="md-text avn-bold">
                    Instrumental Arrangement{" "}
                    <span className="skv-medium">
                      - แต่งทำนอง และแนวดนตรีให้เพลงของคุณออกมาถูกใจ
                    </span>
                    <br className="sv-br" />
                    Lyrics/Melody (Thai & English){" "}
                    <span className="skv-medium">
                      - เนื้อเพลงในรูปแบบเวอร์ชั่นภาษาไทยและอังกฤษ
                    </span>
                    <br className="sv-br" />
                    Vocal Demo{" "}
                    <span className="skv-medium">
                      - ตัวอย่างเดโม่เป็นแนวทางในการร้อง
                    </span>
                  </p>
                </div>
              )}
              {production === "post-production" && (
                <div className="service-3">
                  <p className="md-text avn-bold">
                    Vocal Recording{" "}
                    <span className="skv-medium">
                      - บริการอัดเสียงนักร้องด้วยอุปกรณ์ระดับพรีเมี่ยม
                    </span>
                    <br className="sv-br" />
                    Mix & Master Instrumental{" "}
                    <span className="skv-medium">
                      - บริการมิกซ์เสียงให้เพลงของคุณกลมกล่อมยิ่งขึ้น
                    </span>
                    <br className="sv-br" />
                    Sofa streaming service{" "}
                    <span className="skv-medium">
                      - บริการสตรีมเพลงลงบนช่องทางต่างๆ
                    </span>
                    <br className="sv-br" />
                    <li className="production-li">
                      Manage your streaming account{" "}
                      <span className="skv-medium">
                        - บริการดูแลบัญชีผู้ใช้ของคุณ
                      </span>
                    </li>
                    <li className="production-li">
                      More than 15 streaming platform you can choose{" "}
                      <span className="skv-medium">
                        - ช่องทางสตรีมมิ่งมากกว่า 15 ช่องทาง
                      </span>
                    </li>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Service Type */}
        <div id="service-type-section">
          <h1 className="bg2-text">Music Genre and service type</h1>

          <div id="service-container">
            <div className="service-box-section">
              <div className="service-box section">
                <img className="service-pics" src={service1} alt="" />
                <p className="sm-text avn-medium">
                  Beat/Instrumental <br className="sv-br" />
                  from scratch
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service2} alt="" />
                <p className="sm-text avn-medium">
                  Films OST
                  <br className="sv-br" />
                  Series OST
                  <br className="sv-br" />
                  TV program OST
                  <br className="sv-br" />
                  Documentary OST
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service3} alt="" />
                <p className="sm-text avn-medium">
                  Advertisement jingle
                  <br className="sv-br" />
                  Radio jingle
                </p>
              </div>
            </div>

            <div className="service-box-section">
              <div className="service-box section">
                <img className="service-pics" src={service4} alt="" />
                <p className="sm-text avn-medium">
                  Radio spot <br className="sv-br" />
                  Songs for advertisements
                  <br className="sv-br" />
                  TV program media’s station theme song
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service5} alt="" />
                <p className="sm-text avn-medium">
                  Musical
                  <br className="sv-br" />
                  Dance Music
                  <br className="sv-br" />
                  Event’s theme song
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service6} alt="" />
                <p className="sm-text avn-medium">
                  Remix Version <br className="sv-br" />
                  Remake Version
                  <br className="sv-br" />
                  Streaming Version
                  <br className="sv-br" />
                  Live Version
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
