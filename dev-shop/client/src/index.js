import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <App />
    </Routes>
  </React.StrictMode>,
  document.getElementById("root")
);
