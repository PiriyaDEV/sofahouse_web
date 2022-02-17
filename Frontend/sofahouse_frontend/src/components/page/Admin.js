import React, { useState } from "react";
import musicService from "../../services/music.service";
import { useSelector , useDispatch } from 'react-redux'

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/admin.css";
import "../../assets/css/page/login.css";
import { fetchMusic } from '../../redux'

import temp1 from "../../assets/images/temp/insecure.png"


export default function Admin() {
  const dispatch = useDispatch()
  
  const initialErrorState = {
    show: false,
    message: "",
  };

  const initialAddMusicState = {
    title: "",
    artist: "",
    url: "",
    category: "Lyrics/Song Writing",
  };

  const initialEditMusicState = {
    id: 0,
    title: "",
    artist: "",
    url: "",
    category: "Lyrics/Song Writing",
  }

  // music list
  const musicList = useSelector(state => state.music.musics);
  // add new music
  const [addMusicError, setAddMusicError] = useState(initialErrorState);
  const [newMusic, setNewMusic] = useState(initialAddMusicState);
  // edit selected music
  const [editMusicError, setEditMusicError] = useState(initialErrorState);
  const [editMusic, setEditMusic] = useState(initialEditMusicState);

  const showAddMusicError = (text) => {
    setAddMusicError({
      show: true,
      message: text,
    });
  };

  const thumnail = (url) => {
    let thumbnail1 = "https://img.youtube.com/vi/";
    let mediumQuality = "/mqdefault.jpg";
    return thumbnail1 + url.split("v=").pop().split("&")[0] + mediumQuality;
  }

  const handleChangeAddMusic = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNewMusic({ ...newMusic, [name]: value });
    setAddMusicError(initialErrorState);
  };

  const addMusic = async () => {
    Object.keys(newMusic).forEach(key => {
      newMusic[key] = newMusic[key].trim();
    });

    if (
      !newMusic.title ||
      !newMusic.artist ||
      !newMusic.url ||
      !newMusic.category
    ) {
      return showAddMusicError("Please fill all required information!");
    }

    await musicService
      .addNewMusic({ music: newMusic })
      .then((res) => {
        if (res.success) {
          setNewMusic(initialAddMusicState);
          dispatch(fetchMusic());
        } else {
          showAddMusicError("Please fill all required information!");
        }
      })
      .catch(() => {
        showAddMusicError("Something went wrong, try again later");
      });
  };

  const logout = async () => {
    localStorage.removeItem("accessToken");
    linkPath("admin-login");
  };

  const selectMusic = (music) => {
    setEditMusic(music);
  }

  return (
    <div id="admin" className="section">
      <div id="admin-container" className="page-container">
        <div id="logout-div">
          <button className="music-delete-btn sm-text" onClick={logout}>
            Log Out
          </button>
        </div>
        <h1 className="bg-text">Add Music</h1>
        <div id="add-box">
          <div className="admin-box">
            <h1 className="sm-text">Title :</h1>
            <input
              className="sm-text login-input"
              name="title"
              value={newMusic.title}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Artist :</h1>
            <input
              className="sm-text login-input"
              name="artist"
              value={newMusic.artist}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Youtube Link :</h1>
            <input
              className="sm-text login-input"
              name="url"
              value={newMusic.url}
              onChange={handleChangeAddMusic}
            />
          </div>
        </div>
        <div className="admin-box">
          <h1 className="sm-text">Category :</h1>
          <select
            id="select-cat"
            className="sm-text cat-select"
            name="category"
            value={newMusic.category}
            onChange={handleChangeAddMusic}
          >
            <option defaultValue="Lyrics/Song Writing">
              Lyrics/Song Writing
            </option>
            <option defaultValue="Music Production">Music Production</option>
            <option defaultValue="Vocal Recording">Vocal Recording</option>
            <option defaultValue="Music Score">Music Score</option>
            <option defaultValue="Mixing/Mastering">Mixing/Mastering</option>
          </select>
        </div>

        {/* Invalid */}
        <div>
          {addMusicError.show ? (
            <h1 className="ssm-text grey-text">{addMusicError.message}</h1>
          ) : null}
        </div>

        <div id="music-add-box">
          <button className="music-add-btn sm-text" onClick={addMusic}>
            Add
          </button>
        </div>

        <div id="temp-music" className="section">
          <div id="temp-music-container">
            <div className="section">
              <img src={thumnail(editMusic.url)} alt="" />
            </div>

            <div>
              <div className="admin-box">
                <h1 className="sm-text">Title :</h1>
                <input className="sm-text login-input" value={editMusic.title} />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Artist :</h1>
                <input className="sm-text login-input" value={editMusic.artist} />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Youtube Link :</h1>
                <input className="sm-text login-input" value={editMusic.url} />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Category :</h1>
                <select
                  id="select-cat"
                  className="sm-text cat-select"
                  value={editMusic.category}
                >
                  <option defaultValue="Lyrics/Song Writing">
                    Lyrics/Song Writing
                  </option>
                  <option defaultValue="Music Production">Music Production</option>
                  <option defaultValue="Vocal Recording">Vocal Recording</option>
                  <option defaultValue="Music Score">Music Score</option>
                  <option defaultValue="Mixing/Mastering">Mixing/Mastering</option>
                </select>
              </div>
              {/* Invalid */}
              <div>
                {editMusicError.show ? (
                  <h1 className="ssm-text grey-text">{editMusicError.message}</h1>
                  ) : null }
              </div>
              <div id="edit-btn">
                <button className="music-save-btn sm-text">Save</button>
                <button className="music-delete-btn sm-text">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div id="music-list">
          <h1 className="bg-text">Music List</h1>

          <h1 className="sm-text">Lyrics/Song Writing</h1>

          <div className="cat-list">
            {musicList && musicList
            .filter((music) => music.category === "Lyrics/Song Writing")
            .map((music, i) => (
              <div className="list-box" key={i} onClick={() => selectMusic(music)}>
                <div>
                  <img className="list-pics" src={thumnail(music.url)} alt="" />
                </div>
                <div>
                  <h1 className="sm-text">{music.title}</h1>
                  <h1 className="ssm-text">{music.artist}</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Music Production</h1>

          <div className="cat-list">
          {musicList && musicList
            .filter((music) => music.category === "Music Production")
            .map((music, i) => (
              <div className="list-box" key={i} onClick={() => selectMusic(music)}>
                <div>
                  <img className="list-pics" src={thumnail(music.url)} alt="" />
                </div>
                <div>
                <h1 className="sm-text">{music.title}</h1>
                  <h1 className="ssm-text">{music.artist}</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Vocal Recording</h1>

          <div className="cat-list">
          {musicList && musicList
            .filter((music) => music.category === "Vocal Recording")
            .map((music, i) => (
              <div className="list-box" key={i} onClick={() => selectMusic(music)}>
                <div>
                  <img className="list-pics" src={thumnail(music.url)} alt="" />
                </div>
                <div>
                <h1 className="sm-text">{music.title}</h1>
                  <h1 className="ssm-text">{music.artist}</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Music Score</h1>

          <div className="cat-list">
          {musicList && musicList
            .filter((music) => music.category === "Music Score")
            .map((music, i) => (
              <div className="list-box" key={i} onClick={() => selectMusic(music)}>
                <div>
                  <img className="list-pics" src={thumnail(music.url)} alt="" />
                </div>
                <div>
                <h1 className="sm-text">{music.title}</h1>
                  <h1 className="ssm-text">{music.artist}</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Mixing/Mastering</h1>

          <div className="cat-list">
          {musicList && musicList
            .filter((music) => music.category === "Mixing/Mastering")
            .map((music, i) => (
              <div className="list-box" key={i} onClick={() => selectMusic(music)}>
                <div>
                  <img className="list-pics" src={thumnail(music.url)} alt="" />
                </div>
                <div>
                <h1 className="sm-text">{music.title}</h1>
                  <h1 className="ssm-text">{music.artist}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
