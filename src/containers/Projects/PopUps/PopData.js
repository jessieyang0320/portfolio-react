import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopData extends Component {

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
         <div><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/data.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/report-template.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">Data Visualization</div>
                                    <div className="popUpTech"> jQuery </div>
                                    <div className="popUpTech"> fullpage.js</div>
                                    <div className="popUpTech"> canvas.js </div>
                                    <div className="popUpTech">HTML and CSS</div>

                                    <p className="app-description">
                                  A Data visualization template for generate data reports. 
                                  Built with jQuery, canvas, and fullpage.js 
                                  it is designed based on the concept of componentization 
                                  </p>          
                                  <br/><br/>
                                <div className="popUpBtn"><a rel="noopener noreferrer" href="https://canvas-report.herokuapp.com/index.html" target="_blank">LAUNCH DEMO</a></div>
                                <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/report-canvas" target="_blank"><div className="popUpBtn">GITHUB REPO</div></a>
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

export default PopData;
