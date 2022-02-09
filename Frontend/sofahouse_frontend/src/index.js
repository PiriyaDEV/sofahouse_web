import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore } from "redux";

// const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>  
    <BrowserRouter>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
);