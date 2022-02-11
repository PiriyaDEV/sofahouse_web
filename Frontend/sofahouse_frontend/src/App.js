import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/element/Navbar";
import Home from "./components/page/Home";
import Footer from "./components/element/Footer";
import Portfolio from "./components/page/Portfolio";
import Service from "./components/page/Service";
import AboutUs from "./components/page/AboutUs";
import Contact from "./components/element/Contact";
import Login from "./components/page/Login";
import Admin from "./components/page/Admin";
import Hamburger from "./components/element/Hamburger";

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" id="app-home">
          <Hamburger
            pageWrapId={"app-home-content"}
            outerContainerId={"app-home"}
          />
          <Navbar path={"/"} />
          <div id="app-home-content">
            <Contact />
            <Home />
            <Footer />
          </div>
        </Route>
        <Route path="/portfolio" id="app-portfolio">
          <Hamburger
            pageWrapId={"app-portfolio-content"}
            outerContainerId={"app-portfolio"}
          />
          <Navbar path={"portfolio"} />
          <div id="app-portfolio-content">
            <Contact />
            <Portfolio />
            <Footer />
          </div>
        </Route>
        <Route path="/service" id="app-service">
          <Hamburger
            pageWrapId={"app-service-content"}
            outerContainerId={"app-service"}
          />
          <Navbar path={"service"} />
          <div id="app-service-content">
            <Service />
            <Footer />
          </div>
        </Route>
        <Route path="/about" id="app-aboutus">
          <Hamburger
            pageWrapId={"app-aboutus-content"}
            outerContainerId={"app-aboutus"}
          />
          <Navbar path={"aboutus"} />
          <div id="app-aboutus-content">
            <AboutUs />
            <Footer />
          </div>
        </Route>
        <Route path="/admin-login">
          <Login />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
