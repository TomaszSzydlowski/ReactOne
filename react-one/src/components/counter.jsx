import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>
            <React.Fragment>
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
              <button
                onClick={() => {
                  this.handleIncrement({ id: 1 });
                }}
                className="btn btn-secondary btn-sm"
              >
                Incement
              </button>
            </React.Fragment>
          </li>
        ))}
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
