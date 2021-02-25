import React from "react";

const App = () => {
  return (
    <div className="app">
      Father
      <Parent />
    </div>
  );
};

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
    };
  }
  onClick = () => {
    this.setState({ n: this.state.n + 1 });
    this.setState({ n: this.state.n + 1 });
  };
  onClick2 = () => {
    this.setState((state) => ({
      n: state.n + 1,
    }));
    this.setState((state) => ({
      n: state.n + 1,
    }));
  };
  render() {
    return (
      <div className="parent">
        hello
        <hr />
        <Child n={this.state.n} onClick={this.onClick} onClick2={this.onClick2}>
          hi
        </Child>
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div className="child">
        child
        <br />
        {this.props.n}
        <button onClick={this.props.onClick}>+2</button>
        <button onClick={this.props.onClick2}>+2</button>
      </div>
    );
  }
}

export default App;
