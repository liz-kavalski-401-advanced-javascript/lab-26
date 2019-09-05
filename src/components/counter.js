
import React from "react";
import "../app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseUp = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  decreaseDown = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({ counter });
  };
  render() {
    return (
      <span>
        <button id="add" onClick={this.increaseUp}>
          Click Me to Add
        </button>
        <h4>{this.state.counter}</h4>
        <button id="sub" onClick={this.decreaseDown}>
          Click Me to Subtract
        </button>
      </span>
    );
  }
}

export default Counter;

