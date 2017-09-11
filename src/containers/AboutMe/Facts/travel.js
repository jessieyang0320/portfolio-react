import React, { Component } from 'react';
import './travel.css';
import ReactModal from 'react-modal';

class Travel extends Component {
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
      <button onClick={this.handleOpenModal} className="btn second" id="travel" >Travel</button>
        <div className="travelContainer">
        
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
                width:'80%',
                height:'80%'

                
              },
             
              
            }}
        >

        <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>

        <h1 className="travelTitle">This is the Travel Part</h1>
        <img className="travelMap" src={require("../../../assets/travelMap.png")}/>
        <p className="travelArticle">why do I like traveling?  I love to travel because
        it makes you fall in love with your life. When I`m not working,
        most proud travel experience so far? backpacking in Europe for a
        month by myself.
        </p>
        </ReactModal>

      </div>
    </div>
    );
  }
}

export default Travel;
