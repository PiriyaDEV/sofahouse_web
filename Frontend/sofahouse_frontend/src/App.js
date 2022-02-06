import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/page/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
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