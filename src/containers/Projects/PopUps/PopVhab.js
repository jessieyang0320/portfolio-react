import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopVhab extends Component {

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
         <div><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/v-hab.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/v-hab.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">V-Hab</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech">ThreeJS</div>
                                    <div className="popUpTech">VR</div>
                                  <p className="app-description">  
                                  With the purpose to make hand physical therapy more engaing, fun and inexpensive.   
                                  A VR game which uses leap motion controller to capture users hands movements data and render images with Three.js
                                     
                                  </p>
                                  <br/><br/>
                                <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=qPoWPNmsvx0&feature=youtu.be&t=2m44s" target="_blank"><div className="popUpBtn">Live Demo</div></a>
                                <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/VHab" target="_blank"><div className="popUpBtn">Github Repo</div></a>
                                <a rel="noopener noreferrer" href="https://www.coursereport.com/schools/dev-bootcamp#/news/final-project-spotlight-jessie-jenna-natalie-albert-of-dev-bootcamp" target="_blank"><div className="popUpBtn">Interview with Course Report</div></a>
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

export default PopVhab;
