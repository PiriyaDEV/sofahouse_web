import React, { useState } from "react";
import musicService from "../../services/music.service";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/admin.css";
import "../../assets/css/page/login.css";

import temp1 from "../../assets/images/temp/insecure.png";

export default function Admin() {
  const initialAddMusicErrorState = {
    show: false,
    message: "",
  };

  const initialAddMusicState = {
    title: "",
    artist: "",
    url: "",
    category: "Lyrics/Song Writing",
  };

  const [addMusicError, setAddMusicError] = useState(initialAddMusicErrorState);
  const [newMusic, setNewMusic] = useState(initialAddMusicState);

  const logout = async () => {
    localStorage.removeItem("accessToken");
    linkPath("admin-login");
  };

  const showAddMusicError = (text) => {
    setAddMusicError({
      show: true,
      message: text,
    });
  };

  const handleChangeAddMusic = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNewMusic({ ...newMusic, [name]: value });

    setAddMusicError(initialAddMusicErrorState);
  };

  const addMusic = async () => {
    if (
      !newMusic.title ||
      !newMusic.artist ||
      !newMusic.url ||
      !newMusic.category
    ) {
      showAddMusicError("Please fill all required information!");
      return;
    }

    await musicService
      .addNewMusic({ music: newMusic })
      .then((res) => {
        res.success
          ? setNewMusic(initialAddMusicState)
          : showAddMusicError("Please fill all required information!");
      })
      .catch(() => {
        showAddMusicError("Something wrong! Try again later");
      });
  };

  return (
    <div id="admin" className="section">
      <div id="admin-container" className="page-container">
        <div id="logout-div">
          <button className="music-delete-btn sm-text" onClick={() => logout()}>
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
          <button className="music-add-btn sm-text" onClick={() => addMusic()}>
            Add
          </button>
        </div>

        <div id="temp-music" className="section">
          <div id="temp-music-container">
            <div className="section">
              <img src={temp1} alt="" />
            </div>

            <div>
              <div className="admin-box">
                <h1 className="sm-text">Title :</h1>
                <input className="sm-text login-input" value="title" />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Artist :</h1>
                <input className="sm-text login-input" value="artist" />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Youtube Link :</h1>
                <input className="sm-text login-input" value="youtube.com/" />
              </div>
              <div className="admin-box">
                <h1 className="sm-text">Category :</h1>
                <select
                  name="category"
                  id="select-cat"
                  className="sm-text cat-select"
                >
                  <option value="Lyrics/Song Writing">
                    Lyrics/Song Writing
                  </option>
                  <option value="Music Production">Music Production</option>
                  <option value="Vocal Recording">Vocal Recording</option>
                  <option value="Music Score">Music Score</option>
                  <option value="Mixing/Mastering">Mixing/Mastering</option>
                </select>
              </div>
              {/* Invalid */}
              <div>
                <h1 className="ssm-text grey-text">{}</h1>
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
            {[...Array(5)].map((x, i) => (
              <div className="list-box" key={i}>
                <div>
                  <img className="list-pics" src={temp1} alt="" />
                </div>
                <div>
                  <h1 className="sm-text">Title</h1>
                  <h1 className="ssm-text">Artist</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Music Production</h1>

          <div className="cat-list">
            {[...Array(5)].map((x, i) => (
              <div className="list-box" key={i}>
                <div>
                  <img className="list-pics" src={temp1} alt="" />
                </div>
                <div>
                  <h1 className="sm-text">Title</h1>
                  <h1 className="ssm-text">Artist</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Vocal Recording</h1>

          <div className="cat-list">
            {[...Array(5)].map((x, i) => (
              <div className="list-box" key={i}>
                <div>
                  <img className="list-pics" src={temp1} alt="" />
                </div>
                <div>
                  <h1 className="sm-text">Title</h1>
                  <h1 className="ssm-text">Artist</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Music Score</h1>

          <div className="cat-list">
            {[...Array(5)].map((x, i) => (
              <div className="list-box" key={i}>
                <div>
                  <img className="list-pics" src={temp1} alt="" />
                </div>
                <div>
                  <h1 className="sm-text">Title</h1>
                  <h1 className="ssm-text">Artist</h1>
                </div>
              </div>
            ))}
          </div>

          <h1 className="sm-text">Mixing/Mastering</h1>

          <div className="cat-list">
            {[...Array(5)].map((x, i) => (
              <div className="list-box" key={i}>
                <div>
                  <img className="list-pics" src={temp1} alt="" />
                </div>
                <div>
                  <h1 className="sm-text">Title</h1>
                  <h1 className="ssm-text">Artist</h1>
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
