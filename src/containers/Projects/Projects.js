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





class Projects extends Component {
  constructor(){
    super()
    this.state={
      visible:false,
      key:''
    }
  }

  showModal = (e)=>{
    console.log(e.target)
    this.setState({
      visible:true,
      key: this.key
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


            <div className = "project-block">


                <div className="project">               
                    <div className="fly-left animated slideInLeft">
                        <h1>01</h1>
                        <h1> <A className="p-title" href="#" target="_blank">News Republic</A></h1>
                     </div>
                
                  
                    <div className="fly-right animated slideInRight">
                        <img src = {require('../../assets/news-republic.png')}
                     alt="project" onClick={this.showModal} key="1"/>
                    </div>   


                    <Modal  key="1" title="Project Info" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>  
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



                <div className="project">               
                    <div className="fly-left animated slideInLeft">
                        <h1>02</h1>
                        <h1> <A className="p-title" href="#" target="_blank">V-Hab</A></h1>
                     </div>
                
                  
                    <div className="fly-right animated slideInRight">
                        <img src = {require('../../assets/v-hab.png')}
                     alt="project" onClick={this.showModal}/>
                    </div>   


                    <Modal title="Project Info" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>  
                        <div id='inline_content'  visible={this.state.visible}>
                              <div className="popUpLeft">
                                <img src={require('../../assets/projects/example.jpg')} alt="" />
                              </div>
                              <div className="popUpRight">
                                <div className="popUpTitle">V-Hab</div>
                                    <div className="popUpTech">ThreeJS</div>
                                    <div className="popUpTech">VR</div>
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






      </div>



       



      


     

      

 
        <div className = "view-more">
          <A href="https://github.com/jessieyang0320" target="_blank">View More on Github</A>
        </div>

      </div>
      <Footer/>
      </div>
    );
  }
}

export default Projects;
