import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";

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

// Studio

import studioLogo from "../../assets/images/รูปภาพ studio/pocket-logo.png";

import studio1 from "../../assets/images/รูปภาพ studio/เน้นรูปสตู1.png";
import studio2 from "../../assets/images/รูปภาพ studio/เน้นรูปสตู2.png";
import studio3 from "../../assets/images/รูปภาพ studio/เน้นรูปสตู3.png";

import user1 from "../../assets/images/รูปภาพ studio/1E4F8EA8-86EC-4168-996A-5949232D54C1_1_105_c.jpeg";
import user2 from "../../assets/images/รูปภาพ studio/30B69988-8C1D-46DB-9D94-5DABEF43EC5A_1_105_c.jpeg";
import user3 from "../../assets/images/รูปภาพ studio/4459DD96-45E1-4156-B945-2BC6A11C0F03_1_105_c.jpeg";
import user4 from "../../assets/images/รูปภาพ studio/97BD8E3E-843B-45D9-A3D7-5308DD0224B6_1_105_c.jpeg";
import user5 from "../../assets/images/รูปภาพ studio/BB9CE826-C84A-4A92-94B9-62F0392D1532_1_105_c.jpeg";
import user6 from "../../assets/images/รูปภาพ studio/C91A0C91-0407-40CE-BCFC-6D30EDD45612_1_105_c.jpeg";

SwiperCore.use([
  EffectFade,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
]);

