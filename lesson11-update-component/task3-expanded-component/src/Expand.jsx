import React, { Component } from 'react';

class Expand extends Component {
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
    let content;
    let arrow;

    if (!this.state.isOpen) {
      arrow = <i className="fas fa-chevron-down"></i>;
      content = null;
    } else {
      arrow = <i className="fas fa-chevron-up"></i>;
      content = <div className="expand__content">{this.props.children}</div>;
    }
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.handleToggle}>
            {arrow}
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default Expand;
