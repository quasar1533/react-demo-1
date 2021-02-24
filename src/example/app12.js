import React from "react";

const App12 = () => {
  return (
    <div className="app">
      Father
      <Son2 msgForSon="hi, son" />
    </div>
  );
};

class Son2 extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0,
      m: 0,
      user: {
        name: "jky",
        age: 18,
      },
    };
  }
  render() {
    return (
      <div className="son">
        Son value-n: {this.state.n}
        <button
          onClick={() => {
            this.addN();
          }}
        >
          n+1
        </button>
        <br />
        value-m: {this.state.m}
        <button
          onClick={() => {
            this.addM();
          }}
        >
          m+1
        </button>
        <br />
        User: {this.state.user.name}
        <br />
        {this.state.user.age}
        <button
          onClick={() => {
            this.changeUser();
          }}
        >
          changeUser
        </button>
        <Grandson2 msgForGrandson="hi, grandson" />
      </div>
    );
  }
  changeUser() {
    this.setState((state, props) => {
      // const user = {
      //   ...this.state.user,
      //   name: "aaa",
      // };
      // return { user };
      const user = Object.assign({}, this.state.user);
      user.name = "aaa";
      return { user };
    });
  }
  addN() {
    this.setState((state, props) => {
      const n = state.n + 1;
      return { n };
    });
  }
  addM() {
    this.setState((state, props) => {
      const m = state.m + 1;
      return { m };
    });
  }
}

function Grandson2(props) {
  const [state, setState] = React.useState({
    n: 0,
    m: 0,
    user: {
      name: "jky",
      age: 19,
    },
  });
  return (
    <div className="grandson">
      grandson value-n: {state.n}
      <button
        onClick={() => {
          setState({ ...state, n: state.n + 1 });
        }}
      >
        +1
      </button>
      <br />
      value-m: {state.m}
      <button
        onClick={() => {
          setState({ ...state, m: state.m + 1 });
        }}
      >
        +1
      </button>
      <br />
      User: {state.user.name}
      <br />
      {state.user.age}
      <button
        onClick={() => {
          setState({
            ...state,
            user: {
              ...state.user,
              name: "aaa",
            },
          });
        }}
      >
        changeUser
      </button>
    </div>
  );
}

export default App12;
