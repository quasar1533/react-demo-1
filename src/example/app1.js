import React from "react";

const App = () => {
  return (
    <div className="app">
      Father
      <Son msgForSon="hi, son" />
    </div>
  );
};

class Son extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 1,
    };
  }
  render() {
    return (
      <div className="son">
        Son value: {this.state.n}
        {this.props.msgForSon}
        <button
          onClick={() => {
            this.add();
          }}
        >
          +1
        </button>
        <Grandson msgForGrandson="hi, grandson" />
      </div>
    );
  }
  add() {
    // this.setState({ n: this.state.n + 1 });
    // better to use below
    this.setState((state, props) => {
      const n = state.n + 1;
      console.log(n);
      return { n };
    });
  }
}

function Grandson(props) {
  const arr = React.useState(0);
  console.log(arr);
  const [n, setN] = arr;
  return (
    <div className="grandson">
      grandson value: {n}
      {props.msgForGrandson}
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default App;
