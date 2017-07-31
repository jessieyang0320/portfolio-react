import React, { Component } from 'react';
import ImageSlick from '../../../components/ImageSlick/ImageSlick'

class Travel extends Component {

  render() {
    return (
      <div>

        <h1>This is the Travel Part</h1>
        <img src={require("../../../assets/travelMap.png")}/>
        <p>1. travel:  why do I like traveling?  I love to travel because
        it makes you fall in love with your life. When I`m not working,
        most proud travel experience so far? backpacking in Europe for a
        month by myself. All good. + pixel map where I have been to  橙色
        </p>

      </div>
    );
  }
}

export default Travel;
