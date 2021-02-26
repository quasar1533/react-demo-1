import React, { useState, useEffect } from "react";
import myUseState from "./mixin/myUseState";

const App = (props) => {
  const [n, setN] = myUseState(0);
  const [m, setM] = myUseState(0);
  return (
    <>
      <div className="app">
        App
        <div>n: {n}</div>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          n+1
        </button>
        <div>m: {m}</div>
        <button
          onClick={() => {
            setM(m + 1);
          }}
        >
          m+1
        </button>
      </div>
    </>
  );
};

export default App;
