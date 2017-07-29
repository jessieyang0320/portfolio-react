import React, { Component } from 'react';
import './buttonStyle.css';

class ButtonTwo extends Component {


  render() {

    return (
      <div>
         <div className="btn second">{this.props.name}</div>

      </div>
    );
  }
}

export default ButtonTwo;
