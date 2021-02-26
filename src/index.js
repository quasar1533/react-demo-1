import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import "./style.css";
// import App from "./example/app1";
// import App2 from "./example/app2";
// import App3 from "./example/app3";
// import App4 from "./example/app4";
import App5 from "./example/app5";
export const data = {
  _state: [],
  index: 0,
};
export const render = () => {
  data.index = 0;
  ReactDOM.render(
    <div>
      {/* <App2 /> */}
      <hr />
    </div>,
    document.getElementById("root")
  );
};

ReactDOM.render(
  <div>
    <App5 />
    <hr />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
