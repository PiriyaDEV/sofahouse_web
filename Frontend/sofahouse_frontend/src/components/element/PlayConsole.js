import React, { useState, useRef , useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import ReactPlayer from "react-player";
import Duration from "../function/Duration";
import { nextMusic , previousMusic , shuffleMusic , getDuration} from '../../redux'

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

  const musicSelect = useSelector(state => state.music.select)
  const musicList = useSelector(state => state.music.musics)
  const dispatch = useDispatch()

  const [muted, setMuted] = useState(false);
  const [play, setPlay] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const inputRange = useRef(null);

  useEffect(() => {
    if(props.youtubePlay === true) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  }, [props]);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const togglePlay = () => {
    dispatch(getDuration(!play,played))
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
    dispatch(getDuration(play,e.target.value))
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
    dispatch(nextMusic(musicSelect,musicList))
  };

  const previousId = () => {
    dispatch(previousMusic(musicSelect,musicList))
  };

  const nextId = () => {
    dispatch(nextMusic(musicSelect,musicList))
  };

  const shuffleId = () => {
    dispatch(shuffleMusic(musicList))
  };

  return (
    <div>
      {musicSelect && (
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
          url={musicSelect.url}
        />
      )}
      <div id="play-section">
        <div id="left-icon" className="section">
          <img
            className="pink-icon"
            onClick={() => previousId()}
            src={leftPink}
            alt=""
          />
        </div>
        <div id="middle-console">
          <div className="section">
            <img
              className="play-icon"
              onClick={() => shuffleId()}
              src={shuffle}
              alt=""
            />
            <img
              className="play-icon"
              onClick={() => previousId()}
              src={back}
              alt=""
            />
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
            <img
              className="play-icon"
              onClick={() => nextId()}
              src={next}
              alt=""
            />
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
          <img
            className="pink-icon"
            onClick={() => nextId()}
            src={rightPink}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
