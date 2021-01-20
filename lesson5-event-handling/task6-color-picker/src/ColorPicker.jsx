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

  showTitle = name => {
    this.setState({
      color: (this.state.color = name),
    });
  };
  hideTitle() {
    this.setState({
      color: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            style={{ backgroundColor: CORAL }}
            className="picker__button picker__button_coral"
            onMouseOver={() => this.showTitle('Coral')}
            onMouseOut={() => this.hideTitle()}
          ></button>
          <button
            style={{ backgroundColor: AQUA }}
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.showTitle('Aqua')}
            onMouseOut={() => this.hideTitle()}
          ></button>
          <button
            style={{ backgroundColor: BISQUE }}
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.showTitle('Bisque')}
            onMouseOut={() => this.hideTitle()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
