import React, { Component } from 'react';
import './options.css';
import '../../components/Buttons/buttonStyle.css';
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

                <div className='opt-btn'>
                <Entreprenuer/>
                </div>

                <div className='opt-btn'>
                <Travel/>
                  
                </div>

                <div className='opt-btn'>
                <Photography/>
                  
                </div>

                <div className='opt-btn'>
                <Coding/>
                  
                </div>

                <div className='opt-btn'>
                <RandomFacts/>
                  
                </div>

                <div className='opt-btn'>
                <Accounting/>
                </div>



			            
                  

			        </div>

              
        </div>
      </div>
    );
  }
}

export default Options;
