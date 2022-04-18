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
    duration: 0,
    cover_url: "",
    music_url: "",
    cat_lyrics_song: false,
    cat_music_prod: false,
    cat_vocal_rec: false,
    cat_music_score: false,
    cat_mix_master: false,
    show_homepage: false,
    pri_lyrics_song: 1,
    pri_music_prod: 1,
    pri_vocal_rec: 1,
    pri_music_score: 1,
    pri_mix_master: 1,
    pri_homepage: 1,
  };

  const initialEditMusicState = {
    id: 0,
    title: "",
    artist: "",
    duration: 0,
    cover_url: "",
    music_url: "",
    cat_lyrics_song: false,
    cat_music_prod: false,
    cat_vocal_rec: false,
    cat_music_score: false,
    cat_mix_master: false,
    show_homepage: false,
    pri_lyrics_song: 1,
    pri_music_prod: 1,
    pri_vocal_rec: 1,
    pri_music_score: 1,
    pri_mix_master: 1,
    pri_homepage: 1,
  };

  const checkboxField = [
    "cat_lyrics_song",
    "cat_music_prod",
    "cat_vocal_rec",
    "cat_music_score",
    "cat_mix_master",
    "show_homepage",
  ];

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
    let value = event.target.value;
    let name = event.target.name;

    if (checkboxField.includes(name)) {
      value = event.target.checked;
    }

    setNewMusic({ ...newMusic, [name]: value });
    setAddMusicError(initialErrorState);
  };

  const handleChangeEditMusic = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    if (checkboxField.includes(name)) {
      value = event.target.checked;
    }

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
    if (url) {
      let ggsrc = url.split("/");
      return "https://drive.google.com/uc?export=view&id=" + ggsrc[5];
    }
  };

  const logout = async () => {
    localStorage.removeItem("admin_tk");
    linkPath("admin-login");
  };

  const checkRequiredFields = (music) => {
    if (
      !music.title ||
      !music.artist ||
      !music.duration ||
      !music.cover_url ||
      !music.music_url ||
      !music.hasOwnProperty("cat_lyrics_song") ||
      !music.hasOwnProperty("cat_music_prod") ||
      !music.hasOwnProperty("cat_vocal_rec") ||
      !music.hasOwnProperty("cat_music_score") ||
      !music.hasOwnProperty("cat_mix_master") ||
      !music.hasOwnProperty("show_homepage")
    ) {
      return false;
    }
    return true;
  };

  const validateCategory = (music) => {
    if (
      !music.cat_lyrics_song &&
      !music.cat_music_prod &&
      !music.cat_vocal_rec &&
      !music.cat_music_score &&
      !music.cat_mix_master
    ) {
      return false;
    }

    return true;
  };

  const addMusic = async () => {
    Object.keys(newMusic).forEach((key) => {
      if (typeof newMusic[key] === "string") {
        newMusic[key] = newMusic[key].trim();
      }
    });

    if (!checkRequiredFields(newMusic)) {
      return showAddMusicError("Please fill all required information!");
    } else if (!validateCategory(newMusic)) {
      return showAddMusicError("Require at least one category!");
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
    } else if (!checkRequiredFields(editMusic)) {
      return showEditMusicError("Please fill all required information!");
    } else if (!validateCategory(editMusic)) {
      return showEditMusicError("Require at least one category!");
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
        url={newMusic.music_url}
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
        url={editMusic.music_url}
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
            <h1 className="sm-text">Title:</h1>
            <input
              className="sm-text login-input"
              name="title"
              maxLength="255"
              value={newMusic.title}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Artist:</h1>
            <input
              className="sm-text login-input"
              name="artist"
              maxLength="255"
              value={newMusic.artist}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Youtube Link:</h1>
            <input
              className="sm-text login-input"
              name="music_url"
              maxLength="255"
              value={newMusic.music_url}
              onChange={handleChangeAddMusic}
            />
          </div>
        </div>
        <div id="admin-box-2">
          <div className="admin-box">
            <h1 className="sm-text">Cover Link:</h1>
            <input
              className="sm-text login-input"
              name="cover_url"
              maxLength="255"
              value={newMusic.cover_url}
              onChange={handleChangeAddMusic}
            />
          </div>
          <div className="admin-box admin-show-box">
            <h1 className="sm-text">Show Home:</h1>
            <input
              className="sm-text admin-checkbox"
              name="show_homepage"
              type="checkbox"
              checked={newMusic.show_homepage}
              onChange={handleChangeAddMusic}
            />
            <input
              className="sm-text pri-input"
              name="pri_homepage"
              type="number"
              min="1"
              value={newMusic.pri_homepage}
              disabled={!newMusic.show_homepage}
              onChange={handleChangeAddMusic}
            />
          </div>
        </div>

        <div id="cat-admin">
          <div>
            <h1 className="sm-text">Category:</h1>
          </div>

          <div id="cat-list-checkbox">
            <div className="cat-checkbox">
              <h1 className="sm-text">Lyrics/Song Writing</h1>
              <input
                className="sm-text"
                name="cat_lyrics_song"
                type="checkbox"
                checked={newMusic.cat_lyrics_song}
                onChange={handleChangeAddMusic}
              />
              <input
                className="sm-text pri-input"
                name="pri_lyrics_song"
                type="number"
                min="1"
                value={newMusic.pri_lyrics_song}
                disabled={!newMusic.cat_lyrics_song}
                onChange={handleChangeAddMusic}
              />
            </div>

            <div className="cat-checkbox">
              <h1 className="sm-text">Music Production</h1>
              <input
                className="sm-text"
                name="cat_music_prod"
                type="checkbox"
                checked={newMusic.cat_music_prod}
                onChange={handleChangeAddMusic}
              />
              <input
                className="sm-text pri-input"
                name="pri_music_prod"
                type="number"
                min="1"
                value={newMusic.pri_music_prod}
                disabled={!newMusic.cat_music_prod}
                onChange={handleChangeAddMusic}
              />
            </div>

            <div className="cat-checkbox">
              <h1 className="sm-text">Vocal Recording</h1>
              <input
                className="sm-text"
                name="cat_vocal_rec"
                type="checkbox"
                checked={newMusic.cat_vocal_rec}
                onChange={handleChangeAddMusic}
              />
              <input
                className="sm-text pri-input"
                name="pri_vocal_rec"
                type="number"
                min="1"
                value={newMusic.pri_vocal_rec}
                disabled={!newMusic.cat_vocal_rec}
                onChange={handleChangeAddMusic}
              />
            </div>

            <div className="cat-checkbox">
              <h1 className="sm-text">Music Score</h1>
              <input
                className="sm-text"
                name="cat_music_score"
                type="checkbox"
                checked={newMusic.cat_music_score}
                onChange={handleChangeAddMusic}
              />
              <input
                className="sm-text pri-input"
                name="pri_music_score"
                type="number"
                min="1"
                value={newMusic.pri_music_score}
                disabled={!newMusic.cat_music_score}
                onChange={handleChangeAddMusic}
              />
            </div>

            <div className="cat-checkbox">
              <h1 className="sm-text">Mixing/Mastering</h1>
              <input
                className="sm-text"
                name="cat_mix_master"
                type="checkbox"
                checked={newMusic.cat_mix_master}
                onChange={handleChangeAddMusic}
              />
              <input
                className="sm-text pri-input"
                name="pri_mix_master"
                type="number"
                min="1"
                value={newMusic.pri_mix_master}
                disabled={!newMusic.cat_mix_master}
                onChange={handleChangeAddMusic}
              />
            </div>
          </div>
        </div>

        {/* Invalid */}
        <div>
          {addMusicError.show ? (
            <h1 className="ssm-text grey-text">{addMusicError.message}</h1>
          ) : null}
        </div>

        <div id="music-add-box">
          <button className="music-add-btn section sm-text" onClick={addMusic}>
            Add
          </button>
        </div>

        <div id="temp-music" className="section">
          <div id="temp-music-container">
            <div id="temp-add-img">
              {!editMusic.cover_url ? (
                <div className="dummy-img-admin" />
              ) : (
                <img src={thumnail(editMusic.cover_url)} alt="" />
              )}
            </div>

            <div>
              <div className="admin-box">
                <h1 className="sm-text">Title:</h1>
                <input
                  className="sm-text login-input"
                  name="title"
                  maxLength="255"
                  value={editMusic.title}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Artist:</h1>
                <input
                  className="sm-text login-input"
                  name="artist"
                  maxLength="255"
                  value={editMusic.artist}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Youtube Link:</h1>
                <input
                  className="sm-text login-input"
                  name="music_url"
                  maxLength="255"
                  value={editMusic.music_url}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Cover Link:</h1>
                <input
                  className="sm-text login-input"
                  name="cover_url"
                  maxLength="255"
                  value={editMusic.cover_url}
                  onChange={handleChangeEditMusic}
                />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Category:</h1>
                <div id="cat-list-checkbox" className="cat-admin-checkbox">
                  <div className="cat-checkbox">
                    <h1 className="sm-text">Lyrics/Song Writing</h1>
                    <input
                      className="sm-text"
                      name="cat_lyrics_song"
                      type="checkbox"
                      checked={editMusic.cat_lyrics_song}
                      onChange={handleChangeEditMusic}
                    />
                    <input
                      className="sm-text pri-input"
                      name="pri_lyrics_song"
                      type="number"
                      min="1"
                      value={editMusic.pri_lyrics_song}
                      disabled={!editMusic.cat_lyrics_song}
                      onChange={handleChangeEditMusic}
                    />
                  </div>

                  <div className="cat-checkbox">
                    <h1 className="sm-text">Music Production</h1>
                    <input
                      className="sm-text"
                      name="cat_music_prod"
                      type="checkbox"
                      checked={editMusic.cat_music_prod}
                      onChange={handleChangeEditMusic}
                    />
                    <input
                      className="sm-text pri-input"
                      name="pri_music_prod"
                      type="number"
                      min="1"
                      value={editMusic.pri_music_prod}
                      disabled={!editMusic.cat_music_prod}
                      onChange={handleChangeEditMusic}
                    />
                  </div>

                  <div className="cat-checkbox">
                    <h1 className="sm-text">Vocal Recording</h1>
                    <input
                      className="sm-text"
                      name="cat_vocal_rec"
                      type="checkbox"
                      checked={editMusic.cat_vocal_rec}
                      onChange={handleChangeEditMusic}
                    />
                    <input
                      className="sm-text pri-input"
                      name="pri_vocal_rec"
                      type="number"
                      min="1"
                      value={editMusic.pri_vocal_rec}
                      disabled={!editMusic.cat_vocal_rec}
                      onChange={handleChangeEditMusic}
                    />
                  </div>

                  <div className="cat-checkbox">
                    <h1 className="sm-text">Music Score</h1>
                    <input
                      className="sm-text"
                      name="cat_music_score"
                      type="checkbox"
                      checked={editMusic.cat_music_score}
                      onChange={handleChangeEditMusic}
                    />
                    <input
                      className="sm-text pri-input"
                      name="pri_music_score"
                      type="number"
                      min="1"
                      value={editMusic.pri_music_score}
                      disabled={!editMusic.cat_music_score}
                      onChange={handleChangeEditMusic}
                    />
                  </div>

                  <div className="cat-checkbox">
                    <h1 className="sm-text">Mixing/Mastering</h1>
                    <input
                      className="sm-text"
                      name="cat_mix_master"
                      type="checkbox"
                      checked={editMusic.cat_mix_master}
                      onChange={handleChangeEditMusic}
                    />
                    <input
                      className="sm-text pri-input"
                      name="pri_mix_master"
                      type="number"
                      min="1"
                      value={editMusic.pri_mix_master}
                      disabled={!editMusic.cat_mix_master}
                      onChange={handleChangeEditMusic}
                    />
                  </div>
                </div>
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Show Home:</h1>
                <input
                  className="sm-text admin-checkbox"
                  name="show_homepage"
                  type="checkbox"
                  checked={editMusic.show_homepage}
                  onChange={handleChangeEditMusic}
                />
                <input
                  className="sm-text pri-input"
                  name="pri_homepage"
                  type="number"
                  min="1"
                  value={editMusic.pri_homepage}
                  disabled={!editMusic.pri_homepage}
                  onChange={handleChangeEditMusic}
                />
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
                .filter((music) => music.cat_lyrics_song)
                .map((music, i) => (
                  <div
                    className={`list-box ${
                      music.show_homepage === 1 ? "list-home" : null
                    }`}
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <h1 className="sm-text">{music.pri_lyrics_song}</h1>
                    </div>
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.cover_url)}
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
                .filter((music) => music.cat_music_prod)
                .map((music, i) => (
                  <div
                    className={`list-box ${
                      music.show_homepage === 1 ? "list-home" : null
                    }`}
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <h1 className="sm-text">{music.pri_music_prod}</h1>
                    </div>
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.cover_url)}
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
                .filter((music) => music.cat_vocal_rec)
                .map((music, i) => (
                  <div
                    className={`list-box ${
                      music.show_homepage === 1 ? "list-home" : null
                    }`}
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <h1 className="sm-text">{music.pri_vocal_rec}</h1>
                    </div>
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.cover_url)}
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
                .filter((music) => music.cat_music_score)
                .map((music, i) => (
                  <div
                    className={`list-box ${
                      music.show_homepage === 1 ? "list-home" : null
                    }`}
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <h1 className="sm-text">{music.pri_music_score}</h1>
                    </div>
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.cover_url)}
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
                .filter((music) => music.cat_mix_master)
                .map((music, i) => (
                  <div
                    className={`list-box ${
                      music.show_homepage === 1 ? "list-home" : null
                    }`}
                    key={i}
                    onClick={() => selectMusic(music)}
                  >
                    <div>
                      <h1 className="sm-text">{music.pri_mix_master}</h1>
                    </div>
                    <div>
                      <img
                        className="list-pics"
                        src={thumnail(music.cover_url)}
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
