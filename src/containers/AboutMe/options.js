import React, { Component } from 'react';
import './options.css';
import ButtonTwo from '../../components/Buttons/button2';
import Travel from './Facts/travel';
import Entreprenuer from './Facts/entreprenuer';

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


          <div className = "options">


							<div className='buttons'>
			            <button className="btn first" onClick= {this.toggleTravel.bind(this)}>entrepreneur</button>
			            <button className="btn second" onClick= {this.toggleEntreprenuer.bind(this)}>Travel</button>
			            <button className="btn third">Photography</button>
			            <button className="btn fourth">Coding</button>
			            <button className="btn fifth">Quirks</button>

			        </div>

              <div className="show-aspect">
                  {!this.state.travel && <Travel />}
                  {!this.state.entreprenuer && <Entreprenuer/>}

              </div>
        </div>
      </div>
    );
  }
}

export default Options;
