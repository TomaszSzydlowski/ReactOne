import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button style={{ fontSize: 100 }} className="btn btn-secondary btn-sm">
          Incement
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
