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
    const colorName = e.target.dataset.name;
    this.setState({
      color: (this.state.color = colorName),
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
            onMouseEnter={e => this.showTitle(e)}
            onMouseLeave={e => this.hideTitle(e)}
          ></button>
          <button
            data-name="Aqua"
            style={{ backgroundColor: AQUA }}
            className="picker__button picker__button_aqua"
            onMouseEnter={e => this.showTitle(e)}
            onMouseLeave={e => this.hideTitle(e)}
          ></button>
          <button
            data-name="Bisque"
            style={{ backgroundColor: BISQUE }}
            className="picker__button picker__button_bisque"
            onMouseEnter={e => this.showTitle(e)}
            onMouseLeave={e => this.hideTitle(e)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
