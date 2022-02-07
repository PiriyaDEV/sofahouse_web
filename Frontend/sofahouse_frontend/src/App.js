import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/element/Navbar";
import Home from "./components/page/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar path={"/"}/>
          <Home />
        </Route>
        <Route path="/portfolio">
          <Navbar path={"portfolio"} />
          <Home />
        </Route>
        <Route path="/service">
          <Navbar path={"service"} />
          <Home />
        </Route>
        <Route path="/aboutus">
          <Navbar path={"aboutus"} />
          <Home />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
