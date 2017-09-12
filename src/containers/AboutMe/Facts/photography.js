import React, { Component } from 'react';
import ImageSlick from '../../../components/ImageSlick/ImageSlick';
import './photography.css';
import ReactModal from 'react-modal';


class Photography extends Component {
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
          <button onClick={this.handleOpenModal} className="btn third" id="photography">Photography</button>
         
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

          <div className="photoContainer">
            <h1 className="photoTitle">This is the Photography Part</h1>
            <ImageSlick/>
            <p className="photoArticle">
            Simply three words: I love Photography. Taking pictures, leaving memories. 
            I am new to NYC, so you`ll find me exploring and taking photos of the city.
            </p>

          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Photography;
