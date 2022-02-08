import React, { useState } from "react";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/home.css";

// Img
import vinylMc from "../../assets/images/vinyl-mc.png";
import vinylPlay from "../../assets/images/vinyl-play.png";
import vinylDisc from "../../assets/images/vinyl-disc.png";
import headset from "../../assets/images/vinyl-hp.png";
import centerTemp from "../../assets/images/temp/temp-mid.png";
import longLogo from "../../assets/images/long-logo.png";
import bbl from "../../assets/images/bbl.png";
import bbr from "../../assets/images/bbr.png";

import desc1 from "../../assets/images/desc/desc1.png";
import desc2 from "../../assets/images/desc/desc2.png";
import desc3 from "../../assets/images/desc/desc3.png";

// Temp
import temp1 from "../../assets/images/temp/insecure.png";
import temp2 from "../../assets/images/temp/lmb.png";

//Js
import PlayConsole from "../element/PlayConsole";

export default function Home() {
  const [play, setPlay] = useState(true);

  return (
    <div id="home" className="section">
      <div className="page-container">
        {/* Main Section */}
        <div id="main-section">
          <div>
            <div id="home-vinyl-section">
              <img className="home-vinyl vinyl-play" src={vinylPlay} alt="" />
              <img
                // className="home-vinyl vinyl-disc rotate"
                className={`home-vinyl vinyl-disc ${
                  play === true ? "rotate" : null
                }`}
                src={vinylDisc}
                alt=""
              />
              <img className="home-vinyl headset" src={headset} alt="" />
              <img className="home-vinyl vinyl-mc" src={vinylMc} alt="" />
            </div>
            <h1 className="bg-text">Baby, please</h1>
            <h1 className="sm-text avn-medium grey-text">Magesta</h1>
          </div>

          <div id="mid-img" className="section">
            <img src={centerTemp} alt="" />
          </div>

          <div id="main-music-section">
            <div id="main-music">
              <div className="music-flex">
                <img src={temp1} alt="" />
                <h1 className="ssm-text">insecure</h1>
                <h1 className="xm-text avn-medium grey-text">
                  Mercury Goldfish
                </h1>
              </div>

              <div className="music-flex">
                <img src={temp2} alt="" />
                <h1 className="ssm-text">Leave Me Be</h1>
                <h1 className="xm-text avn-medium grey-text">Oey Usicha</h1>
              </div>
            </div>

            <div className="section">
              <span className="blue-clr"></span>
              <span className="blue-clr"></span>
              <span className="blue-clr"></span>
            </div>

            <div onClick={() => linkPath("portfolio")} id="main-btn">
              <button className="bg-text">HEY, SHOW MORE</button>
            </div>
          </div>
        </div>
        {/* Play Section */}
        <PlayConsole func={setPlay} />
        {/* Description Section */}
        <div id="desc-section">
          <p className="skv-bold bg-text">
            บริการ One Stop Service ที่ทำให้การทำเพลงของคุณครบจบที่นี่ที่เดียว
            <br />
            ตั้งแต่ pre-production ถึง post production
          </p>
          <div>
            <img id="desc-logo" src={longLogo} alt="" />
          </div>

          <div id="desc-banner-section">
            <div id="desc-banner"></div>
            <div id="desc-abs">
              <div id="banner-flex-section">
                <img className="banner-disc" src={desc1} alt="" />
                <img className="banner-disc" src={desc2} alt="" />
                <img className="banner-disc" src={desc3} alt="" />
              </div>
            </div>
          </div>

          <p className="skv-medium sm-text opa-text">
            “เรา <span className="skv-bold">‘เข้าใจ’</span>{" "}
            ว่าในการสร้างแบรนด์ของคุณนั้น จำเป็นต้องมีจุดประสงค์ รวมทั้ง Mood
            and Tone ที่ชัดเจน <br />
            และอีกหลายองค์ประกอบเพื่อตอบโจทย์การสื่อสารแบรนด์ของคุณอย่างมีคุณภาพ”
          </p>

          <div className="section">
            <hr className="blue-line"></hr>
          </div>

          <p className="skv-bold bg-text">
            ในทุกขั้นตอนการสร้างสรรค์เพลงของ SOFA HOUSE
            เราจะช่วยพัฒนาและนำเสนอความโดดเด่น <br />
            และเอกลักษณ์ของคุณออกมาให้ดีที่สุด
            เพื่อตอบโจทย์กลุ่มเป้าหมายที่คุณวางไว้
          </p>
        </div>
        {/* Update Section */}
        <div id="update-section">
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsofahouse.th%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=366483168240868"
              title="sofaFB"
              class="fb-iframe"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div>
            <h1 className="bg-text">OUR LASTEST UPDATES!</h1>
            <div className="bubble-box">
              <div className="update-box btr shadow">
                <h1 className="bg-text">Lorem ipsum dolor sit amet,</h1>
                <p className="xm-text avn-medium">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea
                </p>
              </div>
              <img className="bbr" src={bbr} alt="" />
            </div>
            <div className="bubble-box">
              <div className="update-box btl shadow">
                <h1 className="bg-text">Lorem ipsum dolor sit amet,</h1>
                <p className="xm-text avn-medium">
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea
                </p>
              </div>
              <img className="bbl" src={bbl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  let web = "http://localhost:3000/";
  window.location = web + value;
};
