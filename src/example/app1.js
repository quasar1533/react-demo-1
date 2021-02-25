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
  };
  render() {
    return (
      <div className="parent">
        hello
        <hr />
        <Child n={this.state.n} onClick={this.onClick}>
          hi
        </Child>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillReceiveProps(newProps, newContext) {
    console.log("old props:");
    console.log(this.props);
    console.log("props changed");
    console.log('new props:');
    console.log(newProps);
  }
  render() {
    return (
      <div className="child">
        child
        <br />
        {this.props.n}
        <button onClick={this.props.onClick}>+1</button>
      </div>
    );
  }
}

export default App;
