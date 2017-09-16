import React, { Component } from 'react';
import './entreprenuer.css';
import ReactModal from 'react-modal';


class Entreprenuer extends Component {
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
        <button onClick={this.handleOpenModal} className="btn first" id="entrepreneur">entrepreneur</button>
         
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
          style={{
              overlay: {
                backgroundColor:'#eeeeee'
              },
              content: {
                color: 'lightsteelblue',
                width: '80%',
                margin: '10px auto',
                backgroundColor:'#a0d69a',

                
              
                boxShadow: '-10px 10px 55px black'
              }
            }}
        >

              <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>

      <div className= "entrepreneurContainer">

            <h1 className="entrepreneurTitle">MY Enterpreneural Experiences</h1>

            <div className="img-part">

              <img src={require('../../../assets/greenhouse1.JPG')} alt=""/>
              <img src={require('../../../assets/greenhouse2.JPG')} alt=""/>
              <img src={require('../../../assets/greenhouse3.JPG')} alt=""/>
              <img src={require('../../../assets/greenhouse4.JPG')} alt=""/>

            </div>


            <div className="article-part">
                <p >
                    I consider myself a person with leadership and entrepreneur spirit. 
                    After graduating from Bentley University(where I got my master degree in Accounting), 
                    I worked as a staff accountant for about two years, passed all the 
                    CPA exams, but only to realize that Accounting is not the career for me. 
                    I said goodbye to my accounting job and started the journey of exploring. I tried three different business, 
                    started a tech company, and learnt a lot of lessons. It`s not easy to be an entrepreneur, but, still, Enterpreneural
                    spirit is still important. And I finally realized what I want to do, where I want to be. 
                </p>    

                <p>
                  These pictures shows what I did in my last business.
                  I started a company called MagiTech in 2015. Our goal was to change the traditional way of
                  how people grow vegetables in China. 
                </p>
                <p className="last-paragraph">
                  Inspired by <a href="https://www.theaquaponicsource.com/what-is-aquaponics/">Aquaponic system</a>, me and my business partner
                  redesigned a solar powered greenhouse, inside it, we utilized Aquaponic system to
                  grow vegetables and keep fish, all these products are organic. Pro: organic,
                  no fertilizer or pesticide, no pollution to water or soil  Con: hard to maintain,
                  high cost. We got seed fund from Chinese local government and started our project 

                </p>
            </div>

            <div className="clear-fix"></div>
            
      </div>
           
        </ReactModal>

            
</div>
    );
  }
}

export default Entreprenuer;
