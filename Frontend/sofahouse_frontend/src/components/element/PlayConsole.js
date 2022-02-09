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

export default function PlayConsole(props) {
  const [muted, setMuted] = useState(true);
  const [play, setPlay] = useState(true);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const inputRange = useRef(null);
  const [currentId, setId] = useState(1);
  // const [toggleShuffle, setShuffle] = useState(false);
  const [List,setList] = useState([
    {
        "id": 1,
        "title": "ท้องฟ้า",
        "artist": "PAPER",
        "url": "https://www.youtube.com/watch?v=5OtqLbG6T04",
        "category": "Unknown"
    },
    {
        "id": 2,
        "title": "Memories",
        "artist": "Maroom 5",
        "url": "https://www.youtube.com/watch?v=SlPhMPnQ58k",
        "category": "Unknown"
    },
    {
        "id": 3,
        "title": "Perfect",
        "artist": "Ed Sheeran",
        "url": "https://www.youtube.com/watch?v=LI11T-ChbnE",
        "category": "Unknown"
    }
  ])

  const toggleMute = () => {
    setMuted(!muted);
  };

  const togglePlay = () => {
    setPlay(!play);
    props.func(!play);
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

  const handleEnded = () => {
    if(currentId !== List.length) {
      setId(currentId+1)
    } else {
      setId(1)
    }
  }

  const previousId = () => {
    if(currentId > 1) {
      setId(currentId-1)
    } else {
      setId(List.length)
    }
  }

  const nextId = () => {
    if(currentId !== List.length) {
      setId(currentId+1)
    } else {
      setId(1)
    }
    
  }

  const shuffleId = () => {
    setList(List.sort((a, b) => 0.5 - Math.random()))
  }

  return (
    <div>
      {List[currentId-1].url && (
        <ReactPlayer
        playing={play}
        volume={0.1}
        width="0"
        height="0"
        muted={muted}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onEnded={handleEnded}
        ref={inputRange}
        url={List[currentId-1].url}
      />
      )}
      <div id="play-section">
        <div id="left-icon" className="section">
          <img className="pink-icon" onClick={() => previousId()} src={leftPink} alt="" />
        </div>
        <div id="middle-console">
          <div className="section">
            <img className="play-icon" onClick={() => shuffleId()} src={shuffle} alt="" />
            <img className="play-icon" onClick={() => previousId()} src={back} alt="" />
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
            <img className="play-icon" onClick={() => nextId()} src={next} alt="" />
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
          <img className="pink-icon" onClick={() => nextId()} src={rightPink} alt="" />
        </div>
      </div>
    </div>
  );
}
