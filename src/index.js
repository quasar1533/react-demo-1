import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import "./style.css";
import App from "./example/app11";
import App12 from "./example/app12";
import App2 from "./example/app2";

ReactDOM.render(
  <div>
    <App />
    <hr />
    <App12 />
    <hr />
    <App2 />
  </div>,
  document.getElementById("root")
);

console.log(React.useState);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
