import React, { useState } from "react";
import adminService from "../../services/admin.service";

import "../../assets/css/page/login.css";
import "../../assets/css/text.css";
import "../../assets/css/page.css";

import longLogo from "../../assets/images/long-logo.png";

export default function Login() {
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (!username) {
      setShowInvalidMessage(true);
      setInvalidMessage("Username required");
      return;
    } else if (!password) {
      setShowInvalidMessage(true);
      setInvalidMessage("Password required");
      return;
    }

    let admin = {
      username: username,
      password: password,
    };

    await adminService.login(admin).then((res) => {
      if (res.success) {
        localStorage.setItem("accessToken", res.token);
        linkPath("admin");
      } else {
        setShowInvalidMessage(true);
        setInvalidMessage("Invalid Username or Password");
      }
    }).catch(() => {
      setShowInvalidMessage(true);
      setInvalidMessage("Something wrong! Try again later");
    });
  };

  return (
    <div id="login" className="section">
      <div className="page-container">
        <div id="login-section" className="section">
          <div>
            <div className="section">
              <img id="login-logo" src={longLogo} alt="" />
            </div>

            <div className="login-box">
              <h1 className="sm-text">Username :</h1>
              <input
                className="sm-text grey-text login-input"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value.trim());
                  setShowInvalidMessage(false);
                }}
              />
            </div>
            <div className="login-box">
              <h1 className="sm-text">Password :</h1>
              <input
                className="sm-text grey-text login-input"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value.trim());
                  setShowInvalidMessage(false);
                }}
              />
            </div>

            <button id="login-btn" className="sm-text" onClick={() => login()}>
              Login
            </button>
            {showInvalidMessage ? (
              <h1 className="ssm-text invalid grey-text">{invalidMessage}</h1>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

let linkPath = (value) => {
  window.location.href = value;
};
