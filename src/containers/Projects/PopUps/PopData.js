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
         <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/data.png')} alt="news" 
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
                                <div className="popUpTitle">Data Visualization</div>
                                    <div className="popUpTech"> jQuery </div>
                                    <div className="popUpTech"> fullpage.js</div>
                                    <div className="popUpTech"> canvas.js </div>
                                    <div className="popUpTech">HTML and CSS</div>
                                  This is a data visualization template for generate data reports. 
                                  This template is built with jQyert abd canvas, it also uses fullpage.js to make
                                  scroll smooth, it is designed based on the concept of componentization and 
                                  each type of charts is styled and works individually. 
                                  With this kind of design, users can quickly generate reports with multi-types 
                                  of charts and customized style by simply passing data into it.                 
                                  <br/><br/>
                                <a href="https://canvas-report.herokuapp.com/index.html" target="_blank"><div className="popUpBtn">LAUNCH WEBSITE</div></a>
                                <a href="https://github.com/jessieyang0320/report-canvas" target="_blank"><div className="popUpBtn">GITHUB DEMO</div></a>
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

export default PopData;
