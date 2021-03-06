import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopMusic extends Component {

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
         <div><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/music-player.png')} alt="news" 
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
                        <div id='inline_content' className="popup">
                              <div className="popUpLeft">
                                <img src={require('../../../assets/projects/react-music-player.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">React Music Player</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech"> API</div>
                                    <div className="popUpTech"> HTML and CSS</div>
                                    
                                    <p className="app-description">
                                    A music player built with Reactjs. 
                                    control pannel: previous song, stop/play, next song. 
                                    Music played randomly. Click on "music list", a list of 10 songs showed
                                    up and music will play when click on the name. 
                                    aliyun Music Api provide 10 songs for free.
                                    </p>
                                    
                                                   
                                  <br/><br/>
                                <a rel="noopener noreferrer" href="https://jessieyang0320.github.io/music-player-react" target="_blank"><div className="popUpBtn">LAUNCH DEMO</div></a>
                                <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/music-player-react" target="_blank"><div className="popUpBtn">GITHUB REPO</div></a>
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

export default PopMusic;
