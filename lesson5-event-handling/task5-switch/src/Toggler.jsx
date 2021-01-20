import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateBtn: 'Off',
    };
  }

  switchBtn = e => {
    if (this.state.stateBtn === 'Off') {
      this.setState({
        stateBtn: (this.state.stateBtn = 'On'),
      });
    } else {
      this.setState({
        stateBtn: (this.state.stateBtn = 'Off'),
      });
    }
  };

  render() {
    return (
      <button className="toggler" onClick={this.switchBtn}>
        {this.state.stateBtn}
      </button>
    );
  }
}

export default Toggler;
