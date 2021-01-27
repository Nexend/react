import React, { PureComponent } from 'react';
// PureComponent свойства сравниваются только на верхнем уровне
// Например если на верхнем уровне изменят данные объекта, PureComp не увидит это

class Numbers extends PureComponent {
  //   shouldComponentUpdate(nextProps) {
  //     if (this.props.number === nextProps.number && this.props.title === nextProps.title) {
  //       return false;
  //     }
  //     return true;
  //   }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default Numbers;
