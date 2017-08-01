import React, { Component } from 'react';

import Slider from 'react-slick';

import './entreprenuer.css'

class Entreprenuer extends Component {


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div className= "entrepreneurContainer">
        <h1 className="entrepreneurTitle">This is the Entreprenuer Part</h1>

        <div className="entrepreneurimageSlide">
            <Slider {...settings}>
              <div><img src={require('../../../assets/greenhouse1.JPG')} /></div>
              <div><img src={require('../../../assets/greenhouse2.JPG')} /></div>
              <div><img src={require('../../../assets/greenhouse3.JPG')} /></div>
              <div><img src={require('../../../assets/greenhouse4.JPG')} /></div>
            </Slider>
        </div>
        <p className="entrepreneurArticle">
        1. entrepreneur:   I consider myself a person with leadership and entrepreneur spirit.
        I started a company named MagiTech in 2015. Our goal is to change how people
        grow vegetables in China. Inspired by <a href="https://www.theaquaponicsource.com/what-is-aquaponics/">Aquaponic system</a>, me and my business partner
        redesigned a solar powered greenhouse, inside it, we utilized Aquaponic system to
        grow vegetables and keep fish, all these products are organic. Pro: organic,
        no fertilizer or pesticide, no pollution to water or soil  Con: hard to maintain,
        high cost. We got seed fund from Chinese local government and started our project

        </p>

      </div>
    );
  }
}

export default Entreprenuer;
