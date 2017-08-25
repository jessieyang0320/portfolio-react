import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {Container, Relative, Flex} from '../../theme/grid';
import { A, Index } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css';
import './Project.css';
import { Background } from '../../theme/Background.style';
import Footer from '../../components/Footer/Footer';
import { Modal } from 'antd';
import projects from './projects.json';





class Projects extends Component {
  constructor(){
    super()
    this.state={
      visible:false,
      id:''
    }
  }

  showModal = (e)=>{
  
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
        <NavigationBar/>
        <Background/>



      <div className="projects-container">
              <Reveal effect="animated fadeInUp" className="passage-block">
                  <p>
                      I made beautiful and functional website with React, Nodejs, Express, Rails, MongoDB, Postgres.
                      and as a VR enthusiast, I made VR apps too.
                  </p>

              </Reveal>


              <div className="workGroup2" onClick={this.showModal}>

                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="1" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>



                    <a className="inline">
                        <div className="yellowBox">
                            <img id="2" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      V-Hab<br/>
                            <div className="boxesInfo">VR / Three.JS</div>
                        </div>
                    </a>



                    <a className="inline">
                        <div className="yellowBox">
                            <img src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                     Web Design<br/>
                            <div className="boxesInfo">Web Design / Responsive</div>
                        </div>
                    </a>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="1" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="1" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="1" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="1" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>



                   
              </div>


              <Modal title="Project Info" visible={this.state.id ==="1" && this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} okText="ok"
          cancelText="cancel">  
                        <div id='inline_content'  visible={this.state.visible}>
                              <div className="popUpLeft">
                                <img src={require('../../assets/projects/example.jpg')} alt="" />
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
              </Modal>  

               <div className="clear-fix"></div>     


            

      </div>

      <div className="clearfix"></div>




        <div className = "view-more">
          <A href="https://github.com/jessieyang0320" target="_blank">View More on Github</A>
        </div>

     
      <Footer/>
</div>
    );
  }
}

export default Projects;
