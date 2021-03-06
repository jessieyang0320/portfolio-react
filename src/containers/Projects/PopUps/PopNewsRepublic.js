import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopNewsRepublic extends Component {

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
         <div><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/news-republic.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/news-republic.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">News Republic</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech">Responsive</div>
                                    <div className="popUpTech">Web Desgin</div>
                                    <div className="popUpTech">API</div>
                                  <p className="app-description">
                                  News Republic is a news feed website made with Nodejs and ReactJS                  
                                  </p>
                                  <br/><br/>
                                <a href="https://jessieyang0320.github.io/news-republic-react/" target="_blank" rel="noopener noreferrer"><div className="popUpBtn">LAUNCH DEMO</div></a>
                                <a href="https://github.com/jessieyang0320/News-Republic" target="_blank" rel="noopener noreferrer"><div className="popUpBtn">GITHUB REPO</div></a>
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

export default PopNewsRepublic;
