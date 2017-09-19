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
          <button onClick={this.handleOpenModal} className="btn seven" id="accounting">Accountant</button>

          <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           
            style={{
              overlay: {
                backgroundColor: '#ac9a86'
              },
              content: {
                color: 'white',
                backgroundColor: '#c9b199',
                width:'70vw',
                boxShadow: '-10px 10px 35px gray',
                margin: '20px auto'                              
              },                           
            }}
        >

        <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>
          <div className="accountingContainer">
            <h1 className="accountingTitle">I have an accounting background</h1>
            <p className="accountingArticle">
             What about accounting?
             I got my master degree in accounting from Bentley Unviersity. I`ve been working 
             as a staff accountant after graduation, I passed CPA exams, and I have a 
             solid understanding of accounting principles.
             <br/><br/>
             But deep in my heart I know I cannot be an accountant for my whole life. 
             I enjoy creating things from scratch, being creative. I tried building websites
             when I started my own business and found myself fall in love with it. 
             <br/><br/>
             So, here I am, looking for a front end position while continuously learning new skills. 
             

            </p>

          </div>
          </ReactModal>

      </div>
    );
  }
}

export default Accounting;
