import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './PopNewsRepublic.css';

class PopGithub extends Component {

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
         <a><img id="1" onClick={this.handleOpenModal} src={require('../../../assets/github-finder.png')} alt="news" 
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
                                <img src={require('../../../assets/projects/github-finder.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">Find the Github</div>
                                    <div className="popUpTech">jQuery</div>
                                    <div className="popUpTech">Github Api</div>
                                    <div className="popUpTech">Bootstrap</div>
                                    <div className="popUpTech">Ajax</div>
                                    <div className="popUpTech">Responsive</div>
                                  Enter a username, it will show his/her github info, including profile image, followers,
                                  starts, all the repositories.                  
                                  <br/><br/>
                                <a href="https://jessieyang0320.github.io/find-the-github/" target="_blank"><div className="popUpBtn">LAUNCH DEMO</div></a>
                                <a href="https://github.com/jessieyang0320/find-the-github" target="_blank"><div className="popUpBtn">Github Repo</div></a>
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

export default PopGithub;
