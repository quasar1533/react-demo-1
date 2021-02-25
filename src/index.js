import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import "./style.css";
import App from "./example/app1";
import App2 from "./example/app2";
import App3 from "./example/app3";
import App31 from "./example/app31";
import App4 from "./example/app4";
import App5 from "./example/app5";

ReactDOM.render(
  <div>
    <App />
    <hr />
    <App2 />
    <hr />
    <App3 />
    <hr />
    <App31 />
    <hr />
    <App4 />
    <hr />
    <App5 />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
