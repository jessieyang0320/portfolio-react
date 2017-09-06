import React, { Component } from 'react';
import './options.css';
import ButtonTwo from '../../components/Buttons/button2';
import Travel from './Facts/travel';
import Entreprenuer from './Facts/entreprenuer';
import Photography from './Facts/photography';
import Coding from './Facts/coding';
import RandomFacts from './Facts/randomfacts';
import Accounting from './Facts/accounting';


class Options extends Component {
  constructor () {
     super()
     this.state = {
       active: ""
     }
   }
  
   toggleOptions (e) {
     this.setState({
       active: e.target.id
     })
   }


  render() {

    return (
      <div className = "option-container">
          <p>Sure,
          <br/>
          click on bubbles below to get to know more about me:</p>


          <div className = "options">
      

							<div className='buttons' >
			            <Entreprenuer/>
                  <Travel/>
                  <Photography/>
                  <Coding/>
                  <RandomFacts/>
                  <Accounting/>

			        </div>

              
        </div>
      </div>
    );
  }
}

export default Options;
