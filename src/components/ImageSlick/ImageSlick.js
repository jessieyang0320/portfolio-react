import React,{ Component } from 'react';
import Slider from 'react-slick';
import './ImageSlick.css'

class ImageSlick extends Component {


  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <div className="imageSlide">
          <Slider {...settings}>
            <div><img src= {require('../../assets/photography/city1.jpg')} alt=""/></div>
            <div><img src={require('../../assets/photography/city2.jpg')} alt=""/></div>
            <div><img src={require('../../assets/photography/city3.jpg')} alt=""/></div>
            <div><img src={require('../../assets/photography/city4.jpg')} alt=""/></div>
            <div><img src= {require('../../assets/photography/city5.jpg')} alt=""/></div>
            <div><img src= {require('../../assets/photography/city6.jpg')} alt=""/></div>
            <div><img src= {require('../../assets/photography/city7.jpg')} alt=""/></div>
            <div><img src= {require('../../assets/photography/city8.jpg')} alt=""/></div>
          
          </Slider>
      </div>
    );
  }
}

export default ImageSlick;
