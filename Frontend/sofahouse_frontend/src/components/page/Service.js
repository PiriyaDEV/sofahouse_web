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
              <p className="xm-text skv-medium">
                SOFA HOUSE จะช่วยคุณหา
                <span className="skv-bold">เอกลักษณ์</span>
                ผ่านการพูดคุยและทำการวิเคราะห์ เพื่อเข้าถึง
                <span className="skv-bold">ความต้องการของคุณ</span>
                รวมถึงกลุ่มเป้าหมาย ก่อนที่จะเริ่มสร้างสรรค์เพลง
              </p>
            </div>
            <div>
              <img className="music-main-pics" src={serviceMain2} alt="" />
              <p className="xm-text skv-medium">
                นำเสนอ<span className="skv-bold">เอกลักษณ์ของศิลปิน</span>
                ผ่านเสียงดนตรี ให้มีความ
                <span className="skv-bold">เป็นตัวของตัวเองมากที่สุด</span>
                รวมถึงการทำงานของ{" "}
                <span className="skv-bold">Guide Vocalists</span>
                เพราะเนื้อเสียงและสไตล์ของแต่ละคนนั้น ล้วนมีความแตกต่างกัน
              </p>
            </div>
            <div>
              <img className="music-main-pics" src={serviceMain3} alt="" />
              <p className="xm-text skv-medium">
                นำเสนอแนวทางต่างๆ พร้อมให้คำแนะนำ รวมทั้งเสนอ{" "}
                <span className="skv-bold">Mood and Tone</span>
                เพื่อภาพคอนเซปที่ชัดเจน และสามารถ
                <span className="skv-bold">ต่อยอดกับแผนของลูกค้าในอนาคต</span>
                ให้ไปในทิศทางเดียวกัน
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
                <p className="md-text avn-medium">
                  Music Consulting <br className="sv-br" />
                  Matching Identity <br className="sv-br" />
                  Mood Landscape <br className="sv-br" />
                  Reference & Marketing Techniques Regarding Music
                </p>
              )}
              {production === "production" && (
                <p className="md-text avn-medium">
                  Instrumental <br className="sv-br" />
                  Lyrics/Melody (Thai & English) / <br className="sv-br" />
                  Vocal Demo <br className="sv-br" />
                  Unlimited Feedbacks
                </p>
              )}
              {production === "post-production" && (
                <p className="md-text avn-medium">
                  Vocal Recording <br className="sv-br" />
                  Mix & Master Instrumental <br className="sv-br" />
                  Sofa streaming service <br className="sv-br" />
                  <li className="production-li">
                    Manage your streaming account
                  </li>
                  <li className="production-li">
                    More than 15 streaming platform you can choose
                  </li>
                </p>
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