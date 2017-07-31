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
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
          </Slider>
      </div>
    );
  }
}

export default ImageSlick;