export default function Service() {
  const [production, setProduction] = useState("pre-production");
  const studioImg = [studio1, studio2, studio3];
  const userImg = [user1, user2, user3, user4, user5, user6];

  const studio = [];

  for (let i = 0; i < studioImg.length; i += 1) {
    studio.push(
      <SwiperSlide key={`slide-studio-img-${i}`} tag="li">
        <img class="studio-img" src={studioImg[i]} alt="" />
      </SwiperSlide>
    );
  }

  const user = [];

  for (let i = 0; i < userImg.length; i += 1) {
    user.push(
      <SwiperSlide key={`slide-studio-user-${i}`} tag="li">
        <img class="studio-user" src={userImg[i]} alt="" />
      </SwiperSlide>
    );
  }

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

        <div id="service-studio">
          <h1 className="bg2-text">Our studio</h1>
          <div id="service-studio-section">
            <div id="studio-info" className="bg2-text">
              <div>
                <p className="avn-bold">Recording:</p>
                <p className="skv-medium">Apollo Twin X</p>
                <p className="skv-medium">Scarlett 18i20</p>
              </div>

              <div>
                <p className="avn-bold">Monitors:</p>
                <p className="skv-medium">Genelec 8040</p>
                <p className="skv-medium">Beyerdynamic DT990</p>
                <p className="skv-medium">Audio Technica m40x</p>
                <p className="skv-medium">Audio Technica m30x</p>
              </div>

              <div>
                <p className="avn-bold">Microphones:</p>
                <p className="skv-medium">Neumann TLM 103</p>
                <p className="skv-medium">Shure SM7B</p>
                <p className="skv-medium">Rode Procaster</p>
              </div>
            </div>
            <div id="studio-image-section">
              <div>
                <div
                  onClick={() =>
                    linkNewTab("https://www.facebook.com/pockethouse.studio/")
                  }
                >
                  <img id="studio-logo" src={studioLogo} alt="" />
                </div>

                <Swiper
                  id="studio-img-swiper"
                  effect={"fade"}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  loop
                  autoplay={{
                    delay: 5000,
                  }}
                  modules={[EffectFade, Navigation, Pagination]}
                  // breakpoints={{
                  //   // when window width is >= 700px
                  //   700: {
                  //     slidesPerView: 5,
                  //   },
                  //   414: {
                  //     slidesPerView: 3,
                  //   },
                  // }}
                >
                  {studio}
                </Swiper>
              </div>
              <div>
                <div id="studio-grid">
                  <Swiper
                    id="studio-user-swiper"
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    loop
                    autoplay={{
                      delay: 5000,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    // breakpoints={{
                    //   // when window width is >= 700px
                    //   700: {
                    //     slidesPerView: 5,
                    //   },
                    //   414: {
                    //     slidesPerView: 3,
                    //   },
                    // }}
                  >
                    {user}
                  </Swiper>
                  <div id="studio-fb">
                    <iframe
                      title="studio-fb-iframe"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D114291557570692%26id%3D112373771095804&width=500&show_text=false&appId=2449916458614199&height=498"
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-btn" onClick={() => linkPath("/contact")}>
          <button className="bg2-text">Contact Us Now</button>
        </div>

        {/* Service Type */}
        <div id="service-type-section">
          <h1 className="bg2-text">Music Genre and service type</h1>

          <div id="service-container">
            <div className="service-box-section">
              <div className="service-box section">
                <img className="service-pics" src={service1} alt="" />
                <p className="sm-text avn-bold">
                  Beat/Instrumental from scratch{" "}
                  <span className="skv-medium">
                    - บริการสตรีมเพลงลงบนช่องทางต่างๆ
                  </span>
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service2} alt="" />
                <p className="sm-text avn-bold">
                  Films OST{" "}
                  <span className="skv-medium">- เพลงประกอบภาพยนตร์</span>
                  <br className="sv-br" />
                  Series OST{" "}
                  <span className="skv-medium">- เพลงประกอบซีรีส์</span>
                  <br className="sv-br" />
                  TV program OST{" "}
                  <span className="skv-medium">- เพลงประกอบรายการโทรทัศน์</span>
                  <br className="sv-br" />
                  Documentary OST{" "}
                  <span className="skv-medium">- เพลงประกอบสื่อสารคดี</span>
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service3} alt="" />
                <p className="sm-text avn-bold">
                  Advertisement jingle{" "}
                  <span className="skv-medium">- จิงเกิลสำหรับโฆษณา</span>
                  <br className="sv-br" />
                  Radio jingle{" "}
                  <span className="skv-medium">- จิงเกิลสำหรับวิทยุ</span>
                </p>
              </div>
            </div>

            <div className="service-box-section">
              <div className="service-box section">
                <img className="service-pics" src={service4} alt="" />
                <p className="sm-text avn-bold">
                  Radio spot <span className="skv-medium">- สปอตวิทยุ</span>
                  <br className="sv-br" />
                  Songs for advertisements{" "}
                  <span className="skv-medium">- เพลงประกอบโฆษณา</span>
                  <br className="sv-br" />
                  TV program media’s station theme song{" "}
                  <span className="skv-medium">
                    - เพลงประกอบสถานีวิทยุ/โทรทัศน์/ช่อง
                  </span>
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service5} alt="" />
                <p className="sm-text avn-bold">
                  Musical{" "}
                  <span className="skv-medium">
                    - เพลงสำหรับละครเวทีมิวสิคัล
                  </span>
                  <br className="sv-br" />
                  Dance Music{" "}
                  <span className="skv-medium">- เพลงสำหรับเต้น</span>
                  <br className="sv-br" />
                  Event’s theme song{" "}
                  <span className="skv-medium">
                    - เพลงสำหรับงานนิทรรศการและอีเวนต์
                  </span>
                </p>
              </div>
              <div className="service-box section">
                <img className="service-pics" src={service6} alt="" />
                <p className="sm-text avn-bold">
                  Remix Version{" "}
                  <span className="skv-medium">- รีมิกซ์เพลง</span>
                  <br className="sv-br" />
                  Remake Version{" "}
                  <span className="skv-medium">- ดัดแปลงเพลง</span>
                  <br className="sv-br" />
                  Streaming Version{" "}
                  <span className="skv-medium">- ทำเพลงสำหรับสตรีมมิ่ง</span>
                  <br className="sv-br" />
                  Live Version{" "}
                  <span className="skv-medium">- ทำเพลงสำหรับร้องสด</span>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-btn" onClick={() => linkPath("/contact")}>
            <button className="bg2-text">Contact for more Info</button>
          </div>
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};

let linkNewTab = (path) => {
  window.open(path, "_blank");
};
