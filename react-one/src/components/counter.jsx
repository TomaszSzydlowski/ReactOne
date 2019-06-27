import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>;

    return (
      <ul>
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={() => {
              this.handleIncrement({ id: 1 });
            }}
            className="btn btn-secondary btn-sm"
          >
            Incement
          </button>
        </React.Fragment>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please set new elements"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
