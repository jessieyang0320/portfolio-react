import React, { Component } from 'react';
import './coding.css';
import CodingIcon from './codingIcons';
import ReactModal from 'react-modal';


class Coding extends Component {
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

          <button onClick={this.handleOpenModal} className="btn forth" id="coding">Developer</button>

          <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
           style={{
              overlay: {
                backgroundColor: 'papayawhip',
                
              },
              content: {
                color: 'lightsteelblue',
                width:'60vw',
                height: '80vh',
                boxShadow: '-10px 10px 35px lightsteelblue'                               
              },                           
            }}
        >

              <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>
              <div className="codingContainer">
                <h1 className="codingTitle">Coding to Make a Difference</h1>
                <p className="codingArticle">
                I started teaching myself HTML and CSS when I realized
                I need a landing page for my business. I enjoy making beautiful and 
                functional websites with different tools. I believe that programming has 
                the power to make people`s life better and easier!
                 
                <br/>these are tools that I use:
                </p>

                <div className="skill-icons">

                  <CodingIcon/>

                </div>

              </div>
        </ReactModal> 
      </div>
    );
  }
}

export default Coding;
