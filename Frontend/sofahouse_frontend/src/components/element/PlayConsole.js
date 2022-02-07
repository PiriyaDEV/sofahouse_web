import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Duration from "../function/Duration";

import "../../assets/css/components/playConsole.css";

//Icon
import leftPink from "../../assets/images/play/leftPink.png";
import rightPink from "../../assets/images/play/rightPink.png";
import shuffle from "../../assets/images/play/shuffle.png";
import back from "../../assets/images/play/previous.png";
import stop from "../../assets/images/play/pause.png";
import playIcon from "../../assets/images/play/play.png";
import next from "../../assets/images/play/next.png";
import unmute from "../../assets/images/play/unmute.png";
import mute from "../../assets/images/play/mute.png";

export default function PlayConsole() {
  const [muted, setMuted] = useState(true);
  const [play, setPlay] = useState(true);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const inputRange = useRef(null);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const togglePlay = () => {
    setPlay(!play);
  };

  const handleSeekMouseDown = (e) => {
    setSeeking(true);
  };

  const handleSeekChange = (e) => {
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

  return (
    <div>
      <ReactPlayer
        playing={play}
        volume={0.1}
        width="0"
        height="0"
        muted={muted}
        onProgress={handleProgress}
        onDuration={handleDuration}
        ref={inputRange}
        url="https://www.youtube.com/watch?v=6zhvi9RUtvo&list=RD6zhvi9RUtvo&start_radio=1"
        key="https://www.youtube.com/watch?v=6zhvi9RUtvo&list=RD6zhvi9RUtvo&start_radio=1"
      />
      <div id="play-section">
        <div id="left-icon" className="section">
          <img className="pink-icon" src={leftPink} alt="" />
        </div>
        <div id="middle-console">
          <div className="section">
            <img className="play-icon" src={shuffle} alt="" />
            <img className="play-icon" src={back} alt="" />
            {play === true ? (
              <img
                onClick={() => togglePlay()}
                className="play-icon mid-icon"
                src={stop}
                alt=""
              />
            ) : (
              <img
                onClick={() => togglePlay()}
                className="play-icon mid-icon"
                src={playIcon}
                alt=""
              />
            )}
            <img className="play-icon" src={next} alt="" />
            {muted === false ? (
              <img
                className="play-icon"
                src={unmute}
                alt=""
                onClick={() => toggleMute()}
              />
            ) : (
              <img
                className="play-icon"
                src={mute}
                alt=""
                onClick={() => toggleMute()}
              />
            )}
          </div>
          <div id="play-range-section" className="section">
            <h1 className="xm-text grey-text">
              <Duration seconds={duration * played} />
            </h1>
            <input
              id="play-range"
              type="range"
              min={0}
              max={0.999999}
              value={played}
              onMouseDown={handleSeekMouseDown}
              onChange={handleSeekChange}
              onMouseUp={handleSeekMouseUp}
              step="any"
            />
            <h1 className="xm-text grey-text">
              <Duration seconds={duration} />
            </h1>
          </div>
        </div>
        <div id="right-icon" className="section">
          <img className="pink-icon" src={rightPink} alt="" />
        </div>
      </div>
    </div>
  );
}
