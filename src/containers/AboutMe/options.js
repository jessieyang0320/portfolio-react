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
   toggleEntreprenuer () {
     this.setState({
        active: "entreprenuer"
     })
   }

   toggleTravel () {
     this.setState({
       active: "travel"
     })
   }

   togglePhotography () {
     this.setState({
       active: "photography"
     })
   }

   toggleCoding () {
     this.setState({
       active: "coding"
     })
   }

   toggleRandomFacts () {
     this.setState({
       active: "randomfacts"
     })
   }

   toggleAccounting () {
     this.setState({
       active: "accounting"
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
                  <button className="btn fourth" onClick= {this.toggleAccounting.bind(this)}>Accounting</button>

			        </div>

              <div className="show-aspect">
                  {this.state.active==="travel" ? <Travel /> : null}
                  {this.state.active === "entreprenuer" ? <Entreprenuer/>:null}
                  {this.state.active === "photography" ? <Photography/> : null}
                  {this.state.active === "coding" ? <Coding/> : null}
                  {this.state.active === "randomfacts" ? <RandomFacts/> : null}
                  {this.state.active === "accounting" ? <Accounting/> : null}

              </div>
        </div>
      </div>
    );
  }
}

export default Options;
