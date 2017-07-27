import React, { Component } from 'react';
import { Circle, InnerCircle } from './clickHere.style';

export default class ClickHereCircle extends Component {
  render() {
    const { color, ...others } = this.props;
    return (
      <Circle {...others}>
        <InnerCircle color={color}/>
        <InnerCircle color={color}/>
      </Circle>
    );
  }
}
