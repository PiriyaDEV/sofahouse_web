import React from "react";

import "../../assets/css/text.css";
import "../../assets/css/page.css";
import "../../assets/css/page/admin.css";
import "../../assets/css/page/login.css";

import temp1 from "../../assets/images/temp/insecure.png";

export default function Admin() {
  return (
    <div id="admin" className="section">
      <div id="admin-container" className="page-container">
        <div id="logout-div">
          <button className="music-delete-btn sm-text">Log Out</button>
        </div>
        <h1 className="bg-text">Add Music</h1>
        <div id="add-box">
          <div className="admin-box">
            <h1 className="sm-text">Title :</h1>
            <input className="sm-text login-input" />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Artist :</h1>
            <input className="sm-text login-input" />
          </div>
          <div className="admin-box">
            <h1 className="sm-text">Youtube Link :</h1>
            <input className="sm-text login-input" />
          </div>
        </div>
        <div className="admin-box">
          <h1 className="sm-text">Category :</h1>
          <select
            name="category"
            id="select-cat"
            className="sm-text cat-select"
          >
            <option value="lyrics">Lyrics/Song Writing</option>
            <option value="musicprod">Music Production</option>
            <option value="vocal">Vocal Recording</option>
            <option value="musicscore">Music Score</option>
            <option value="mixing">Mixing/Mastering</option>
          </select>
        </div>
        <div id="music-add-box">
          <button className="music-add-btn sm-text">Add</button>
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
                  <option value="lyrics">Lyrics/Song Writing</option>
                  <option value="musicprod">Music Production</option>
                  <option value="vocal">Vocal Recording</option>
                  <option value="musicscore">Music Score</option>
                  <option value="mixing">Mixing/Mastering</option>
                </select>
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
