import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from "swiper";
import ReactPlayer from "react-player";
import Duration from "../function/Duration";
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
import stop from "../../assets/images/port-stop.png";

import tmn1 from "../../assets/images/testimonial/tmn1.png";

// import screenWidth from "../../assets/css/page/screen"

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function Portfolio() {
  const musicList = useSelector((state) => state.music.musics);
  const [swiperRef, setSwiperRef] = useState(null);
  const [category, setCategory] = useState("Lyrics/Song Writing");
  const [musicCategory, setMusicCategory] = useState([]);
  const [play, setPlay] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const inputRange = useRef(null);
  const [musicListSelect, setMusicListSelect] = useState([
    {
      id: 0,
      title: "Title",
      artist: "Artist",
      url: "",
      category: "",
      created_at: 0,
    },
  ]);
  const [musicSelect, setMusicSelect] = useState({
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0,
  });

  const music = [];

  const thumnail = (url) => {
    let thumbnail1 = "https://img.youtube.com/vi/";
    let mediumQuality = "/mqdefault.jpg";
    return thumbnail1 + url.split("v=").pop().split("&")[0] + mediumQuality;
  };

  const categorySelect = (categoryName) => {
    setCategory(categoryName);
    setMusicCategory(
      musicList.filter((musicsList) => musicsList.category === categoryName)
    );
    swiperRef.slideTo(2, 0);
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
    setMusicCategory(
      musicList.filter(
        (musicsList) => musicsList.category === "Lyrics/Song Writing"
      )
    );
    setMusicSelect(musicList[0]);
  }, [musicList]);

  useEffect(() => {
    if (musicCategory) {
      const musicList = [];
      for (let i = 0; i < 5; i++) {
        musicList.push(musicCategory[i]);
      }
      setMusicListSelect(musicList);
    }
  }, [musicCategory]);

  for (let i = 0; i < musicCategory.length; i += 1) {
    music.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <div className="carousal-music">
          <img src={thumnail(musicCategory[i].url)} alt="" />
          {musicCategory ? (
            <h1 className="xm2-text truncate">{musicCategory[i].title}</h1>
          ) : (
            <h1 className="xm2-text truncate">Title</h1>
          )}
          {musicCategory ? (
            <h1 className="xm2-text avn-medium grey-text truncate">
              {musicCategory[i].artist}
            </h1>
          ) : (
            <h1 className="xm2-text avn-medium grey-text truncate">Artist</h1>
          )}
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

  const togglePlay = (index) => {
    if (musicListSelect[index].id === musicSelect.id) {
      setPlay(!play);
    } else {
      setPlayed(0);
      var tObj = document.getElementsByClassName("play-range");
      for (var i = 0; i < tObj.length; i++) {
        tObj[i].value = 0;
      }
      if (play) {
        setMusicSelect(musicListSelect[index]);
      } else {
        setMusicSelect(musicListSelect[index]);
        setPlay(!play);
      }
    }
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e, index) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    inputRange.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const slideChange = (e) => {
    setPlay(false);
    setPlayed(0);
    var tObj = document.getElementsByClassName("play-range");
    for (var i = 0; i < tObj.length; i++) {
      tObj[i].value = 0;
    }
    if (musicCategory) {
      const musicList = [];

      let count = 0;
      for (let i = e.realIndex - 2; i < musicCategory.length; i++) {
        if (count === 5) {
          break;
        } else {
          if (i < 0) {
            musicList.push(musicCategory[musicCategory.length + i]);
          } else {
            musicList.push(musicCategory[i]);
          }
          count++;
        }
      }
      if (count === 3) {
        musicList.push(musicCategory[0]);
        musicList.push(musicCategory[1]);
      } else if (count === 4) {
        musicList.push(musicCategory[0]);
      }
      setMusicListSelect(musicList);
    }
  };

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
          <div className="section">
            <div id="work-carousal" className="section">
              <Swiper
                id="main"
                onSwiper={setSwiperRef}
                tag="section"
                wrapperTag="ul"
                navigation={{
                  prevEl: ".music-prev",
                  nextEl: ".music-next",
                }}
                slidesPerView={1}
                loop
                loopAdditionalSlides={100}
                centeredSlides={true}
                initialSlide={2}
                onSlideChange={slideChange}
                breakpoints={{
                  // when window width is >= 700px
                  700: {
                    slidesPerView: 5,
                  },
                  414: {
                    slidesPerView: 3,
                  }
                }}
              >
                {music}
              </Swiper>
              <div className="swiper-button-prev music-prev"></div>
              <div className="swiper-button-next music-next"></div>
            </div>
          </div>
        </div>

        {/* Play Section */}
        <div id="port-play-section">
          <div id="vinyl-mb-container">
            <div id="port-vinyl">
              <div id="home-vinyl-section">
                <img className="port-vinyl vinyl-play" src={vinylPlay} alt="" />
                {play ? (
                  <img
                    className="port-vinyl vinyl-disc rotate"
                    src={vinylDisc}
                    alt=""
                  />
                ) : (
                  <img
                    className="port-vinyl vinyl-disc"
                    src={vinylDisc}
                    alt=""
                  />
                )}
                <img className="port-vinyl headset" src={headset} alt="" />
                <img className="port-vinyl vinyl-mc" src={vinylMc} alt="" />
              </div>
              {musicSelect ? (
                <h1 className="xm-text truncate">{musicSelect.title}</h1>
              ) : (
                <h1 className="xm-text">Title</h1>
              )}

              {musicSelect ? (
                <h1 className="xm2-text avn-medium grey-text truncate">
                  {musicSelect.artist}
                </h1>
              ) : (
                <h1 className="xm2-text avn-medium grey-text">Artist</h1>
              )}
            </div>
            <div id="port-play-text" className="play-text-mb">
              <p className="xm-text grey-text avn-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Dui
              </p>
            </div>
          </div>

          <div id="port-play-text" className="play-text-pc">
            <p className="xm-text grey-text avn-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Dui
            </p>
          </div>

          <div>
            {musicListSelect &&
              musicListSelect.map((music, index) => (
                <div className="port-play-box" key={index}>
                  {play === true && music.id === musicSelect.id ? (
                    <img
                      onClick={() => togglePlay(index)}
                      className="play-btn"
                      src={stop}
                      alt=""
                    />
                  ) : (
                    <img
                      onClick={() => togglePlay(index)}
                      className="play-btn"
                      src={portPlay}
                      alt=""
                    />
                  )}
                  <div>
                    {music ? (
                      <h1 className="xm-text port-truncate">{music.title}</h1>
                    ) : (
                      <h1 className="xm-text">Title</h1>
                    )}
                    {music ? (
                      <h1 className="xm2-text avn-medium grey-text port-truncate">
                        {music.artist}
                      </h1>
                    ) : (
                      <h1 className="xm2-text avn-medium grey-text">Artist</h1>
                    )}
                  </div>
                  <div className="port-range">
                    <h1 className="xm-text avn-medium grey-text">
                      {music && music.id === musicSelect.id ? (
                        <Duration seconds={duration * played} />
                      ) : (
                        "0:00"
                      )}
                    </h1>
                    {music && music.id === musicSelect.id ? (
                      <input
                        id="play-range"
                        className="play-range"
                        type="range"
                        min={0}
                        max={0.999999}
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                        step="any"
                      />
                    ) : (
                      <input
                        id="play-range"
                        className="play-range"
                        type="range"
                        defaultValue={0}
                        min={0}
                        max={0}
                        step="any"
                      />
                    )}
                    {music ? (
                      <h1 className="xm-text avn-medium grey-text">
                        <Duration seconds={music.duration} />
                      </h1>
                    ) : (
                      <h1 className="xm-text avn-medium grey-text">
                        <Duration seconds={0} />
                      </h1>
                    )}
                  </div>
                  {music && music.id === musicSelect.id && (
                    <ReactPlayer
                      playing={play}
                      volume={0.1}
                      width="0"
                      height="0"
                      onProgress={handleProgress}
                      onDuration={handleDuration}
                      loop={true}
                      ref={inputRange}
                      url={music.url}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div id="tmn-section">
          <h1 className="bg-text">OUR TESTIMONIALS</h1>

          <div className="tmn-carousal-section">
            <div id="tmn-carousal" className="section">
              <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation={{
                  prevEl: ".person-prev",
                  nextEl: ".person-next",
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop
                autoplay={{
                  delay: 2500,
                }}
                loopAdditionalSlides={100}
                breakpoints={{
                  // when window width is >= 700px
                  700: {
                    slidesPerView: 4,
                  },
                  500: {
                    slidesPerView: 3,
                  }
                }}
              >
                {person}
              </Swiper>
              <div className="swiper-button-prev grey-pag person-prev"></div>
              <div className="swiper-button-next grey-pag person-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
