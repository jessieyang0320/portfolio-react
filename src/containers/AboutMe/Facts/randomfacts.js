import React, { Component } from 'react';
import ReactModal from 'react-modal';

class RandomFacts extends Component {
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
      	<button onClick={this.handleOpenModal} className="btn nine" id="randomfacts">Cat Lover</button>

      	<ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >

        <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>
        <h1>Love Cats!!</h1>
        
        <p>

        </p>


        </ReactModal>


      </div>
    );
  }
}

export default RandomFacts;
