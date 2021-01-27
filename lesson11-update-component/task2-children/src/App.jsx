import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
  state = {
    isOpen: false,
  };

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  };

  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  };

  render() {
    const elem = <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;

    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show dialog
        </button>
        <Dialog title="Recommendation" isOpen={this.state.isOpen} onClose={this.hideDialog}>
          {elem}
        </Dialog>
      </div>
    );
  }
}

export default App;
