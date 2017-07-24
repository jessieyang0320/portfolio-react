import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './AboutMe.css';
import { Background } from '../../theme/Background.style';
import Footer from '../../components/Footer/Footer';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';

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


              <Reveal effect="animated fadeInUp" className="passage-block">
                  <p>
                   <h1>Brief Description: fadeInUp</h1>
                   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                  </p>
              </Reveal>

              <Reveal effect="animated flipInY" className="passage-block">
                    <h1>Skills Icons</h1>
                    <p>   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                   </p>
              </Reveal>




              <Reveal effect="animated fadeInLeft" className="passage-block">
                    <h1>Skills fadeInLeft</h1>
                    <p>   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                   </p>
              </Reveal>

              <Reveal effect="animated zoomIn" className="passage-block">
                    <h1>Skills zoomIn</h1>
                    <p>   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                   </p>
              </Reveal>
          </div>
          <Footer/>

      </div>
    );
  }
}

export default AboutMe;
