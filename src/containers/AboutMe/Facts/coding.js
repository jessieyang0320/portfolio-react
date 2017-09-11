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

          <button onClick={this.handleOpenModal} className="btn fourth" id="coding">Coding</button>

          <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
           style={{
              overlay: {
                backgroundColor: 'papayawhip'
              },
              content: {
                color: 'lightsteelblue',
                width:'60%',
                height:'80%',
               
                
              },
             
              
            }}
        >

              <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>
              <div className="codingContainer">
                <h1 className="codingTitle">This is the Coding Skills Part</h1>
                <p className="codingArticle">
                2. coding skills: I started teaching myself coding when I realized
                I need a landing page for my business. I learn things online,
                youtube, medium, blog, so many new things to learn.
                Feels like a butterfly run into a flower garden.  these are tools what
                I have learnt to use:
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
