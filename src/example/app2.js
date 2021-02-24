import React from "react";

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0,
      m: 0,
    };
    this.addN = () => {
      this.setState({ n: this.state.n + 1 });
    };
    // 这是非常好的写法，ES6之后，推出了更适合的更好的写法，如下↓
  }
  addM = () => {
    this.setState((state) => {
      const m = state.m + 1;
      return { m };
    });
  };
  render() {
    return (
      <div className="app2">
        value-n: {this.state.n}
        <button onClick={this.addN}>n+1</button>
        <br />
        value-m: {this.state.m}
        <button onClick={this.addM}>m+1</button>
      </div>
    );
  }
}

export default App2;
