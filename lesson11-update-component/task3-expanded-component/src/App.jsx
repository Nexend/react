import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    } else {
      this.setState({
        isOpen: true,
      });
    }
  };

  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );

    return (
      <div className="app">
        <Expand onToggle={this.handleToggle} isOpen={this.state.isOpen} title="Some title">
          {elem}
        </Expand>
      </div>
    );
  }
}

export default App;
