import React, { useState, useEffect } from "react";
import musicService from "../../services/music.service";
import { useSelector, useDispatch } from "react-redux";
import jwt_decoded from "jwt-decode";
import ReactPlayer from "react-player";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/admin.css";
import "../../assets/css/page/login.css";
import { fetchMusic } from "../../redux";

export default function Admin() {
  const isLogin = () => {
    const token = localStorage.getItem("admin_tk");

    if (!token) {
      linkPath("/admin-login");
    }

    const decoded = jwt_decoded(token);

    if (Date.now() >= decoded.exp * 1000) {
      localStorage.removeItem("admin_tk");
      linkPath("/admin-login");
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  const dispatch = useDispatch();

  const initialErrorState = {
    show: false,
    message: "",
  };

  const initialAddMusicState = {
    title: "",
    artist: "",
    duration: "",
    url: "",
    category: "Lyrics/Song Writing",
  };

  const initialEditMusicState = {
    id: 0,
    title: "",
    artist: "",
    duration: "",
    url: "",
    category: "Lyrics/Song Writing",
  };

  // music list
  const musicList = useSelector((state) => state.music.musics);
  // add new music
  const [addMusicError, setAddMusicError] = useState(initialErrorState);
  const [newMusic, setNewMusic] = useState(initialAddMusicState);
  // edit selected music
  const [editMusicError, setEditMusicError] = useState(initialErrorState);
  const [editMusic, setEditMusic] = useState(initialEditMusicState);
  // temp music
  const [tempMusic, setTempMusic] = useState({});

  const showAddMusicError = (text) => {
    setAddMusicError({
      show: true,
      message: text,
    });
  };

  const showEditMusicError = (text) => {
    setEditMusicError({
      show: true,
      message: text,
    });
  };

  const handleChangeAddMusic = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNewMusic({ ...newMusic, [name]: value });
    setAddMusicError(initialErrorState);
  };

  const handleChangeEditMusic = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setEditMusic({ ...editMusic, [name]: value });
    if (editMusic.id !== 0) {
      setEditMusicError(initialErrorState);
    }
  };

  const selectMusic = (music) => {
    setEditMusic(music);
    setTempMusic(music);
    setEditMusicError(initialErrorState);
  };

  const thumnail = (url) => {
    let thumbnail1 = "https://img.youtube.com/vi/";
    let mediumQuality = "/mqdefault.jpg";
    return thumbnail1 + url.split("v=").pop().split("&")[0] + mediumQuality;
  };

  const logout = async () => {
    localStorage.removeItem("admin_tk");
    linkPath("admin-login");
  };

  const addMusic = async () => {
    Object.keys(newMusic).forEach((key) => {
      if (typeof newMusic[key] === "string") {
        newMusic[key] = newMusic[key].trim();
      }
    });

    if (
      !newMusic.title ||
      !newMusic.artist ||
      !newMusic.duration ||
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
          setAddMusicError(initialErrorState);
          dispatch(fetchMusic());
        } else {
          showAddMusicError("Please fill all required information!");
        }
      })
      .catch(() => {
        showAddMusicError("Something went wrong, try again later!");
      });
  };

  const updateMusic = async () => {
    Object.keys(editMusic).forEach((key) => {
      if (typeof editMusic[key] === "string") {
        editMusic[key] = editMusic[key].trim();
      }
    });

    if (editMusic.id === 0) {
      return showEditMusicError("Please select music to edit!");
    } else if (
      !editMusic.title ||
      !editMusic.artist ||
      !editMusic.duration ||
      !editMusic.url ||
      !editMusic.category
    ) {
      return showEditMusicError("Please fill all required information!");
    }

    let musicToUpdate = {
      id: editMusic.id,
    };

    let isChange = false;

    Object.keys(editMusic).forEach((key) => {
      if (editMusic[key] !== tempMusic[key]) {
        musicToUpdate[key] = editMusic[key];
        isChange = true;
      }
    });

    if (!isChange) return;

    await musicService
      .updateMusic({ music: musicToUpdate })
      .then((res) => {
        if (res.success) {
          setEditMusic(initialEditMusicState);
          setEditMusicError(initialErrorState);
          dispatch(fetchMusic());
        } else {
          showEditMusicError("Please fill all required information!");
        }
      })
      .catch(() => {
        showEditMusicError("Something went wrong, try again later!");
      });
  };

  const deleteMusic = async () => {
    if (editMusic.id === 0) {
      return showEditMusicError("Please select music to edit!");
    }

    let musicToDelete = {
      id: editMusic.id,
    };

    await musicService
      .deleteMusic({ music: musicToDelete })
      .then((res) => {
        if (res.success) {
          setEditMusic(initialEditMusicState);
          dispatch(fetchMusic());
        } else {
          showEditMusicError("Something went wrong, try again later!");
        }
      })
      .catch(() => {
        showEditMusicError("Something went wrong, try again later!");
      });
  };

  const YoutubeAddSound = () => {
    return (
      <ReactPlayer
        playing={false}
        volume={0}
        width="0"
        height="0"
        onDuration={(duration) => 
          setNewMusic({ ...newMusic, duration: duration })
        }
        url={newMusic.url}
      />
    );
  };

  const YoutubeEditSound = () => {
    return (
      <ReactPlayer
        playing={false}
        volume={0}
        width="0"
        height="0"
        onDuration={(duration) => 
          setEditMusic({ ...editMusic, duration: duration })
        }
        url={editMusic.url}
      />
    );
  };

  return (
    <div id="admin" className="section">
      <div id="admin-container" className="page-container">
        <YoutubeAddSound />
        <YoutubeEditSound />
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
              maxLength="64"
              value={newMusic.title}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Artist :</h1>
            <input
              className="sm-text login-input"
              name="artist"
              maxLength="64"
              value={newMusic.artist}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Youtube Link :</h1>
            <input
              className="sm-text login-input"
              name="url"
              maxLength="255"
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
                <input
                  className="sm-text login-input"
                  name="title"
                  maxLength="64"
                  value={editMusic.title}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Artist :</h1>
                <input
                  className="sm-text login-input"
                  name="artist"
                  maxLength="64"
                  value={editMusic.artist}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Youtube Link :</h1>
                <input
                  className="sm-text login-input"
                  name="url"
                  maxLength="255"
                  value={editMusic.url}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Category :</h1>
                <select
                  id="select-cat"
                  className="sm-text cat-select"
                  name="category"
                  value={editMusic.category}
                  onChange={handleChangeEditMusic}
                >
                  <option defaultValue="Lyrics/Song Writing">
                    Lyrics/Song Writing
                  </option>
                  <option defaultValue="Music Production">
                    Music Production
                  </option>
                  <option defaultValue="Vocal Recording">
                    Vocal Recording
                  </option>
                  <option defaultValue="Music Score">Music Score</option>
                  <option defaultValue="Mixing/Mastering">
                    Mixing/Mastering
                  </option>
                </select>
              </div>
              {/* Invalid */}
              <div>
                {editMusicError.show ? (
                  <h1 className="ssm-text grey-text">
                    {editMusicError.message}
                  </h1>
                ) : null}
              </div>
              <div id="edit-btn">
                <button
                  className="music-save-btn sm-text"
                  onClick={updateMusic}
                >
                  Save
                </button>
                <button
                  className="music-delete-btn sm-text"
                  onClick={deleteMusic}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="music-list">
          <h1 className="bg-text">Music List</h1>

          <h1 className="sm-text">Lyrics/Song Writing</h1>

          <div className="cat-list">
            {musicList &&
              musicList
                .filter((music) => music.category === "Lyrics/Song Writing")
                .map((music, i) => (
                  <div
                    className="list-box"
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.url)}
                        alt=""
                      />
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
            {musicList &&
              musicList
                .filter((music) => music.category === "Music Production")
                .map((music, i) => (
                  <div
                    className="list-box"
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.url)}
                        alt=""
                      />
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
            {musicList &&
              musicList
                .filter((music) => music.category === "Vocal Recording")
                .map((music, i) => (
                  <div
                    className="list-box"
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.url)}
                        alt=""
                      />
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
            {musicList &&
              musicList
                .filter((music) => music.category === "Music Score")
                .map((music, i) => (
                  <div
                    className="list-box"
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.url)}
                        alt=""
                      />
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
            {musicList &&
              musicList
                .filter((music) => music.category === "Mixing/Mastering")
                .map((music, i) => (
                  <div
                    className="list-box"
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.url)}
                        alt=""
                      />
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
