import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.statusOnline);
    window.addEventListener('offline', this.statusOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusOnline);
    window.removeEventListener('offline', this.statusOffline);
  }

  statusOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  statusOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    return this.state.status == 'online' ? (
      <div className="status">{this.state.status}</div>
    ) : (
      <div className="status status_offline">{this.state.status}</div>
    );
  }
}

export default ConnectionStatus;
