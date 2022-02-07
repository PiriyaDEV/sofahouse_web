import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/element/Navbar";
import Home from "./components/page/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Navbar />
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
