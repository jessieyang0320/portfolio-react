import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopTetris extends Component {

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
         <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/websocket-tetris.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/tetris.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">Websocket Tetris</div>
                                    <div className="popUpTech">vanilla JavaScript</div>
                                    <div className="popUpTech"> Socket.io</div>
                                    <div className="popUpTech">Simple Player</div>
                                    <div className="popUpTech">Multi-player</div>
                                    
                                  This is Tetris Game built with JavaScript and socket.io, players can choose single player mode or play with another
                                  player. With Multi-player mode. With socket.io, player can see the other player`s game in real-time.                 
                                  <br/><br/>
                                   <a rel="noopener noreferrer" href="https://jessieyang0320.github.io/Tetris-websocket/game.html" target="_blank"><div className="popUpBtn">LAUNCH DEMO</div></a>
                                   <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/Tetris-websocket" target="_blank"><div className="popUpBtn">GITHUB REPO</div></a>
                               
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

export default PopTetris;
