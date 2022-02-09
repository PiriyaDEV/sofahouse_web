import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/element/Navbar";
import Home from "./components/page/Home";
import Footer from "./components/element/Footer";
import Portfolio from "./components/page/Portfolio";
import Service from "./components/page/Service";
import AboutUs from "./components/page/AboutUs";
import Contact from "./components/element/Contact";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar path={"/"} />
          <Contact/>
          <Home />
          <Footer />
        </Route>
        <Route path="/portfolio">
          <Navbar path={"portfolio"} />
          <Contact/>
          <Portfolio />
          <Footer />
        </Route>
        <Route path="/service">
          <Navbar path={"service"} />
          <Service />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Navbar path={"aboutus"} />
          <AboutUs />
          <Footer />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
