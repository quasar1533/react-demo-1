import React, { useState, useEffect } from "react";

const App = (props) => {
  const [childVisible, setChildVisible] = useState(true);
  const show = () => {
    setChildVisible(true);
  };
  const hide = () => {
    setChildVisible(false);
  };
  return (
    <>
      <div className="app">
        App
        <div>
          {childVisible ? (
            <button onClick={hide}>hide</button>
          ) : (
            <button onClick={show}>show</button>
          )}
        </div>
        <div>{childVisible ? <Child /> : null}</div>
      </div>
    </>
  );
};

const Child = (props) => {
  useEffect(() => {
    return () => {
      console.log("Child will be destroyed");
    };
    // 返回一个函数来模拟componentWillUnmount
  });
  return <div>Child</div>;
};

export default App;
