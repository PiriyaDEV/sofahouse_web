import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from 'swiper';
import ReactPlayer from 'react-player';
import Duration from '../function/Duration';
import 'swiper/swiper-bundle.css';

import '../../assets/css/text.css';
import '../../assets/css/page.css';
import '../../assets/css/page/portfolio.css';
import '../../assets/css/page/home.css';

// Img
import vinylMc from '../../assets/images/vinyl-mc.png';
import vinylPlay from '../../assets/images/vinyl-play.png';
import vinylDisc from '../../assets/images/vinyl-disc.png';
import headset from '../../assets/images/vinyl-hp.png';
import portPlay from '../../assets/images/port-play.png';
import stop from '../../assets/images/port-stop.png';

// import screenWidth from "../../assets/css/page/screen"

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

export default function Portfolio() {
  const musicList = useSelector((state) => state.music.musics);
  const [swiperRef, setSwiperRef] = useState(null);
  const [category, setCategory] = useState('Lyrics/Song Writing');
  const [musicCategory, setMusicCategory] = useState([]);
  const [play, setPlay] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const inputRange = useRef(null);
  const inputRange2 = useRef(null);
  const [musicListSelect, setMusicListSelect] = useState([
    {
      id: 0,
      title: 'Title',
      artist: 'Artist',
      duration: 0,
      music_url: '',
      cover_url: '',
      cat_lyrics_song: false,
      cat_music_prod: false,
      cat_vocal_rec: false,
      cat_music_score: false,
      cat_mix_master: false,
      show_homepage: false,
      created_at: 0,
    },
  ]);
  const [musicSelect, setMusicSelect] = useState({
    id: 0,
    title: 'Title',
    artist: 'Artist',
    duration: 0,
    music_url: '',
    cover_url: '',
    cat_lyrics_song: false,
    cat_music_prod: false,
    cat_vocal_rec: false,
    cat_music_score: false,
    cat_mix_master: false,
    show_homepage: false,
    created_at: 0,
  });

  const music = [];

  const categorySelect = (categoryName) => {
    setCategory(categoryName);
    if (categoryName === 'Lyrics/Song Writing') {
      setMusicCategory(
        musicList.filter((musicsList) => musicsList.cat_lyrics_song)
      );
    } else if (categoryName === 'Music Production') {
      setMusicCategory(
        musicList.filter((musicsList) => musicsList.cat_music_prod)
      );
    } else if (categoryName === 'Vocal Recording') {
      setMusicCategory(
        musicList.filter((musicsList) => musicsList.cat_vocal_rec)
      );
    } else if (categoryName === 'Music Score') {
      setMusicCategory(
        musicList.filter((musicsList) => musicsList.cat_music_score)
      );
    } else {
      setMusicCategory(
        musicList.filter((musicsList) => musicsList.cat_mix_master)
      );
    }

    swiperRef.slideTo(2, 0);
  };

  const checkCategory = (categoryName) => {
    let active = 'sm-text grey-text work-active';
    let inactive = 'sm-text grey-text';
    if (category === categoryName) {
      return active;
    } else {
      return inactive;
    }
  };

  useEffect(() => {
    setMusicCategory(
      musicList.filter((musicsList) => musicsList.cat_lyrics_song)
    );
    setMusicSelect(musicList[0]);
  }, [musicList]);

  useEffect(() => {
    if (musicCategory) {
      const musicList = [];
      let count = 5;
      if (musicCategory.length < 5) {
        count = musicCategory.length;
      }
      for (let i = 0; i < count; i++) {
        musicList.push(musicCategory[i]);
      }
      setMusicListSelect(musicList);
    }
  }, [musicCategory]);

  const picFromGGDrive = (link) => {
    let ggsrc = link.split('/');
    return 'https://drive.google.com/uc?export=view&id=' + ggsrc[5];
  };

  for (let i = 0; i < musicCategory.length; i += 1) {
    music.push(
      <SwiperSlide key={`slide-${i}`} tag='li'>
        <div className='carousal-music'>
          <img src={picFromGGDrive(musicCategory[i].cover_url)} alt='' />
          {musicCategory ? (
            <p className='xm2-text truncate'>{musicCategory[i].title}</p>
          ) : (
            <p className='xm2-text truncate'>Title</p>
          )}
          {musicCategory ? (
            <p className='xm2-text avn-medium grey-text truncate'>
              {musicCategory[i].artist}
            </p>
          ) : (
            <p className='xm2-text avn-medium grey-text truncate'>Artist</p>
          )}
        </div>
      </SwiperSlide>
    );
  }

  const Testimonial = [
    {
      name: 'Mayyanee Techaumporn (Mim)',
      picture:
        'https://drive.google.com/file/d/1GnIlGJoXlIEdBYlIYX236Ezb00RaUqa3/view?usp=sharing',
      review:
        'คุยง่าย ทำงานดี ส่งตรงเวลา ราคาเป็นมิตรมากค่ะ ถ้ามีโอกาสหวังว่าจะได้ทำงานด้วยกันอีกนะคะ 🥺',
    },
    {
      name: 'Pocketdog Production',
      picture:
        'https://drive.google.com/file/d/1voF6u6b0H5WZqwzf-4n-KptOME-Stwes/view?usp=sharing',
      review:
        'เพลง Night Stroll นั้นเป็นเพลงที่เป็น Theme หลักของ 00:00 Café ที่กล่าวถึงร้านกาแฟที่เปิดทำการในเวลาเที่ยงคืนจนถึงพระอาทิตย์ขึ้น โดยเพลงดังกล่าว อยากจะนำเสนอถึงความอบอุ่นในร้านคาเฟ่เล็ก ๆ ท่ามกลางเมืองใหญ่ที่แสนเหน็บหนาว สามารถเข้ามาติดตามผลงานได้ที่ ช่อง 00:00 Café Official',
    },
    {
      name: 'บุญรักษา สาแสง (ชมพู)',
      picture:
        'https://drive.google.com/file/d/1MBg-lclldGxolJNmQEB1EdGyc4HG8s2d/view?usp=sharing',
      review:
        'Sofa house เป็นกลุ่มคนที่เดาใจเก่งมากฮะ ไม่ต้องกลัวถ้าภาพไม่ชัดหรือเขินๆ เวลาบรีฟ ลองพูดสิ่งที่รู้สึกมาก่อน เผื่อน้องๆ ช่วยเราได้ 🤣 จริงๆ ตอนทำเราแค่ส่ง ref. กับดราฟต์หนังคร่าวๆ แล้วให้ sofa house ช่วยคิดให้หมดเลย ถูกใจมากและรู้สึกขอบคุณมากๆ ฮะ',
    },
    {
      name: 'พรรคใส่ใจ',
      picture:
        'https://drive.google.com/file/d/1YEKIi_17xiDx_1NyHoGU8tR0-XgATT-o/view?usp=sharing',
      review:
        'เป็นเพลงที่ทุกคนในทีมชอบมาก ฟังแล้วติดหู แล้วก็สื่อถึงเรื่องราวของพวกเราได้ครบถ้วนเลย การติดต่อประสานงาน หรือการพูดคุยคือง่ายมาก เป็นกันเอง ทางผู้ทำก็ปรับแก้ได้ตามที่เราขอทุกอย่าง แล้วก็ช่วยแนะนำดีมากก',
    },
    {
      name: 'Tinsrd',
      picture:
        'https://drive.google.com/file/d/1bWV2J17re6Ja3uL1Rt3iIH7VCvHX6uLi/view?usp=sharing',
      review:
        'ขอบคุณ Sofa House มากๆ สำหรับการให้คำปรึกษาเรื่องดนตรีและการทำเพลง ประทับใจทีมงานที่คอยช่วยเหลือตั้งแต่ต้นจนจบผลงานเลย',
    },
    {
      name: 'Dean Chumpoon',
      picture:
        'https://drive.google.com/file/d/1dbRAXmGubqKb6KPwFd6SAtvzGP0m3ka7/view?usp=sharing',
      review:
        'For me, Sofahouse perfectly captures the artist(myself)’s personality. I had the privilege of working with their producers numerous times and it’s safe to say they know exactly what I want. Another thing worth mentioning is that, I really love the fact that I can edit as many times as I want. Sometimes, It takes a long time for the mix to be perfect and I want to thank this company for being extremely patient with me. ',
    },
    {
      name: 'เนย',
      picture:
        'https://drive.google.com/file/d/1UDoRj-uxJCuNfJOBOeLv7zu6jlHIZP90/view?usp=sharing',
      review:
        'เป็นสตูที่เป็นกันเองมาก ไม่รู้ว่าเพราะเป็นเพื่อนกันด้วยหรือเปล่า แล้วเวลาเราได้ใช้สตูคือบอกเลยว่าคุ้มมาก ได้ใช้เต็มเวลา บางครั้งเกินเวลาด้วย ที่สำคัญทุกคนในโซฟาเฮ้าส์ทำเกินหน้าที่มาก ระหว่างอัดก็คือมีให้คำแนะนำ คอยเสนอสิ่งที่จะทำให้เราทำงานได้ดีขึ้น ทั้งๆที่ทุกคนไม่จำเป็นต้องทำมันด้วยซ้ำ',
    },
    {
      name: 'Kanchai',
      picture:
        'https://drive.google.com/file/d/133gkwIdF8LZbSh8Ifks384kOZWzJ7KpQ/view?usp=sharing',
      review:
        'ห้องสตูบรรยากาศเป็นกันเองดีค่ะ ทำให้รู้สึกผ่อนคลาย ไม่รู้สึกอึดอัดเวลาทำงาน ถึงจะตั้งอยู่ในที่ที่มีเสียงรบกวนค่อนข้างมาก แต่พอเข้าไปอยู่ในสตูคือเงียบกริบไม่มีเสียงเล็ดลอดเข้ามาเลยค่ะ ทำให้การทำงานเป็นไปอย่างราบรื่นค่ะ',
    },
  ];

  const person = [];
  for (let i = 0; i < Testimonial.length; i += 1) {
    person.push(
      <SwiperSlide key={`slide-${i}`} tag='li'>
        <div className='carousal-tmn'>
          <img src={picFromGGDrive(Testimonial[i].picture)} alt='' />
          <h1 className='xm2-text'>{Testimonial[i].name}</h1>
          <p className='xm2-text skv-medium grey-text'>
            {Testimonial[i].review}
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
      var tObj = document.getElementsByClassName('play-range');
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
    inputRange2.current.seekTo(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleplay = () => {
    setPlay(true);
  };

  const handlepause = () => {
    setPlay(false);
  };

  const slideChange = (e) => {
    setPlay(false);
    setPlayed(0);
    var tObj = document.getElementsByClassName('play-range');
    for (var i = 0; i < tObj.length; i++) {
      tObj[i].value = 0;
    }
    if (musicCategory) {
      const musicList = [];

      let count = 0;

      if (musicCategory.length >= 5) {
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
      }
      else {
        for (let i = 0; i < musicCategory.length; i++) {
          musicList.push(musicCategory[i]);
        }
      }
      setMusicSelect(musicList[0]);
      setMusicListSelect(musicList);
    }
  };

  return (
    <div id='portfolio' className='section'>
      <div className='page-container'>
        {/* Work Section */}
        <div id='work-section'>
          <div id='work-menu'>
            {musicList.filter((musicsList) => musicsList.cat_lyrics_song)
              .length >= 1 ? (
              <h1
                onClick={() => categorySelect('Lyrics/Song Writing')}
                className={checkCategory('Lyrics/Song Writing')}
              >
                Lyrics/ Song Writing
              </h1>
            ) : (
              <h1 className={checkCategory('Lyrics/Song Writing')}>
                Lyrics/ Song Writing
              </h1>
            )}

            {musicList.filter((musicsList) => musicsList.cat_music_prod)
              .length >= 1 ? (
              <h1
                onClick={() => categorySelect('Music Production')}
                className={checkCategory('Music Production')}
              >
                Music Production
              </h1>
            ) : (
              <h1 className={checkCategory('Music Production')}>
                Music Production
              </h1>
            )}

            {musicList.filter((musicsList) => musicsList.cat_vocal_rec)
              .length >= 1 ? (
              <h1
                onClick={() => categorySelect('Vocal Recording')}
                className={checkCategory('Vocal Recording')}
              >
                Vocal Recording
              </h1>
            ) : (
              <h1 className={checkCategory('Vocal Recording')}>
                Vocal Recording
              </h1>
            )}

            {musicList.filter((musicsList) => musicsList.cat_music_score)
              .length >= 1 ? (
              <h1
                onClick={() => categorySelect('Music Score')}
                className={checkCategory('Music Score')}
              >
                Music Score
              </h1>
            ) : (
              <h1 className={checkCategory('Music Score')}>Music Score</h1>
            )}

            {musicList.filter((musicsList) => musicsList.cat_mix_master)
              .length >= 1 ? (
              <h1
                onClick={() => categorySelect('Mixing/Mastering')}
                className={checkCategory('Mixing/Mastering')}
              >
                Mixing & Mastering
              </h1>
            ) : (
              <h1 className={checkCategory('Mixing/Mastering')}>
                Mixing & Mastering
              </h1>
            )}
          </div>
          <div className='section'>
            <div id='work-carousal' className='section'>
              <Swiper
                id='main'
                onSwiper={setSwiperRef}
                tag='section'
                wrapperTag='ul'
                navigation={{
                  prevEl: '.music-prev',
                  nextEl: '.music-next',
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
                  },
                }}
              >
                {music}
              </Swiper>
              {music && music.length >= 5 ? (
                <div>
                  <div className='swiper-button-prev music-prev'></div>
                  <div className='swiper-button-next music-next'></div>
                </div>
              ) : (
                <div>
                  <div className='swiper-button-prev music-prev block-interact'></div>
                  <div className='swiper-button-next music-next block-interact'></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Play Section */}
        <div id='port-play-section'>
          <div id='vinyl-mb-container'>
            <div id='port-vinyl'>
              <div id='home-vinyl-section'>
                <img className='port-vinyl vinyl-play' src={vinylPlay} alt='' />
                {play ? (
                  <img
                    className='port-vinyl vinyl-disc rotate'
                    src={vinylDisc}
                    alt=''
                  />
                ) : (
                  <img
                    className='port-vinyl vinyl-disc'
                    src={vinylDisc}
                    alt=''
                  />
                )}
                <img className='port-vinyl headset' src={headset} alt='' />
                <img className='port-vinyl vinyl-mc' src={vinylMc} alt='' />
              </div>
              {musicSelect ? (
                <p className='xm-text truncate'>{musicSelect.title}</p>
              ) : (
                <h1 className='xm-text'>Title</h1>
              )}

              {musicSelect ? (
                <h1 className='xm2-text avn-medium grey-text truncate'>
                  {musicSelect.artist}
                </h1>
              ) : (
                <h1 className='xm2-text avn-medium grey-text'>Artist</h1>
              )}
            </div>
            <div id='port-play-text' className='play-text-mb'>
              {musicSelect && (
                <ReactPlayer
                  id='port-vdo-player'
                  playing={play}
                  volume={0.1}
                  // onProgress={handleProgress}
                  onPlay={handleplay}
                  onPause={handlepause}
                  // onDuration={handleDuration}
                  muted={true}
                  loop={true}
                  ref={inputRange2}
                  url={musicSelect.music_url}
                />
              )}
            </div>
          </div>

          <div id='port-play-text' className='section play-text-pc'>
            {musicSelect && (
              <ReactPlayer
                id='port-vdo-player'
                playing={play}
                volume={0.1}
                onProgress={handleProgress}
                onDuration={handleDuration}
                onPlay={handleplay}
                onPause={handlepause}
                loop={true}
                ref={inputRange}
                url={musicSelect.music_url}
              />
            )}
          </div>

          <div>
            {musicListSelect &&
              musicListSelect.map((music, index) => (
                <div className='port-play-box' key={index}>
                  {play === true && music.id === musicSelect.id ? (
                    <img
                      onClick={() => togglePlay(index)}
                      className='play-btn'
                      src={stop}
                      alt=''
                    />
                  ) : (
                    <img
                      onClick={() => togglePlay(index)}
                      className='play-btn'
                      src={portPlay}
                      alt=''
                    />
                  )}
                  <div>
                    {music ? (
                      <h1 className='xm-text port-truncate'>{music.title}</h1>
                    ) : (
                      <h1 className='xm-text'>Title</h1>
                    )}
                    {music ? (
                      <h1 className='xm2-text avn-medium grey-text port-truncate'>
                        {music.artist}
                      </h1>
                    ) : (
                      <h1 className='xm2-text avn-medium grey-text'>Artist</h1>
                    )}
                  </div>
                  <div className='port-range'>
                    <h1 className='xm-text avn-medium grey-text'>
                      {music && music.id === musicSelect.id ? (
                        <Duration seconds={duration * played} />
                      ) : (
                        '0:00'
                      )}
                    </h1>
                    {music && music.id === musicSelect.id ? (
                      <input
                        id='play-range'
                        className='play-range'
                        type='range'
                        min={0}
                        max={0.999999}
                        value={played}
                        // defaultValue={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                        step='any'
                      />
                    ) : (
                      <input
                        id='play-range'
                        className='play-range'
                        type='range'
                        defaultValue={0}
                        min={0}
                        max={0}
                        step='any'
                      />
                    )}
                    {music ? (
                      <h1 className='xm-text avn-medium grey-text'>
                        <Duration seconds={music.duration} />
                      </h1>
                    ) : (
                      <h1 className='xm-text avn-medium grey-text'>
                        <Duration seconds={0} />
                      </h1>
                    )}
                  </div>
                  {/* {music && music.id === musicSelect.id && (
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
                  )} */}
                </div>
              ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div id='tmn-section'>
          <h1 className='bg-text'>OUR TESTIMONIALS</h1>

          <div className='tmn-carousal-section'>
            <div id='tmn-carousal' className='section'>
              <Swiper
                id='main'
                tag='section'
                wrapperTag='ul'
                navigation={{
                  prevEl: '.person-prev',
                  nextEl: '.person-next',
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop
                autoplay={{
                  delay: 3500,
                }}
                loopAdditionalSlides={100}
                breakpoints={{
                  // when window width is >= 700px
                  1200: {
                    slidesPerView: 4,
                  },
                  500: {
                    slidesPerView: 3,
                  },
                }}
              >
                {person}
              </Swiper>
              <div className='swiper-button-prev grey-pag person-prev'></div>
              <div className='swiper-button-next grey-pag person-next'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
