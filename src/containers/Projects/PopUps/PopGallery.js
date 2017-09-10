import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopGallery extends Component {

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

    return (
      <div>
         <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/image-gallery.png')} alt="news" 
          className="grow"/></a>
         
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>

          <a href="#inline_content" className="overlay">
                        <div id='inline_content' className="popup" visible={this.state.visible}>
                              <div className="popUpLeft">
                                <img src={require('../../../assets/projects/example.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">React Image Gallery</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech">Webpack</div>
                                    <div className="popUpTech">ES6</div>
                                    <div className="popUpTech">Yeoman</div>
                                  An Images display app built with ReactJS and webpack, it displayed images randomly on the 
                                  screen, and users can click on each one of the images, it will move the image to center
                                  and when you click the centered image, it will flip and show message on the back. 
                                  This was a gift for my mom, she is always confused what does it mean when I say I am making
                                  an app, I showed her what I can do with this small app:)                   
                                  <br/><br/>
                                <a href="https://jessieyang0320.github.io/Image-Gallery-React/" target="_blank"><div className="popUpBtn">LAUNCH WEBSITE</div></a>
                                <a href="https://github.com/jessieyang0320/Image-Gallery-React" target="_blank"><div className="popUpBtn">Github Repo</div></a>
                              </div>
                              <div className="space"></div>
                          </div>
               

               <div className="clear-fix"></div>     
            </a>

        </ReactModal>

      			
      </div>
    );
  }
}

export default PopGallery;
