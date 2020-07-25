import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App greeting="Hello World!" />
  </Router>,
  document.querySelector("#root")
);
