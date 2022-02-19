import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { skipMusic } from "../../redux";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/home.css";

// Img
import vinylMc from "../../assets/images/vinyl-mc.png";
import vinylPlay from "../../assets/images/vinyl-play.png";
import vinylDisc from "../../assets/images/vinyl-disc.png";
import headset from "../../assets/images/vinyl-hp.png";
// import centerTemp from "../../assets/images/temp/temp-mid.png";
import longLogo from "../../assets/images/long-logo.png";
import bbl from "../../assets/images/bbl.png";
import bbr from "../../assets/images/bbr.png";

import desc1 from "../../assets/images/desc/desc1.png";
import desc2 from "../../assets/images/desc/desc2.png";
import desc3 from "../../assets/images/desc/desc3.png";

// Temp
// import temp1 from "../../assets/images/temp/insecure.png";
// import temp2 from "../../assets/images/temp/lmb.png";

//Js
import PlayConsole from "../element/PlayConsole";

export default function Home() {
  const dispatch = useDispatch();
  const [temp1, setTemp1] = useState({
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0,
  });
  const [temp2, setTemp2] = useState({
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0,
  });

  const tempInfo = () => [
    {
      title: "Title",
      artist: "Artist",
      tempPic: temp1,
    },
  ];

  const [play, setPlay] = useState(true);
  const carousel1 = useRef();
  const carousel2 = useRef();
  const carousel3 = useRef();
  const music = useSelector((state) => state.music);

  const skipMusics = (musicSelected) => {
    for (let i = 0; i < music.musics.length; i++) {
      if (music.musics[i].id === musicSelected.id) {
        dispatch(skipMusic(i, music.musics));
      }
    }
  };

  const handleCarousel = (position) => {
    if (position === 1) {
      carousel1.current.className = "blue-clr blue-clr-active";
      carousel2.current.className = "blue-clr";
      carousel3.current.className = "blue-clr";
    } else if (position === 2) {
      carousel1.current.className = "blue-clr";
      carousel2.current.className = "blue-clr blue-clr-active";
      carousel3.current.className = "blue-clr";
    } else {
      carousel1.current.className = "blue-clr";
      carousel2.current.className = "blue-clr";
      carousel3.current.className = "blue-clr blue-clr-active";
    }
  };

  useEffect(() => {
    const musicList = () => {
      if (music.select.index === music.musics.length - 1) {
        setTemp1(music.musics[0]);
      } else {
        setTemp1(music.musics[music.select.index + 1]);
      }
      if (music.select.index + 1 === music.musics.length - 1) {
        setTemp2(music.musics[0]);
      } else if (music.select.index === music.musics.length - 1) {
        setTemp2(music.musics[1]);
      } else {
        setTemp2(music.musics[music.select.index + 2]);
      }
    };

    musicList();
    handleCarousel(1);
  }, [music]);

  const musicListCarousel = (position1, position2) => {
    if (music.select.index + position1 <= music.musics.length - 1) {
      setTemp1(music.musics[music.select.index + position1]);
    } else {
      setTemp1(
        music.musics[music.select.index + position1 - music.musics.length]
      );
    }
    if (music.select.index + position2 <= music.musics.length - 1) {
      setTemp2(music.musics[music.select.index + position2]);
    } else {
      setTemp2(
        music.musics[music.select.index + position2 - music.musics.length]
      );
    }
  };

  const thumnail = (url) => {
    let thumbnail1 = "https://img.youtube.com/vi/";
    let mediumQuality = "/mqdefault.jpg";
    // let maxQuality = "/maxresdefault.jpg";

    return thumbnail1 + url.split("v=").pop().split("&")[0] + mediumQuality;
  };

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
            {music.select ? (
              <h1 className="bg-text">{music.select.title}</h1>
            ) : (
              <h1 className="bg-text">{tempInfo.title}</h1>
            )}
            {music.select ? (
              <h1 className="sm-text avn-medium grey-text">
                {music.select.artist}
              </h1>
            ) : (
              <h1 className="sm-text avn-medium grey-text">
                {tempInfo.artist}
              </h1>
            )}
          </div>

          <div id="mid-img" className="section">
            {music.select ? (
              <img src={thumnail(music.select.url)} alt="" />
            ) : (
              <img src={tempInfo.tempPic} alt="" />
            )}
          </div>

          <div id="main-music-section">
            <div id="main-music">
              <div onClick={() => skipMusics(temp1)} className="music-flex">
                {temp1 ? (
                  <img src={thumnail(temp1.url)} alt="" />
                ) : (
                  <img src={tempInfo.tempPic} alt="" />
                )}
                {temp1 ? (
                  <h1 className="ssm-text">{temp1.title}</h1>
                ) : (
                  <h1 className="ssm-text">Title</h1>
                )}
                {temp1 ? (
                  <h1 className="xm-text avn-medium grey-text">
                    {temp1.artist}
                  </h1>
                ) : (
                  <h1 className="xm-text avn-medium grey-text">Artist</h1>
                )}
              </div>

              <div onClick={() => skipMusics(temp2)} className="music-flex">
                {temp2 ? (
                  <img src={thumnail(temp2.url)} alt="" />
                ) : (
                  <img src={tempInfo.tempPic} alt="" />
                )}
                {temp2 ? (
                  <h1 className="ssm-text">{temp2.title}</h1>
                ) : (
                  <h1 className="ssm-text">Title</h1>
                )}
                {temp2 ? (
                  <h1 className="xm-text avn-medium grey-text">
                    {temp2.artist}
                  </h1>
                ) : (
                  <h1 className="xm-text avn-medium grey-text">Artist</h1>
                )}
              </div>
            </div>

            <div className="section">
              <span
                ref={carousel1}
                onClick={() => {
                  handleCarousel(1);
                  musicListCarousel(1, 2);
                }}
                className="blue-clr blue-clr-active"
              ></span>
              <span
                ref={carousel2}
                onClick={() => {
                  handleCarousel(2);
                  musicListCarousel(3, 4);
                }}
                className="blue-clr"
              ></span>
              <span
                ref={carousel3}
                onClick={() => {
                  handleCarousel(3);
                  musicListCarousel(5, 6);
                }}
                className="blue-clr"
              ></span>
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
              className="fb-iframe"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
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
  window.location.href = value;
};
