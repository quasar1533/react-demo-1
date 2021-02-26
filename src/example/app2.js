import React, { useState, useEffect } from "react";

const App = (props) => {
  const [n, setN] = useState(0);
  // let m, setM;
  // if (n % 2 === 0) {
  //   [m, setM] = useState(0);
  // }
  // 会报错
  const x = (
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
        {/* <div>m: {m}</div>
        <button
          onClick={() => {
            setM(m + 1);
          }}
        >
          m+1
        </button> */}
      </div>
    </>
  );
  console.log(x);
  return x;
};

export default App;
