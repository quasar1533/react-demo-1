import React, { useState, useRef } from "react";

const themeContext = React.createContext(null);
console.log(themeContext);

const App = (props) => {
  const [themeColor, setThemeColor] = useState("red");
  return (
    <>
      <themeContext.Provider value={{themeColor, setThemeColor}}>
        <div className={`app ${themeColor}`}>
          App theme: {themeColor}
          <div>
            <ChildA />
          </div>
          <div>
            <ChildB />
          </div>
        </div>
      </themeContext.Provider>
    </>
  );
};

const ChildA = (props) => {
  const { setThemeColor } = React.useContext(themeContext);
  return (
    <div>
      <button onClick={() => setThemeColor("red")}>red</button>
    </div>
  );
};

const ChildB = (props) => {
  const { setThemeColor } = React.useContext(themeContext);
  console.log(React.useContext(themeContext))
  return (
    <div>
      <button onClick={() => setThemeColor("blue")}>blue</button>
    </div>
  );
};

export default App;
