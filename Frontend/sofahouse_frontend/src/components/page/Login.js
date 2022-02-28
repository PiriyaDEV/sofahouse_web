import React, { useState, useEffect } from "react";
import adminService from "../../services/admin.service";
import jwt_decoded from "jwt-decode";

import "../../assets/css/page/login.css";
import "../../assets/css/text.css";
import "../../assets/css/page.css";

import longLogo from "../../assets/images/long-logo.png";

export default function Login() {
  const isLogin = () => {
    const token = localStorage.getItem("admin_tk");

    if (token) {
      const decoded = jwt_decoded(token);

      if (Date.now() >= decoded.exp * 1000) {
        localStorage.removeItem("admin_tk");
      } else {
        linkPath("/admin");
      }
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  const initialErrorState = {
    show: false,
    message: "",
  };

  const initialLoginAdminState = {
    username: "",
    password: ""
  };

  const [loginError, setLoginError] = useState(initialErrorState);
  const [loginAdmin, setLoginAdmin] = useState(initialLoginAdminState);

  const showLoginError = (text) => {
    setLoginError({
      show: true,
      message: text,
    });
  };

  const handleChangeLogin = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setLoginAdmin({ ...loginAdmin, [name]: value });
    setLoginError(initialErrorState);
  };

  const login = async () => {
    loginAdmin.username = loginAdmin.username.trim();

    if (!loginAdmin.username) {
      return showLoginError("Username required");
    } else if (!loginAdmin.password) {
      return showLoginError("Password required");
    }

    await adminService.login(loginAdmin).then((res) => {
      if (res.success) {
        localStorage.setItem("admin_tk", res.token);
        linkPath("admin");
      } else {
        showLoginError("Invalid Username or Password");
      }
    }).catch(() => {
      showLoginError("Invalid Username or Password");
    });
  };

  return (
    <div id="login" className="section">
      <div className="page-container">
        <div id="login-section" className="section">
          <div>
            <div className="section">
              <img id="login-logo" src={longLogo} alt="" onClick={() => linkPath("/")}/>
            </div>

            <div className="login-box">
              <h1 className="sm-text">Username :</h1>
              <input
                className="sm-text grey-text login-input"
                name="username"
                maxLength="64"
                value={loginAdmin.username}
                onChange={handleChangeLogin}
                onKeyPress={(event) => event.key === "Enter" ? login() : null}
              />
            </div>
            <div className="login-box">
              <h1 className="sm-text">Password :</h1>
              <input
                className="sm-text grey-text login-input"
                name="password"
                maxLength="100"
                type="password"
                value={loginAdmin.password}
                onChange={handleChangeLogin}
                onKeyPress={(event) => event.key === "Enter" ? login() : null}
              />
            </div>

            <button id="login-btn" className="sm-text" onClick={login}>
              Login
            </button>
            {loginError.show ? (
              <h1 className="ssm-text invalid grey-text">{loginError.message}</h1>
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
