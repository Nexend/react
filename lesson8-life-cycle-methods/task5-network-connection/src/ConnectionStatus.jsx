import React, { Component } from 'react';

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.statusOnline);
    window.addEventListener('offline', this.statusOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusOnline);
    window.removeEventListener('offline', this.statusOffline);
  }

  statusOnline = e => {
    this.setState({
      status: 'online',
    });
  };

  statusOffline = e => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    let statusNetwork;

    if (navigator.onLine) {
      statusNetwork = <div className="status">{this.state.status}</div>;
    } else {
      statusNetwork = <div className="status status_offline">{this.state.status}</div>;
    }

    return statusNetwork;
  }
}

export default ConnectionStatus;
