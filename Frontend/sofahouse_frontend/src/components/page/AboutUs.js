import React from "react";
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
import "../../assets/css/page/aboutUs.css";

// import aboutHeadphone from "../../assets/images/about-us/headphone.png";
import banner1 from "../../assets/images/about-us/headphones-connected-music-mixer-laptop-music-studio-with-studio-light-close-up.png";
import banner2 from "../../assets/images/about-us/man-recording-studio-music-production.png";
// import chevron from "../../assets/images/about-us/icons8-chevron-down-96.png";

// import activity1 from "../../assets/images/slideshow_ activity/customer journey-03.png";
import activity2 from "../../assets/images/slideshow_ activity/IMG_0385.JPG";
import activity3 from "../../assets/images/slideshow_ activity/IMG_4360.JPG";
import activity4 from "../../assets/images/slideshow_ activity/production-thumbnail-2.png";
import activity5 from "../../assets/images/slideshow_ activity/PTR04310.JPG";
import whySofa from "../../assets/images/slideshow_ activity/team-img.png";
import activity7 from "../../assets/images/slideshow_ activity/S__32317446.jpg";
import activity8 from "../../assets/images/slideshow_ activity/S__32317448.jpg";
import activity9 from "../../assets/images/slideshow_ activity/S__32333864.jpg";
import activity10 from "../../assets/images/slideshow_ activity/S__47120389.jpg";

import euy from "../../assets/images/about-us/team/Euy.jpg"
import parm from "../../assets/images/about-us/team/Parm.jpg"
import ploycal from "../../assets/images/about-us/team/Ploycal.png"
import md from "../../assets/images/about-us/team/Redpig.jpg"

SwiperCore.use([
  EffectFade,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
]);

