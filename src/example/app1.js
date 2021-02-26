import React, { useState, useEffect } from "react";

const App = (props) => {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  useEffect(() => {
    console.log("updated");
    // 相当于componentDidMount
  }, []);
  useEffect(() => {
    console.log("n updated");
    // 相当于指定数据的componentDidUpdate
  }, [n]);
  // useEffect方法默认页面每次render时都会执行一次。
  // 效果和直接写在函数组件内部的代码是一致的。
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
          n+1
        </button>
        <div>{m}</div>
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
