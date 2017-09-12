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
          
          <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/responsive-website.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/responsive-web.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">Website Design</div>
                                    <div className="popUpTech">HTML5</div>
                                    <div className="popUpTech">CSS3</div>
                                    <div className="popUpTech">Responsive</div>
                                    <div className="popUpTech">Web Desgin</div>
                                    
                                  A responsive website built with HTML and CSS, displayed well on various sizes screens                
                                  <br/><br/>
                                <a rel="noopener noreferrer" href="https://htmlpreview.github.io/?https://github.com/jessieyang0320/responsive-web-design/blob/master/src/index.html" target="_blank"><div className="popUpBtn">LAUNCH WEBSITE</div></a>
                                <a rel="noopener noreferrer" href="https://github.com/jessieyang0320/responsive-web-design" target="_blank"><div className="popUpBtn">Github Repo</div></a>
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

export default PopPtoPWeb;
