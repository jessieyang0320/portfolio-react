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
      <button onClick={this.handleOpenModal} className="btn second" id="travel" >Traveler</button>
        <div className="travelContainer">
        
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           
           style={{
              overlay: {
                backgroundColor: '#B5DEFF'
              },
              content: {
                backgroundColor:'White',
                width:'60vw',
                margin:'10px auto',
                boxShadow: '-10px 10px 35px gray'

              }                           
            }}
        >

        <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>

        <h1 className="travelTitle">I am a Traveler!</h1>
        <img className="travelMap" src={require("../../../assets/travelMap.png")} alt=""/>
          <div className="travelArticle-part">
            <p className="travelArticle">why do I like traveling?</p>  
            
            <p className="travelArticle">Traveling around the world
             makes me fall in love with my life.</p> 
             
            <p className="travelArticle">Most proud travel experience so far? </p>

            <p className="travelArticle">Backpacking in Europe for a
            month by myself.
            </p>
          </div>
        </ReactModal>

      </div>
    </div>
    );
  }
}

export default Travel;
