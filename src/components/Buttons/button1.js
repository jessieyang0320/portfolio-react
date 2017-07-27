import React, { Component } from 'react';
import './buttonStyle.css';

class ButtonOne extends Component {


  render() {

    return (
      <div>
        <button className="btn first">{this.props.name}</button>

      </div>
    );
  }
}

export default ButtonOne;
