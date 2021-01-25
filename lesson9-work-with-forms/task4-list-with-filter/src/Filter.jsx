import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.props.filterText}
          name="name"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Filter;
