import React from "react";
import "../app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <button onClick={this.handleButtonClick}>Click Me</button>
      </div>
    );
  }
}

export default Counter;
