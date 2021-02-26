import React, { useState, useRef } from "react";

const App = (props) => {
  const nRef = useRef(0);
  console.log(nRef);

  const update = useState(null)[1];
  const log = () => {
    setTimeout(() => {
      console.log(`nRef: ${nRef.current}`);
    }, 2000);
  };
  return (
    <>
      <div className="app">
        App
        <div>n: {nRef.current}</div>
        <button
          onClick={() => {
            nRef.current += 1;
            update(nRef.current);
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
