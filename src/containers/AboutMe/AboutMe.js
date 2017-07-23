import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './AboutMe.css';
import { Background } from '../../theme/Background.style';
import Footer from '../../components/Footer/Footer';

class AboutMe extends Component {
  render() {
    return (

      <div>
          <NavigationBar/>

          <div className="talkbox">
            <Background/>

              <h1 > Welcome About Me Page</h1>
              <h2 className="talk-left">Hello, my name is Jessie Lijie Yang, I am a NYC based front end developer, I like
              making beautiful responsive website with html, css, and js library.
              I like trying out new tools and new technology, I am currently looking for front end positions. Are you ready to learn more about me?  </h2>

              <h2 className="talk-right">Sure, why not, tell me more about you click to show next line </h2>
              <h2 className="talk-left"> What do you want to know about me, past work experience... entrepreural expereince? travel photography 3d printing show option buttons </h2>

          </div>
          <Footer/>

      </div>
    );
  }
}

export default AboutMe;
