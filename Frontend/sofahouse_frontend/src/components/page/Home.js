import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skipMusic } from "../../redux";
import ReactPlayer from "react-player";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Img
import vinylMc from "../../assets/images/vinyl-mc.png";
import vinylPlay from "../../assets/images/vinyl-play.png";
import vinylDisc from "../../assets/images/vinyl-disc.png";
import headset from "../../assets/images/vinyl-hp.png";
import longLogo from "../../assets/images/long-logo.png";
// import bbl from "../../assets/images/bbl.png";
// import bbr from "../../assets/images/bbr.png";

import desc1 from "../../assets/images/desc/desc1.png";
import desc2 from "../../assets/images/desc/desc2.png";
import desc3 from "../../assets/images/desc/desc3.png";

// Temp
import temp1 from "../../assets/images/temp/insecure.png";

import Studio1 from "../../assets/images/IMG_3745.JPG";
// import Studio2 from "../../assets/images/IMG_3746.JPG"

//Js
import PlayConsole from "../element/PlayConsole";

export default function Home() {
  const dispatch = useDispatch();

  const inputRange = useRef(null);
  const [youtubePlay, setYoutubePlay] = useState(false);

  const tempInfo = () => [
    {
      title: "Title",
      artist: "Artist",
      tempPic: temp1,
    },
  ];

  // const [play, setPlay] = useState(true);
  const music = useSelector((state) => state.music);
  const musicSort = useSelector((state) =>
    state.music.musics
      .map((music) =>
        music.pri_homepage === 0
          ? { ...music, pri_homepage: 2147483647 }
          : music
      )
      .sort((a, b) => a.pri_homepage - b.pri_homepage)
  );

  const skipMusics = (musicSelected) => {
    for (let i = 0; i < musicSort.length; i++) {
      if (musicSort[i].id === musicSelected.id) {
        dispatch(skipMusic(i, musicSort));
      }
    }
  };

  const picFromGGDrive = (link) => {
    let ggsrc = link.split("/");
    return "https://drive.google.com/uc?export=view&id=" + ggsrc[5];
  };

  useEffect(() => {
    inputRange.current.seekTo(parseFloat(music.durationPlayed.duration));
  }, [music.durationPlayed.duration]);

  const handleplay = () => {
    console.log("playing");
    setYoutubePlay(true);
  };

  const handlepause = () => {
    console.log("pause");
    setYoutubePlay(false);
  };

  const homeDisplay = [];
  for (let i = 0; i < musicSort.length; i += 1) {
    if (musicSort[i].show_homepage) {
      homeDisplay.push(
        <SwiperSlide key={`home-slide-${i}`} tag="li">
          <div onClick={() => skipMusics(musicSort[i])} className="music-flex">
            {musicSort ? (
              <img
                className="pointer"
                src={picFromGGDrive(musicSort[i].cover_url)}
                alt=""
              />
            ) : (
              <img src={tempInfo.tempPic} alt="" />
            )}
            {musicSort ? (
              <h1 className="ssm-text truncate pointer">
                {musicSort[i].title}
              </h1>
            ) : (
              <h1 className="ssm-text">Title</h1>
            )}
            {musicSort ? (
              <h1 className="xm-text avn-medium grey-text truncate pointer">
                {musicSort[i].artist}
              </h1>
            ) : (
              <h1 className="xm-text avn-medium grey-text">Artist</h1>
            )}
          </div>
        </SwiperSlide>
      );
    }
  }

  return (
    <div id="home" className="section">
      <div className="page-container">
        {/* Main Section */}
        <div id="main-section">
          <div id="main-section-play-box">
            <div id="home-vinyl-section">
              <img className="home-vinyl vinyl-play" src={vinylPlay} alt="" />
              <img
                // className="home-vinyl vinyl-disc rotate"
                className={`home-vinyl vinyl-disc ${
                  youtubePlay === true ? "rotate" : null
                }`}
                src={vinylDisc}
                alt=""
              />
              <img className="home-vinyl headset" src={headset} alt="" />
              <img className="home-vinyl vinyl-mc" src={vinylMc} alt="" />
            </div>
            {music.select ? (
              <p className="bg-text home-play-text truncate">
                {music.select.title}
              </p>
            ) : (
              <p className="bg-text home-play-text truncate">
                {tempInfo.title}
              </p>
            )}
            {music.select ? (
              <p className="sm-text home-play-text avn-medium grey-text truncate">
                {music.select.artist}
              </p>
            ) : (
              <p className="sm-text home-play-text avn-medium grey-text truncate">
                {tempInfo.artist}
              </p>
            )}
          </div>

          <div id="mid-img" className="section">
            <ReactPlayer
              playing={music.durationPlayed.play}
              onPlay={handleplay}
              onPause={handlepause}
              controls={false}
              volume={0.1}
              muted={true}
              ref={inputRange}
              url={music.select.music_url}
              className="home-player"
              // controls={false}
            />
          </div>

          <div id="main-music-section">
            <div className="section">
              <div id="home-carousal">
                <Swiper
                  id="home-swiper"
                  tag="section"
                  wrapperTag="ul"
                  // navigation={{
                  //   prevEl: ".music-prev",
                  //   nextEl: ".music-next",
                  // }}
                  slidesPerView={2}
                  loop
                  pagination={{ clickable: true }}
                  loopAdditionalSlides={100}
                  centeredSlides={false}
                  allowTouchMove={false}
                  spaceBetween={10}
                  autoplay={{
                    delay: 3500,
                  }}
                >
                  {homeDisplay}
                </Swiper>
              </div>
            </div>

            <div onClick={() => linkPath("portfolio")} id="main-btn">
              <button className="bg-text">HEY, SHOW MORE</button>
            </div>
          </div>
        </div>
        {/* Play Section */}
        <PlayConsole youtubePlay={youtubePlay} />
        {/* Description Section */}
        <div id="desc-section">
          <div>
            <img id="desc-logo" src={longLogo} alt="" />
          </div>

          <p className="skv-medium bg-text">
            พวกเราเป็น One-stop music service
            ที่ผลิตงานเพลงและดนตรีครบจบในที่เดียวอย่างเป็นกันเอง <br />
            โดยทีมงานรุ่นใหม่ไฟแรงมากประสบการณ์ และมีแพชชั่นในการทำเพลง
            ที่พร้อมจะรับฟัง <br /> และสร้างสรรค์ผลงานไปพร้อมกับคุณ ตั้งแต่
            pre-production ไปจนถึง post-production
            <br />
            <div className="p-spacing" />
            โดยทีมงานจะไม่มีการจำกัดจำนวนครั้งการแก้ แต่เป็น
            <span className="skv-bold">“Unlimited Feedback”</span>
            <br />
            เพื่อให้ผลงานออกมาดีที่สุด
            <span className="home-link" onClick={() => linkPath("/contact")}>
              ปรึกษา Sofahouse ตอนนี้ (Click!)
            </span>
          </p>

          <div id="desc-banner-section">
            <div id="desc-banner">
              <img src={Studio1} alt="" />
            </div>
            <div id="desc-abs">
              <div id="banner-flex-section">
                <img className="banner-disc" src={desc1} alt="" />
                <img className="banner-disc" src={desc2} alt="" />
                <img className="banner-disc" src={desc3} alt="" />
              </div>
            </div>
          </div>

          {/* <p className="skv-medium sm-text opa-text">
            “เรา <span className="skv-bold">‘เข้าใจ’</span>{" "}
            ว่าในการสร้างแบรนด์ของคุณนั้น จำเป็นต้องมีจุดประสงค์ รวมทั้ง Mood
            and Tone ที่ชัดเจน <br />
            และอีกหลายองค์ประกอบเพื่อตอบโจทย์การสื่อสารแบรนด์ของคุณอย่างมีคุณภาพ”
          </p>

          <div className="section">
            <hr className="blue-line"></hr>
          </div> */}

          <p className="skv-bold">
            <span className="sm-text">
              จากประสบการณ์ที่เราได้ผลิตผลงานให้ศิลปิน, นักร้อง-นักดนตรีอิสระ,
              องค์กร และแบรนด์สินค้าต่างๆ
            </span>
            <br />
            <div className="p-spacing" />
            <span className="bg-text">
              ทุกขั้นตอนของ SOFA HOUSE มี 3 Values
              ข้างต้นที่จะช่วยนำเสนอความโดดเด่น <br />
              และเอกลักษณ์ของคุณออกมาให้ดีที่สุด
              เพื่อตอบโจทย์กลุ่มเป้าหมายที่คุณวางไว้
            </span>
          </p>
        </div>

        <h1 className="home-follow-title bg-text">
          <span className="sm-text">Follow our channels</span>
        </h1>

        {/* Update Section */}
        <div id="update-section">
          <div>
            {/* <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsofahouse.th%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=366483168240868"
              title="sofaFB"
              className="fb-iframe"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe> */}

            {/* <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsofahouse.th%2Fposts%2F204726498206111&width=500&show_text=true&appId=2449916458614199&height=737"
              width="500"
              height="737"
              scrolling="no"
              frameborder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe> */}

            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsofahouse.th%2Fposts%2F122500963095332&width=500&show_text=true&appId=2449916458614199&height=721"
              title="sofaFB"
              className="fb-iframe"
              // width="500"
              // height="721"
              scrolling="no"
              frameborder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div>
            <iframe
              title="sofaIG"
              className="ig-iframe"
              scrolling="no"
              src="https://www.instagram.com/p/CW5cX7ut9B8/embed"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
