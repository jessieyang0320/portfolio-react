import React, { Component } from 'react';

import './photography.css';
import ReactModal from 'react-modal';
import Tiles from '../../../components/ImageWall/Tiles'


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
    let data = [
  { 
    "id":"1",
    "fileName": "1.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"2",
    "fileName": "2.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"3",
    "fileName": "3.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  {
    "id":"4",
    "fileName": "4.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  {
    "id":"5",
    "fileName": "5.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { "id":"6",
    "fileName": "6.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"7",
    "fileName": "7.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"8",
    "fileName": "8.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"9",
    "fileName": "9.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  {
    "id":"10",
    "fileName": "10.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"11",
    "fileName": "11.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"12",
    "fileName": "12.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"13",
    "fileName": "13.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"14",
    "fileName": "14.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"15",
    "fileName": "15.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  { 
    "id":"16",
    "fileName": "16.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
   {
    "id":"17",
    "fileName": "17.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
   {
    "id":"18", 
    "fileName": "18.jpg",
    "title": "Heaven of time",
    "desc": "Here he comes Here comes Speed Racer."
  },
  
];



// generate change image data to image url:

function genImageURL(imageDataArr) {
  for(var i=0;i< imageDataArr.length; i++) {
    var singleImageData = imageDataArr[i];
    singleImageData.imageURL = require('../../../assets/photography/' + singleImageData.fileName);

      imageDataArr[i] = singleImageData;
  }

  return imageDataArr;
}

 data = genImageURL(data);
    return (
      <div>
          <button onClick={this.handleOpenModal} className="btn third" id="photography">Photographer</button>
         
         <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}

           style={{
              overlay: {
                backgroundColor: '#d7e2d1'
              },
              content: {
                backgroundColor:'#eeeeee',
                color: '#775c8f',
                width: '90%',
                margin: '5px auto',
                
                boxShadow: '-10px 10px 35px gray'
            
                              
              },
             
              
            }}
        >

          <a className="closeBtn" onClick={this.handleCloseModal}>&times;</a>

          <div className="photoContainer">
            <h1 className="photoTitle">I Am A Photographer!</h1>
            <p className="photoArticle">
            During weekends, I always spend time exploring the city, taking pictures, leaving memories. 
            checkout some of my works below:
            </p>
            <Tiles data={data}/>
            

          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Photography;
