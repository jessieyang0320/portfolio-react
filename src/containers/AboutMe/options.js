import React, { Component } from 'react';
import './options.css';
import ButtonTwo from '../../components/Buttons/button2';
import Travel from './Facts/travel';
import Entreprenuer from './Facts/entreprenuer';
import Photography from './Facts/photography';
import Coding from './Facts/coding';
import RandomFacts from './Facts/randomfacts';

class Options extends Component {
  constructor () {
     super()
     this.state = {
       travel: true,
       entreprenuer: true,
       photography: true,
       coding:true,
       randomfacts:true

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

   togglePhotography () {

     this.setState({
       photography: !this.state.photography
     })
   }
   toggleCoding () {

     this.setState({
       coding: !this.state.coding
     })
   }
   toggleRandomFacts () {

     this.setState({
       randomfacts: !this.state.randomfacts
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
			            <button className="btn first" onClick= {this.toggleEntreprenuer.bind(this)}>entrepreneur</button>
			            <button className="btn second" onClick= {this.toggleTravel.bind(this)}>Travel</button>
			            <button className="btn third" onClick= {this.togglePhotography.bind(this)}>Photography</button>
			            <button className="btn fourth" onClick= {this.toggleCoding.bind(this)}>Coding</button>
			            <button className="btn fifth" onClick= {this.toggleRandomFacts.bind(this)}>Quirks</button>

			        </div>

              <div className="show-aspect">
                  {!this.state.travel && <Travel />}
                  {!this.state.entreprenuer && <Entreprenuer/>}
                  {!this.state.photography && <Photography/>}
                  {!this.state.coding && <Coding/>}
                  {!this.state.randomfacts && <RandomFacts/>}

              </div>
        </div>
      </div>
    );
  }
}

export default Options;
