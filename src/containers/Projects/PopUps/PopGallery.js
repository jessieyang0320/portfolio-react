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
         <div><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/image-gallery.png')} alt="news" 
          className="grow"/></div>
         
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <div className="closeBtn" onClick={this.handleCloseModal}>&times;</div>

          <div href="#inline_content" className="overlay">
                        <div id='inline_content' className="popup" >
                              <div className="popUpLeft">
                                <img src={require('../../../assets/projects/react-gallery.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">React Image Gallery</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech">Webpack</div>
                                    <div className="popUpTech">ES6</div>
                                    <div className="popUpTech">Yeoman</div>
                                  <p className="app-description">
                                  Built with ReactJS and webpack, click on one img, all imgs will be positioned randomly.
                                  Click on the centered img, it will flip and show msg on the back
                                  </p>                 
                                  <br/><br/>
                                <a rel="noopener noreferrer" href="https://jessieyang0320.github.io/Image-Gallery-React/" target="_blank"><div className="popUpBtn">LAUNCH DEMO</div></a>
                                <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/Image-Gallery-React" target="_blank"><div className="popUpBtn">Github Repo</div></a>
                              </div>
                              <div className="space"></div>
                          </div>
               

               <div className="clear-fix"></div>     
            </div>

        </ReactModal>

      			
      </div>
    );
  }
}

export default PopGallery;
