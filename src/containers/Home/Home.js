import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import { HomeImage} from  './Home.style';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import {Icon} from 'react-fa'

class Home extends Component {

  render() {

    return (
<div>
      <Container>

        <HomeImage>

          <h1>Jessie Yang</h1>
          <h1>Front End Developer</h1>

        </HomeImage>

       <div className = "self-description">
          <Reveal effect="animated zoomIn">
              <p> Hi! My name is Jessie Yang. I am a New York based Front End Developer
              and I create beautiful & functional websites! Below are tools I use: </p>
          </Reveal>
       </div>

       <div className="skills">

          <div className="skill-box">
              <div className="powerful-frameworks">
                <Reveal effect="animated flipInY">
                  <div className = "skill-circle">
                      <img src = {require('../../assets/react-icon.png')}
                      alt="framework"/>

                  </div>
                  <div className="seperate"></div>

                  <div className="skill-title">
                      Powerful Frameworks
                  </div>

                  <div className="skill-detail">
                      I work with agile frameworks such as Node.js, React, and Ruby on Rails.
                  </div>
               </Reveal>
              </div>

          </div>


          <div className="skill-box">
              <div className="ready-to-go">
              <Reveal effect="animated flipInY">
                  <div className = "skill-circle">
                     <Icon paper-plane name="paper-plane" size="4x"/>
                  </div>

                  <div className="seperate"></div>

                  <div className="skill-title">
                     Ready to go

                  </div>
                  <div className="skill-detail">
                    I use Git/Github for version control and deploy and Heroku.
                  </div>

              </Reveal>
              </div>
          </div>



          <div className="skill-box">
              <div className="secure-database">
              <Reveal effect="animated flipInY">
                  <div className = "skill-circle">
                    <Icon database name="database" size="4x"/>
                  </div>

                  <div className="seperate"></div>

                  <div className="skill-title">
                        Secure Storage
                  </div>
                  <div className="skill-detail">
                      I employ user authentication and maintain PostgreSQL,
                      MongoDB database.
                  </div>
              </Reveal>
              </div>
          </div>

          <div className="skill-box">
              <div className="up-to-date">
              <Reveal effect="animated flipInY">
                  <div className = "skill-circle">
                      <img src = {require('../../assets/nodejs.png')}
                       alt="uptodate"/>
                  </div>

                  <div className="seperate"></div>

                  <div className="skill-title">
                      UP to Date
                  </div>
                  <div className="skill-detail">
                         I keep on my toes with cutting-edge languages such as
                         JavaScript, HTML5, CSS3, ES6, and Ruby.
                  </div>
              </Reveal>
              </div>
          </div>



       </div>

      </Container>
      <Footer/>
</div>
    );
  }
}

export default Home;
