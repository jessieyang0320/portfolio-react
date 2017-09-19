import React, { Component } from 'react';
import { A } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css';
import './Project.css';
import { Background } from '../../theme/Background.style';
import Footer from '../../components/Footer/Footer';
import PopNewsRepublic from './PopUps/PopNewsRepublic'
import PopVhab from './PopUps/PopVhab'
import PopPtoPWeb from './PopUps/PopPtoPWeb'
import PopData from './PopUps/PopData'
import PopGithub from './PopUps/PopGithub'
import PopGallery from './PopUps/PopGallery'
import PopTetris from './PopUps/PopTetris'
import PopMusic from './PopUps/PopMusic'
import PopJS from './PopUps/PopJS'

class Projects extends Component {
  constructor(){
    super()
    this.state={
      
    }
  }



  render() {
   
    return (

  <div className="project-page">
        <NavigationBar/>
        <Background/>

      <div className="projects-container">
              <Reveal effect="animated fadeInUp" className="passage-block">
                                  
                  <p className = "slogan">
                      Coding to Make a Difference!!
                      
                  </p>

                  <p className="open-part1">
                    -- this website is built with React.js 
                  </p>
              </Reveal>


              <div className="workGroup2" >

                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <PopMusic/><br/>
                                React Music<br/>
                            <div className="boxesInfo">React / Api / Music Player</div>
                            
                        </div>
                    </div>



                    <a className="inline">
                        <div className="ltGreenBox">
                            <PopVhab/><br/>
                                      V-Hab<br/>
                            <div className="boxesInfo">VR / Three.JS</div>
                        </div>
                    </a>



                    <a className="inline">
                        <div className="ltOrangeBox">
                            <PopPtoPWeb/><br/>
                                     Web Design<br/>
                            <div className="boxesInfo">Web Design / Responsive</div>
                        </div>
                    </a>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="ltGreenBox">
                            <PopJS/><br/>
                                      Vanilla JS<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="ltOrangeBox">
                            <PopGithub/><br/>
                                      Find the Github<br/>
                            <div className="boxesInfo"> jQuery / Github Api / Bootstrap</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <PopNewsRepublic/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="ltOrangeBox">
                            <PopGallery/><br/>
                                      React Image Gallery<br/>
                            <div className="boxesInfo">ReactJS / Webpack</div>
                        </div>
                    </div>

                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <PopTetris/><br/>
                                      Websocket Tetris Game<br/>
                            <div className="boxesInfo"> JavaScript / Websocket / Game</div>
                        </div>
                    </div>

                    <div href="#" target="_blank" className="inline"  >
                        <div className="ltGreenBox">
                            <PopData/><br/>
                                      Report Generate Templates <br/>
                            <div className="boxesInfo"> jQuery / canvas / Data Visualize</div>
                        </div>
                    </div>



                   
              </div>


              

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
