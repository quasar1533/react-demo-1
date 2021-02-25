import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      width: undefined,
    };
    this.divRef = React.createRef();
  }
  componentDidMount() {
    // const div = document.getElementById("width");
    const div = this.divRef.current;
    let { width } = div.getBoundingClientRect();
    this.setState((state) => ({
      width,
    }));
  }
  render() {
    return (
      <>
        <div className="app">
          App5
          {/* <div id="width">width: {this.state.width}</div> */}
          <div ref={this.divRef}>width: {this.state.width}</div>
        </div>
      </>
    );
  }
}

export default App;
