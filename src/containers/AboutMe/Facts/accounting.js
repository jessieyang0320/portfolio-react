import React, { Component } from 'react';
import './accounting.css';
import ReactModal from 'react-modal';


class Accounting extends Component {
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
          <button onClick={this.handleOpenModal} className="btn third" id="accounting">Accounting</button>

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
                height:'80%'                              
              },                           
            }}
        >

        <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>
          <div className="accountingContainer">
            <h1 className="accountingTitle">This is the Accounting Skills Part</h1>
            <p className="accountingArticle">
             what about accounting?
             Accounting was my major and I have a master degree on that from Bentley University,
             which locates in Waltham MA.
             I also passed the CPA exam, I thought I will become a CPA,
             but listened to my heart, no, I don`t want to be a CPA for my whole life,
             I want to work in the tech industry, and build something,
             be a part of change of people`s life. Did I learn something from accounting?
             Of course, paying attention to details, business logical mindset,

             People do not get it, why you have to change career

            </p>

          </div>
          </ReactModal>

      </div>
    );
  }
}

export default Accounting;
