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

class Projects extends Component {
  constructor(){
    super()
    this.state={
      
    }
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


              <div className="workGroup2" >

                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <PopNewsRepublic/><br/>
                                      News Republic<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>



                    <a className="inline">
                        <div className="yellowBox">
                            <PopVhab/><br/>
                                      V-Hab<br/>
                            <div className="boxesInfo">VR / Three.JS</div>
                        </div>
                    </a>



                    <a className="inline">
                        <div className="yellowBox">
                            <PopPtoPWeb/><br/>
                                     Web Design<br/>
                            <div className="boxesInfo">Web Design / Responsive</div>
                        </div>
                    </a>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="4" src={require('../../assets/js.png')} alt="news" className="grow"/><br/>
                                      Vanilla JS<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="5" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      Find the Github<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="6" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      React Music<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>


                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="7" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      React Image Gallery<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>

                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <img id="8" src={require('../../assets/p-icon.png')} alt="news" className="grow"/><br/>
                                      Restaurant finder<br/>
                            <div className="boxesInfo">Web Design / Development</div>
                        </div>
                    </div>

                    <div href="#" target="_blank" className="inline"  >
                        <div className="yellowBox">
                            <PopData/><br/>
                                      Data Visualization<br/>
                            <div className="boxesInfo">Web Design / Development</div>
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
