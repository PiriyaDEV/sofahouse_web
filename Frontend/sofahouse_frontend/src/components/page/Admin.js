import React, { useState } from "react";
import musicService from "../../services/music.service";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/admin.css";
import "../../assets/css/page/login.css";

import temp1 from "../../assets/images/temp/insecure.png";

export default function Admin() {
  const [showAddInvalidMessage, setShowAddInvalidMessage] = useState(false);
  const [addInvalidMessage, setAddInvalidMessage] = useState("");
  const [showEditInvalidMessage, setShowEditInvalidMessage] = useState(false);
  const [editInvalidMessage, setEditInvalidMessage] = useState("");
  const [newMusic, setNewMusic] = useState({ category: "Lyrics/Song Writing" });
  const [editMusic, setEditMusic] = useState({});

  const logout = async () => {
    localStorage.removeItem("accessToken");
    linkPath("admin-login");
  };

  const addMusic = async () => {
    if (
      !newMusic.title ||
      !newMusic.artist ||
      !newMusic.url ||
      !newMusic.category
    ) {
      setShowAddInvalidMessage(true);
      setAddInvalidMessage("Please fill all required information!");
      return;
    }

    let musicInfo = {
      title: newMusic.title,
      artist: newMusic.artist,
      url: newMusic.url,
      category: newMusic.category,
    };

    await musicService
      .addNewMusic({ music: musicInfo })
      .then((res) => {
        if (res.success) {
          setNewMusic({ category: "Lyrics/Song Writing" });
        } else {
          setShowAddInvalidMessage(true);
          setAddInvalidMessage("Something wrong! Try again later");
        }
      })
      .catch(() => {
        setShowAddInvalidMessage(true);
        setAddInvalidMessage("Something wrong! Try again later");
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
              value={newMusic.title}
              onChange={(e) => {
                setNewMusic({
                  ...newMusic,
                  title: e.target.value.trim(),
                });
                setAddInvalidMessage(false);
              }}
            />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Artist :</h1>
            <input className="sm-text login-input" 
            value={newMusic.artist}
            onChange={(e) => {
              setNewMusic({
                ...newMusic,
                artist: e.target.value.trim(),
              });
              setAddInvalidMessage(false);
            }}/>
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Youtube Link :</h1>
            <input className="sm-text login-input" 
            value={newMusic.url}
            onChange={(e) => {
              setNewMusic({
                ...newMusic,
                url: e.target.value.trim(),
              });
              setAddInvalidMessage(false);
            }}
            />
          </div>
        </div>
        <div className="admin-box">
          <h1 className="sm-text">Category :</h1>
          <select
            name="category"
            id="select-cat"
            className="sm-text cat-select"
            value={newMusic.category}
            onChange={(e) => {
              setNewMusic({
                ...newMusic,
                category: e.target.value,
              });
            }}
          >
            <option value="Lyrics/Song Writing">Lyrics/Song Writing</option>
            <option value="Music Production">Music Production</option>
            <option value="Vocal Recording">Vocal Recording</option>
            <option value="Music Score">Music Score</option>
            <option value="Mixing/Mastering">Mixing/Mastering</option>
          </select>
        </div>

        {/* Invalid */}
        <div>
          {showAddInvalidMessage ? (
            <h1 className="ssm-text grey-text">{addInvalidMessage}</h1>
          ) : null}
        </div>

        <div id="music-add-box">
          <button className="music-add-btn sm-text" onClick={() => addMusic()}>Add</button>
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
                {showEditInvalidMessage ? (
                  <h1 className="ssm-text grey-text">{editInvalidMessage}</h1>
                ) : null}
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
