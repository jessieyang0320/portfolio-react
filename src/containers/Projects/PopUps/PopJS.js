import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopJS extends Component {

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
         <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/js.png')} alt="js" 
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
                                <img src={require('../../../assets/projects/vanilla-js.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">Vanilla JS</div>
                                    <div className="popUpTech">JavaScript</div>
                                    <div className="popUpTech"> API</div>
                                    <div className="popUpTech"> HTML and CSS</div>
                                    
                                    <p className="app-description">
                                    Small projects built for practicing vanilla JavaScript
                                    </p>                                            
                                  <br/><br/>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/JavaScript-30days/blob/master/day-1/day-1-drumkit.html" target="_blank"><div className="popUpBtn">One</div></a>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/JavaScript-30days/blob/master/02-JS-CSS-Clock/CSS-Clock.html" target="_blank"><div className="popUpBtn">Two</div></a>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/JavaScript-30days/blob/master/03-update-css-variables-withJS/update-css-variables.html" target="_blank"><div className="popUpBtn">Three</div></a>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/JavaScript-30days/blob/master/05-flex-panel/flex-panel.html" target="_blank"><div className="popUpBtn">Four</div></a>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/JavaScript-30days/blob/master/06-ajax-type-ahead/ajax-type-ahead.html" target="_blank"><div className="popUpBtn">Five</div></a>
                                <a rel="noopener noreferrer" href="https://jessieyang0320.github.io/split-screen-react/" target="_blank"><div className="popUpBtn">Six</div></a>
                                <a rel="noopener noreferrer" href="https://jessieyang0320.github.io/JavaScript-30days/" target="_blank"><div className="popUpBtn">Github Repo</div></a>

                                
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

export default PopJS;