export default function AboutUs() {
  // const [underStand, setUnderStand] = useState(false);
  // const [flexible, setFlexible] = useState(false);
  // const [professional, setProfessional] = useState(false);

  const activityImg = [
    // activity1,
    activity4,
    activity2,
    activity3,
    activity5,
    // activity6,
    activity7,
    activity8,
    activity9,
    activity10,
  ];

  const activity = [];

  for (let i = 0; i < activityImg.length; i += 1) {
    activity.push(
      <SwiperSlide key={`slide-activity-img-${i}`} tag="li">
        <img class="activity-img" src={activityImg[i]} alt="" />
      </SwiperSlide>
    );
  }

  return (
    <div id="aboutus" className="section">
      <div className="page-container">
        {/* Vision Section */}
        <div id="vision-section">
          <div
            className="about-banner"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <h1 className="bg4-text">Vision</h1>
            <p className="bg2-text skv-text">
              “In the next decade, we want to be recognised as <br />
              innovators within the music industry in Thailand.”
            </p>
          </div>
        </div>

        <hr className="about-hr"></hr>

        {/* Mission Section */}
        <div id="mission-section">
          <div
            className="about-banner"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <h1 className="bg4-text">Mission</h1>
            <p className="bg2-text skv-text">
              “Our Mission is to understand and enhance brand’s <br /> identity
              through one-stop music service.”
            </p>
          </div>
        </div>

        {/* Info Section */}
        {/* <div id="about-info-section">
          <div id="headphone-container">
            <img id="about-headphone" src={aboutHeadphone} alt="" />
          </div>

          <h1 className="bg3-text">SOFA ABOUT US</h1>

          <div id="about-description">
            <div>
              <div className="about-orange-box" onClick={() => setUnderStand(!underStand)}>
                <h1 className="md-text">UNDERSTANDING</h1>
                <img className="chevron" src={chevron} alt=""/>
              </div>
              { underStand === true && (
                <h1 className={underStand? 'answer active xm-text skv-medium' : 'answer xm-text skv-medium'}>
                เรา<span className='skv-bold'>เข้าใจ</span>
                และพร้อมสร้างผลงานตาม
                <span className="skv-bold">ความต้องการของคุณ</span>
              </h1>
              )}
              { underStand === true && (
              <p className={underStand? 'answer active xm-text skv-medium' : 'answer xm-text skv-medium'}>
                พวกเราพร้อมที่จะเป็นพาร์ทเนอร์ในการช่วย
                <span className="skv-bold">
                  ดึงเอกลักษณ์และตัวตนของแบรนด์
                </span>{" "}
                ผ่านการบริการที่อาศัยความ
                <span className="skv-bold">เข้าใจ</span>
                และมอบความ<span className="skv-bold">สบายใจ</span> เพื่อผลงานที่
                <span className="skv-bold">ดีและตอบโจทย์คุณมากที่สุด</span>
              </p> 
              )}
            </div>
            <div>
              <div className="about-orange-box" onClick={() => setFlexible(!flexible)}>
                <h1 className="md-text">FLEXIBLE</h1>
                <img className="chevron" src={chevron} alt=""/>
              </div>
              { flexible === true && (
                <h1 className={flexible? 'answer active xm-text skv-medium' : 'answer xm-text skv-medium'}>
                เรา<span className="skv-bold">ปรับเปลี่ยน</span>
                การทำงานไปพร้อมกับคุณ
                </h1>
              )}
              
              { flexible === true && (
                <p className={flexible? 'answer active xm-text skv-medium' : 'answer xm-text skv-medium'}>
                พวกเรามีความยืดหยุ่นและสามารถ
                <span className="skv-bold">ปรับตัวเข้ากับตัวตนของแบรนด์</span>
                และ<span className="skv-bold">แนวดนตรีที่หลากหลาย</span>
                ในแต่ละงานและสถานการณ์ ด้วยทีมงานรุ่นใหม่
                ที่ไม่มีข้อจำกัดด้านแนวดนตรี
                </p>
              )}
            </div>
            <div>
              <div className="about-orange-box" onClick={() => setProfessional(!professional)}>
                <h1 className="md-text">PROFESSIONAL</h1>
                <img className="chevron" src={chevron} alt=""/>
              </div>
              { professional === true && (
                <h1 className={professional? 'answer active xm-text skv-medium' : 'answer xm-text skv-medium'}>
                เราสร้างสรรค์ผลงาน
                <span className="skv-bold">อย่างมืออาชีพ</span>
                </h1>
              )}

              { professional === true && ( 
                 <p className={professional? 'answer active xm-text skv-medium' : 'answer xm-text skv-medium'}>
                 ด้วยทีมงานที่มากประสบการณ์เรื่องดนตรีและเนื้อร้อง
                 ทำให้โซฟาเฮ้าส์สามารถเป็นที่ปรึกษา ช่วยวิเคราะห์
                 และให้คำแนะนำเพื่อสร้างสรรค์ เพลงที่
                 <span className="skv-bold">ตอบโจทย์ความต้องการ</span>
                 ของคุณมากที่สุด
                </p>
              )}
            </div>
          </div>
        </div> */}
        <div id="activity-carousal" className="section">
          <Swiper
            id="activity-swiper"
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
          >
            {activity}
          </Swiper>
        </div>

        <div id="team-section" className="section">
          <h1 className="bg4-text">Sofa Production Team</h1>

          <div id="team-clr-section">
            <div>
              <div>
                <img className="team-clr" src={ploycal} alt="" />
              </div>
              <h1 className="bg-text avn-bold text-center">
                Ratimas (Ploycal) Jirapongsananuruk
              </h1>
              <div className="about-spacing text-center" />
              <h1 className="bg-text avn-bold text-center">
                CEO & Song writer : Sofa House
              </h1>
              <p className="sm-text avn-medium p-aboutus">
                “I love how our team is so strong and passionate on producing
                every single pieces of music. That’s why we understand and enjoy
                every path our clients are taking. We are here to help them
                achieve their goals”
              </p>
            </div>

            <div>
              <div>
                <img className="team-clr" src={parm} alt="" />
              </div>
              <h1 className="bg-text avn-bold text-center">
                Natchanon (Parm) Neovakul
              </h1>
              <div className="about-spacing text-center" />
              <h1 className="bg-text avn-bold text-center">
                CEO & Producer : Pocket Studio
              </h1>
              <p className="sm-text avn-medium p-aboutus">
                “I am satisfied when the customer is satisfied, or occasionally,
                unsatisfied even though the customer is satisfied - some things
                can always be tweaked.”
              </p>
            </div>

            <div>
              <div>
                <img className="team-clr" src={euy} alt="" />
              </div>
              <h1 className="bg-text avn-bold text-center">
                Chayada (Euy) Jirapongsananuruk
              </h1>
              <div className="about-spacing text-center" />
              <h1 className="bg-text avn-bold text-center">
                Song writer : Sofa House
              </h1>
              <p className="sm-text avn-medium p-aboutus">
                “Cannot wait to contribute for the Thai music industry. We hope
                that Sofa House team are a part to drive this growth together in
                the next 5 to 10 to 20 years!”
              </p>
            </div>

            <div>
              <div>
                <img className="team-clr" src={md} alt="" />
              </div>
              <h1 className="bg-text avn-bold text-center">
                Chananet (Moodang) Sinjanakom
              </h1>
              <div className="about-spacing text-center" />
              <h1 className="bg-text avn-bold text-center">
                Producer : Sofa House
              </h1>
              <p className="sm-text avn-medium p-aboutus">
                “Making people enjoy my music has always been my most joyous
                hobbies. I and many other talented producers cannot wait to put
                a smile on your face through music!”
              </p>
            </div>
          </div>
        </div>

        {/* Why Section */}
        <div id="why-section">
          <div id="why-box">
            <img id="why-sofa-img" src={whySofa} alt="" />
            <div id="sofa-why">
              <h1 className="bg2-text">Why SOFA HOUSE?</h1>
              <h1 className="bg2-text skv-medium">ทำไมต้องเป็นโซฟาเฮ้าส์</h1>
            </div>
            <p className="sm-text skv-medium">
              โซฟาถ้าเทียบกับเฟอร์นิเจอร์อื่น ๆ
              เราจะนึกถึงคนที่กำลังนั่งบนเบาะนุ่ม ๆ ที่มีที่วางแขน นั่งไขว่ห้าง
              ดูเป็นมืออาชีพ
              แต่ในขณะเดียวกันก็ให้ความรู้สึกเป็นกันเองและผ่อนคลาย
              พวกเราอยากเป็นพื้นที่ที่สร้างความสบายใจให้กับคุณ
              เหมือนกับโซฟาในบ้านที่มีไว้ต้อนรับแขก
              เพื่อความสบายแต่ยังคงความเป็นมืออาชีพเอาไว้
              พวกเราเองก็พร้อมที่จะพูดคุย รับฟัง
              และทำความเข้าใจความต้องการของคุณ
              ดูแลคุณเเละเพลงของคุณเหมือนกับแขกคนสำคัญที่เข้ามาในบ้าน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
