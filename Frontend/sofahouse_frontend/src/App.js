import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

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
import { fetchMusic } from "./redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusic());
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route exact path="/" id="app-home">
          <Hamburger
            path={"/"}
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
            path={"portfolio"}
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
            path={"service"}
            pageWrapId={"app-service-content"}
            outerContainerId={"app-service"}
          />
          <Navbar path={"service"} />
          <div id="app-service-content">
            <Contact />
            <Service />
            <Footer />
          </div>
        </Route>
        <Route path="/about" id="app-aboutus">
          <Hamburger
            path={"aboutus"}
            pageWrapId={"app-aboutus-content"}
            outerContainerId={"app-aboutus"}
          />
          <Navbar path={"aboutus"} />
          <div id="app-aboutus-content">
            <Contact />
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
        <Route path="/:id">
          <Redirect to="/" /> :
        </Route>
      </Switch>
    </div>
  );
}

export default App;
