import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      m: 0,
      arr: [1, 2, 3, 4],
    };
  }
  addN = () => {
    this.setState((state) => ({
      n: state.n + 1,
    }));
  };
  addM = () => {
    this.setState((state) => ({
      m: state.m + 1,
    }));
  };
  render() {
    console.log("rendered");
    const dom = (
      <>
        <div className="app">
          App
          <div>
            {this.state.n}
            <button onClick={this.onClick}>+1</button>
          </div>
          <div>
            {this.state.m % 2 === 0 ? (
              <div>even number</div>
            ) : (
              <div>odd number</div>
            )}
            <button onClick={this.addM}>+1</button>
          </div>
          <div>
            {this.state.arr.map((n) => (
              <div>{n}</div>
            ))}
          </div>
        </div>
      </>
    );
    console.log(dom);
    return dom;
  }
}

export default App;
