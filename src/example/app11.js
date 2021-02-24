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
      n: 0,
      m: 0,
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
        <Grandson msgForGrandson="hi, grandson" />
      </div>
    );
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

// function Grandson(props) {
//   const [n, setN] = React.useState(0);
//   const [m, setM] = React.useState(0);
//   return (
//     <div className="grandson">
//       grandson value-n: {n}
//       <button
//         onClick={() => {
//           setN(n + 1);
//         }}
//       >
//         +1
//       </button>
//       <br />
//       value-m: {m}
//       <button
//         onClick={() => {
//           setM(m + 1);
//         }}
//       >
//         +1
//       </button>
//     </div>
//   );
// }

function Grandson(props) {
  const [state, setState] = React.useState({ n: 0, m: 0 });
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
    </div>
  );
}

export default App;
