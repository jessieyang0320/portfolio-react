import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import './AboutMe.css';
import { Background } from '../../theme/Background.style';
import Footer from '../../components/Footer/Footer';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import PartofMe from './partofMe.js';
import Options from './options.js';
import ClickHereCircle from '../../components/clickHere/clickHere';
import { red } from '../../theme/variables'


class AboutMe extends Component {
  constructor () {
     super()
     this.state = {
       isHidden: true,
       showOptions: true
     }
   }
   toggleHidden () {
     this.setState({
       isHidden: !this.state.isHidden
     })
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

          <div className="title">
            Getting to Know Me
          </div>

          <div className="content">



            <div className="left-conv">
              <p>Hi, There!
              <br/>
              Since you are here, I guess you want to know more about me</p>
            </div>

            <div className="right-conv">
              <p onClick={this.showOptions.bind(this)}>
              Nice to meet you Jessie!
              <br/>
               tell me more about you,sth I do not know click to show response</p>
               <ClickHereCircle color={red} className="clickHere"/>
            </div>




            <div className="left-conv">

                {!this.state.showOptions && <Options />}

            </div>

          </div>



          <div className="clear-fix"></div>
          <Footer/>

      </div>
    );
  }
}

export default AboutMe;
