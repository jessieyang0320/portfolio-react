import React, { Component } from 'react';
import './travel.css';

class Travel extends Component {

  render() {
    return (
      <div className="travelContainer">

        <h1 className="travelTitle">This is the Travel Part</h1>
        <img className="travelMap" src={require("../../../assets/travelMap.png")}/>
        <p className="travelArticle">why do I like traveling?  I love to travel because
        it makes you fall in love with your life. When I`m not working,
        most proud travel experience so far? backpacking in Europe for a
        month by myself.
        </p>

      </div>
    );
  }
}

export default Travel;
