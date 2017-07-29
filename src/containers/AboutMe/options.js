import React, { Component } from 'react';
import './options.css';
import ButtonTwo from '../../components/Buttons/button2';
import Travel from './travel';
import Entreprenuer from './entreprenuer';

class Options extends Component {
  constructor () {
     super()
     this.state = {
       travel: true,
       entreprenuer: true

     }
   }
   toggleEntreprenuer () {

     this.setState({
        entreprenuer: !this.state.entreprenuer
     })
   }
   toggleTravel () {

     this.setState({
       travel: !this.state.travel
     })
   }


  render() {

    return (
      <div className = "option-container">
          <p>Sure,
          <br/>
          click on bubbles below to get to know more about me:</p>
          <p> use a donut chart maybe</p>

          <div className="options">

              <div className="btn second" name={'Travel'} onClick= {this.toggleTravel.bind(this)}>here</div>
              <div className="btn second" name={'entrepreneur'} onClick= {this.toggleEntreprenuer.bind(this)}>click</div>
              <ButtonTwo className="btn second" name={'Photography'}/>
              <ButtonTwo className="btn second" name={'Coding'}/>
              <ButtonTwo className="btn second" name={'Quirks'}/>
              <ButtonTwo className="btn second" name={'Cat'}/>
          </div>

          <div className="show-aspect">
              {!this.state.travel && <Travel />}
              {!this.state.entreprenuer && <Entreprenuer/>}

          </div>

      </div>
    );
  }
}

export default Options;
