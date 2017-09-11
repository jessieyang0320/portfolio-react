import React, { Component } from 'react';
import Slider from 'react-slick';
import './entreprenuer.css';
import ReactModal from 'react-modal';


class Entreprenuer extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }



  render() {

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
<div>
        <button onClick={this.handleOpenModal} className="btn first" id="entrepreneur">entrepreneur</button>
         
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
           style={{
              overlay: {
                backgroundColor: 'papayawhip'
              },
              content: {
                color: 'lightsteelblue',
                width:'80%',
                
                
                
              },
             
              
            }}
        >
              <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>

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

        </ReactModal>

            
</div>
    );
  }
}

export default Entreprenuer;
