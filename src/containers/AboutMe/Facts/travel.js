import React, { Component } from 'react';
import ImageSlick from '../../../components/ImageSlick/ImageSlick'

class Travel extends Component {

  render() {
    return (
      <div>

        <h1>This is the Travel Part</h1>
        <img src={require("../../../assets/travelMap.png")}/>


      </div>
    );
  }
}

export default Travel;
