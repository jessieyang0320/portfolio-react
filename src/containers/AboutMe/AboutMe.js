import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './AboutMe.css';
import { Background } from '../../theme/Background.style';
import Footer from '../../components/Footer/Footer';
import 'animate.css/animate.css';
import Options from './options.js';
import ClickHereCircle from '../../components/clickHere/clickHere';
import { red } from '../../theme/variables'


class AboutMe extends Component {
  constructor () {
     super()
     this.state = {
       showOptions: true
     }
   }


   showOptions () {
     this.setState({
       showOptions: !this.state.showOptions
     })
   }


  render() {

    return (

      <div>
          <NavigationBar/>
          <Background/>

          <div className="aboutMeContainer">

                  <div className="aboutMeOpen">
                        Getting to Know Me
                         I am a combination of business technology and artist 
                  </div>

                   <div className="content">
                          <div className="left-conv">
                            <p>Hi, There!
                            <br/>
                            Since you are here, I guess you want to know more about me</p>
                          </div>

                           <div className="clear-fix"></div>

                          <div className="right-conv" onClick={this.showOptions.bind(this)}>
                            <p >
                            Nice to meet you Jessie!
                            <br/>
                             tell me more about you, (click to know more)</p>
                             <ClickHereCircle color={red} className="clickHere"/>
                          </div>

                          <div className="clear-fix"></div>

                          <div className="OptionsBlock">
                              {!this.state.showOptions && <Options />}
                          </div>
                    </div>
          </div>

          <div className="clear-fix"></div>
          <Footer/>

      </div>
    );
  }
}

export default AboutMe;
