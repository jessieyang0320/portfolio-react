import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {ImageButton, Title} from './Project.style';
import {Container, Relative, Flex} from '../../theme/grid';
import { A, Index } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css';
import './Project.css';
import { Background } from '../../theme/Background.style';
import {Tooltip} from 'react-lightweight-tooltip';
import Footer from '../../components/Footer/Footer';
import SingleProject from './singleProject';



class Projects extends Component {
  render() {
    return (

      <div>
        <NavigationBar/>
        <Background/>

      <Container>
      <Reveal effect="animated fadeInUp" className="passage-block">
          <p>
              I made beautiful and functional website with React, Nodejs, Express, Rails, MongoDB, Postgres.
              and as a VR enthusiast, I made VR apps too.

          </p>

      </Reveal>


      <div className = "project-block">
          <Relative marginBottom="60px" className="project-title">
              <Index>
                   <Reveal effect="animated slideInDown">
                     <h1>01</h1>
                   </Reveal>
              </Index>
              <Reveal effect="animated slideInRight">
                  <h1> <A href="#" target="_blank">News Republic</A></h1>
              </Reveal>
          </Relative>

          <div className="description-block">
              <p>News Republic is a news feed website made with Nodejs and ReactJS</p>

              <div className = 'buttons'>
                  <button> <a href="#"> github</a></button>
                  <button><a href="#"> Demo</a></button>
              </div>
          </div>

          <Reveal className="showPic" effect="animated fadeInUp">
              <img src = {require('../../assets/news-republic.png')}
               alt="project"/>
         </Reveal>

      </div>



       <div className = "project-block">
           <Relative marginBottom="60px" className="project-title">
               <Index>
                    <Reveal effect="animated slideInDown">
                        <h1>02</h1>
                    </Reveal>
               </Index>
               <Reveal effect="animated slideInRight">
                   <h1> <A href="#" target="_blank">Responsive Web</A></h1>
               </Reveal>
           </Relative>

           <div className="description-block">
               <p>This is a pure front end responsive designed website, HTML CSS and JS</p>

               <div className = 'buttons'>
                   <button> <a href="#"> github</a></button>
                   <button><a href="#"> Demo</a></button>
               </div>
           </div>

           <Reveal className="showPic" effect="animated fadeInUp">
               <img src = {require('../../assets/responsive-website.png')}
                alt="project"/>
          </Reveal>

       </div>



      <div className = "project-block">
          <Relative marginBottom="60px" className="project-title">
              <Index>
                   <Reveal effect="animated slideInDown">
                      <h1>03</h1>
                   </Reveal>
              </Index>
              <Reveal effect="animated slideInRight">
                  <h1> <A href="#" target="_blank">V-hab</A></h1>
              </Reveal>
          </Relative>

          <div className="description-block">
              <p>V-Hab is s VR game for hand rehab, made with LeapMotion SDK, Three.js</p>

              <div className = 'buttons'>
                  <button> <a href="#"> github</a></button>
                  <button><a href="#"> Demo</a></button>
              </div>
          </div>

          <Reveal className="showPic" effect="animated fadeInUp">
              <img src = {require('../../assets/v-hab.png')}
               alt="project"/>
         </Reveal>

      </div>


      <div className = "project-block">
          <Relative marginBottom="60px" className="project-title">
              <Index>
                   <Reveal effect="animated slideInDown">
                      <h1>04</h1>
                   </Reveal>
              </Index>
              <Reveal effect="animated slideInRight">
                  <h1> <A href="#" target="_blank">Charts Template</A></h1>
              </Reveal>
          </Relative>

          <div className="description-block">
              <p>A data visualiztion template, made with html css and js </p>

              <div className = 'buttons'>
                  <button> <a href="#"> github</a></button>
                  <button><a href="#"> Demo</a></button>
              </div>
          </div>

          <Reveal className="showPic" effect="animated fadeInUp">
              <img src = {require('../../assets/data.png')}
               alt="project"/>
         </Reveal>

      </div>

      <div className = "project-block">
          <Relative marginBottom="60px" className="project-title">
              <Index>
                   <Reveal effect="animated slideInDown">
                      <h1>05</h1>
                   </Reveal>
              </Index>
              <Reveal effect="animated slideInRight">
                  <h1> <A href="#" target="_blank">Vanilla JS</A></h1>
              </Reveal>
          </Relative>

          <div className="description-block">
              <p>A collection of small apps made with vanilla JavaScript and CSS</p>

              <div className = 'buttons'>
                  <button> <a href="#"> github</a></button>
                  <button><a href="#"> Demo</a></button>
              </div>
          </div>

          <Reveal className="showPic" effect="animated fadeInUp">
              <img src = {require('../../assets/js.png')}
               alt="project"/>
         </Reveal>

      </div>

      <div className = "project-block">
          <Relative marginBottom="60px" className="project-title">
              <Index>
                   <Reveal effect="animated slideInDown">
                      <h1>06</h1>
                   </Reveal>
              </Index>
              <Reveal effect="animated slideInRight">
                  <h1>  <A href="#" target="_blank">Photo Gallery</A></h1>
              </Reveal>
          </Relative>

          <div className="description-block">
              <p> randomly position photos on screen made with React</p>

              <div className = 'buttons'>
                  <button> <a href="#"> github</a></button>
                  <button><a href="#"> Demo</a></button>
              </div>
          </div>

          <Reveal className="showPic" effect="animated fadeInUp">
              <img src = {require('../../assets/responsive-website.png')}
               alt="project"/>
         </Reveal>

      </div>
        <div className = "view-more">
          <A href="https://github.com/jessieyang0320" target="_blank">View More on Github</A>
        </div>

      </Container>
      <Footer/>
      </div>
    );
  }
}

export default Projects;
