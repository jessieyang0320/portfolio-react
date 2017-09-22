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
           style={{
              overlay: {
                backgroundColor: 'papayawhip',
                
              },
              content: {
                color: 'lightsteelblue',
                width:'60vw',
                height: '80vh',
                boxShadow: '-10px 10px 35px lightsteelblue',
                margin: '10px auto'                               
              },                           
            }}
        >

              <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>
              <div className="codingContainer">
                <h1 className="codingTitle">Coding to Make a Difference!!</h1>
                <p className="codingArticle">
                My journey of programming started three years ago when I realized that
                I needed a landing page for my business. I studied full stack web development, 
                with a specialization in front-end engineering.
                <br/><br/>I enjoy making beautiful and 
                functional websites and I strive to create innovative and thoughtful solutions
                with code & design. 
                <br/><br/>I believe that programming has 
                the power to make people`s life better and easier!
                 
                <br/><br/>These are tools that I use:
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
