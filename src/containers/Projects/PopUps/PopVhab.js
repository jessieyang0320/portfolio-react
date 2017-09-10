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
         <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/v-hab.png')} alt="news" 
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
                                <div className="popUpTitle">V-Hab</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech">Responsive</div>
                                    <div className="popUpTech">Web Desgin</div>
                                    <div className="popUpTech">API</div>
                                  I was inspired by a good friend of mine who lost her hands functions in a car accident, I see her went through the
                                  whole physical therophy process, it was expensive and boring, I want to make something that can help these people  
                                  practice using their hands while also have fun.  
                                  V-hab is a VR game built with Three.js, it uses leap motion controller to capture users hands movement
                                  and rendered the data on screen. Users need to perform certain hands functions to pass the tasks.   
                                  <br/><br/>
                                <a href="https://www.youtube.com/watch?v=qPoWPNmsvx0&feature=youtu.be&t=2m44s" target="_blank"><div className="popUpBtn">Live Demo</div></a>
                                <a href="https://github.com/jessieyang0320/VHab" target="_blank"><div className="popUpBtn">Github Repo</div></a>
                                <a href="https://www.coursereport.com/schools/dev-bootcamp#/news/final-project-spotlight-jessie-jenna-natalie-albert-of-dev-bootcamp" target="_blank"><div className="popUpBtn">Interview with Course Report</div></a>
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

export default PopVhab;
