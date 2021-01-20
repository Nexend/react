import React, { Component } from 'react';

const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
  }

  showTitle = e => {
    this.setState({
      color: (this.state.color = `${e.target.dataset.name}`),
    });
  };
  hideTitle = e => {
    this.setState({
      color: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            data-name="Coral"
            style={{ backgroundColor: CORAL }}
            className="picker__button picker__button_coral"
            onMouseEnter={this.showTitle}
            onMouseLeave={this.hideTitle}
          ></button>
          <button
            data-name="Aqua"
            style={{ backgroundColor: AQUA }}
            className="picker__button picker__button_aqua"
            onMouseEnter={this.showTitle}
            onMouseLeave={this.hideTitle}
          ></button>
          <button
            data-name="Bisque"
            style={{ backgroundColor: BISQUE }}
            className="picker__button picker__button_bisque"
            onMouseEnter={this.showTitle}
            onMouseLeave={this.hideTitle}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
