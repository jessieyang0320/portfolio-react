import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';


class PopPtoPWeb extends Component {

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
          
          <div><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/responsive-website.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/responsive-web.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">Website Design</div>
                                    <div className="popUpTech">HTML5</div>
                                    <div className="popUpTech">CSS3</div>
                                    <div className="popUpTech">Responsive</div>
                                    <div className="popUpTech">Web Desgin</div>
                                  <p className="app-description">  
                                  A responsive website built with HTML and CSS, displayed well on various sizes screens                
                                  </p>
                                  <br/><br/>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/responsive-web-design/blob/master/src/index.html" target="_blank"><div className="popUpBtn">LAUNCH DEMO</div></a>
                                <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/responsive-web-design" target="_blank"><div className="popUpBtn">Github Repo</div></a>
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

export default PopPtoPWeb;
