import React, { useState, useEffect } from "react";

const App = (props) => {
  const [n, setN] = useState(0);
  const log = () => {
    setTimeout(() => {
      console.log(`n: ${n}`);
    }, 3000);
  }; 
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
        <button
          onClick={() => {
            log();
          }}
        >
          log
        </button>
      </div>
    </>
  );
};

export default App;
