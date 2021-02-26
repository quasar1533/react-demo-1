import React, { useState, useEffect } from "react";
import {useUpdate} from "./mixin/useUpdate";

const App = (props) => {
  const [n, setN] = useState(0);

  useUpdate(() => {
    console.log("n updated");
  }, [n]);
  return (
    <>
      <div className="app">
        App
        <div>{n}</div>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};

export default App;
