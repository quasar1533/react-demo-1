import React from "react";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
    };
  }
  onClick = () => {
    this.setState((state) => ({
      n: state.n + 1,
    }));
    this.setState((state) => ({
      n: state.n - 1,
    }));
  };
  render() {
    console.log('rendered')
    return (
      <div className="app">
        App
        <div>
          {this.state.n}
          <button onClick={this.onClick}>+1</button>
        </div>
      </div>
    );
  }
}

export default App;
