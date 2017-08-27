import React, { Component } from 'react';
import { Modal } from 'antd';


class PopNewsRepublic extends Component {

	constructor(){
    super()
    this.state={
      visible:false,
      id:''
    }
  }

  showModal = (e)=>{
    console.log(e.target.id)
    
    this.setState({
      visible:true,
      id: e.target.id
      
    })
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



  render() {

    return (
      <div>
      			<a href="#inline_content" className="overlay">
                        <div id='inline_content' className="popup" visible={this.state.visible}>
                              <div className="popUpLeft">
                                <img src={require('../../../assets/projects/example.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">News Republic</div>
                                    <div className="popUpTech">ReactJS</div>
                                    <div className="popUpTech">Responsive</div>
                                    <div className="popUpTech">Web Desgin</div>
                                    <div className="popUpTech">API</div>
                                  News Republic is a news feed website made with Nodejs and ReactJS                  
                                  <br/><br/>
                                <a href="http://briabby.com/" target="_blank"><div className="popUpBtn">LAUNCH WEBSITE</div></a>
                              </div>
                              <div className="space"></div>
                          </div>
               

               <div className="clear-fix"></div>     
        		</a>
      </div>
    );
  }
}

export default PopNewsRepublic;
