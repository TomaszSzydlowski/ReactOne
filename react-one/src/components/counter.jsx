import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Incement</button>
      </React.Fragment>
    );
  }
}

export default Counter;
