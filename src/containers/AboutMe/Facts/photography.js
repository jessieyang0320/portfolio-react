import React, { Component } from 'react';
import ImageSlick from '../../../components/ImageSlick/ImageSlick';
import './photography.css';
class Photography extends Component {

  render() {
    return (
      <div className="photoContainer">
        <h1 className="photoTitle">This is the Photography Part</h1>
        <ImageSlick/>
        <p className="photoArticle">
        Simply three words: I love Photography. Taking pictures, leaving memories. 
        I am new to NYC, so you`ll find me exploring and taking photos of the city.
        </p>

      </div>
    );
  }
}

export default Photography;
