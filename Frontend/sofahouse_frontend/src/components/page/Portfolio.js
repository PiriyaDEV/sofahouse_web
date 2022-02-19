import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { fetchMusicCategory } from "../../redux";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/portfolio.css";
import "../../assets/css/page/home.css";

// Img
import vinylMc from "../../assets/images/vinyl-mc.png";
import vinylPlay from "../../assets/images/vinyl-play.png";
import vinylDisc from "../../assets/images/vinyl-disc.png";
import headset from "../../assets/images/vinyl-hp.png";
import portPlay from "../../assets/images/port-play.png";

import tmn1 from "../../assets/images/testimonial/tmn1.png";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

export default function Portfolio() {
  const musicList = useSelector((state) => state.music.musics);
  const [musicCategory, setMusicCategory] = useState([{
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0
    },
    {
      id: 0,
      title: "Title",
      artist: "Artist",
      url: "",
      category: "",
      created_at: 0
      }
]);
  const [category, setCategory] = useState("Lyrics/Song Writing");

  const music = [];

  const thumnail = (url) => {
    let thumbnail1 = "https://img.youtube.com/vi/";
    let mediumQuality = "/mqdefault.jpg";
    return thumbnail1 + url.split("v=").pop().split("&")[0] + mediumQuality;
  };

  const categorySelect = (categoryName) => {
    setCategory(categoryName);
    setMusicCategory(musicList.filter((musicsList) => musicsList.category === categoryName))
  };

  const checkCategory = (categoryName) => {
    let active = "sm-text grey-text work-active";
    let inactive = "sm-text grey-text";
    if (category === categoryName) {
      return active;
    } else {
      return inactive;
    }
  };


  useEffect(() => {
    setMusicCategory(musicList)
  }, [musicList]);

  for (let i = 0; i < musicCategory.length; i += 1) {
    music.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className="carousal-music">
          <img src={thumnail(musicCategory[i].url)} alt="" />
          <h1 className="xm2-text">{musicCategory[i].title}</h1>
          <h1 className="xm2-text avn-medium grey-text">
            {musicCategory[i].artist}
          </h1>
        </div>
      </SwiperSlide>
    );
  }

  const person = [];
  for (let i = 0; i < 5; i += 1) {
    person.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className="carousal-tmn">
          <img src={tmn1} alt="" />
          <h1 className="xm2-text">SONG NAME</h1>
          <p className="xm2-text skv-medium grey-text">
            ทีมทำเพลงน่ารักมาก ช่วยเต็มที่มากทั้งไกด์ให้ ให้กำลังใจ
            ช่วยสอนว่าควรออกเสียงยังไงให้ปัง โดยรวมเป็นทีมที่มีคุณภาพมากๆ
            ทุกคนพูดเป็นเสียงเดียวกันว่าดนตรีน่ารัก เนื้อร้องติดหู!
          </p>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div id="portfolio" className="section">
      <div className="page-container">
        {/* Work Section */}
        <div id="work-section">
          <div id="work-menu">
            <h1
              onClick={() => categorySelect("Lyrics/Song Writing")}
              className={checkCategory("Lyrics/Song Writing")}
            >
              Lyrics/ Song Writing
            </h1>
            <h1
              onClick={() => categorySelect("Music Production")}
              className={checkCategory("Music Production")}
            >
              Music Production
            </h1>
            <h1
              onClick={() => categorySelect("Vocal Recording")}
              className={checkCategory("Vocal Recording")}
            >
              Vocal Recording
            </h1>
            <h1
              onClick={() => categorySelect("Music Score")}
              className={checkCategory("Music Score")}
            >
              Music Score
            </h1>
            <h1
              onClick={() => categorySelect("Mixing/Mastering")}
              className={checkCategory("Mixing/Mastering")}
            >
              Mixing & Mastering
            </h1>
          </div>
          <div id="work-carousal" className="section">
            <Swiper
              id="main"
              tag="section"
              wrapperTag="ul"
              navigation={{
                prevEl: ".music-prev",
                nextEl: ".music-next",
              }}
              slidesPerView={5}
              spaceBetween={30}
              loop
              loopAdditionalSlides={100}
              centeredSlides={true}
            >
              {music}
            </Swiper>
            <div className="swiper-button-prev music-prev"></div>
            <div className="swiper-button-next music-next"></div>
          </div>
        </div>

        {/* Play Section */}
        <div id="port-play-section">
          <div id="port-vinyl">
            <div id="home-vinyl-section">
              <img className="port-vinyl vinyl-play" src={vinylPlay} alt="" />
              <img
                // className="home-vinyl vinyl-disc rotate"
                className="port-vinyl vinyl-disc rotate"
                src={vinylDisc}
                alt=""
              />
              <img className="port-vinyl headset" src={headset} alt="" />
              <img className="port-vinyl vinyl-mc" src={vinylMc} alt="" />
            </div>
            <h1 className="xm-text">SONG NAME</h1>
            <h1 className="xm2-text avn-medium grey-text">artist</h1>
          </div>

          <div id="port-play-text">
            <p className="xm-text grey-text avn-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Dui
            </p>
          </div>

          <div>
            {[...Array(5)].map((x, i) => (
              <div className="port-play-box" key={i}>
                <img className="play-btn" src={portPlay} alt="" />
                <div>
                  <h1 className="xm-text">SONG NAME</h1>
                  <h1 className="xm2-text avn-medium grey-text">artist</h1>
                </div>
                <div className="port-range">
                  <h1 className="xm-text avn-medium grey-text">00:00</h1>
                  <input
                    id="play-range"
                    type="range"
                    min={0}
                    max={0.999999}
                    step="any"
                  />
                  <h1 className="xm-text avn-medium grey-text">00:00</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div id="tmn-section">
          <h1 className="bg-text">OUR TESTIMONIALS</h1>

          <div id="tmn-carousal" className="section">
            <Swiper
              id="main"
              tag="section"
              wrapperTag="ul"
              navigation={{
                prevEl: ".person-prev",
                nextEl: ".person-next",
              }}
              slidesPerView={4}
              spaceBetween={30}
              loop
              loopAdditionalSlides={100}
            >
              {person}
            </Swiper>
            <div className="swiper-button-prev grey-pag person-prev"></div>
            <div className="swiper-button-next grey-pag person-next"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
