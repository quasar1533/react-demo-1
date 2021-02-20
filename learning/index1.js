const React = window.React;
const ReactDOM = window.ReactDOM;
let n = 1;
const root = document.getElementById("root");
const App = () =>
  React.createElement("div", {className: "red"}, [
    n,
    React.createElement(
      "button",
      {
        onClick: () => {
          n += 1;
          ReactDOM.render(App(), root);
        },
      },
      "+1"
    ),
  ]);
ReactDOM.render(App(), root);
