import React, { Component } from 'react';
import './options.css';
import ClickHereCircle from '../../components/clickHere/clickHere';
import { red } from '../../theme/variables';
import ButtonOne from '../../components/Buttons/button1';
import ButtonTwo from '../../components/Buttons/button2';
import ButtonThree from '../../components/Buttons/button3'

class Options extends Component {


  render() {

    return (
      <div>
          <p>Sure,
          <br/>
          click on bubbles below to get to know more about me:</p>
          <p> use a donut chart maybe</p>

          <div className="options">

              <div className="travel">

                <ButtonTwo name={'Travel'}/>
                <ClickHereCircle color={red} className="clickHere"/>
              </div>

              <div className="entrepreneurial">

                <ButtonOne name={'StartUp'}/>
              </div>

              <div className="coding-skills">

                <ButtonThree/>
              </div>

              <div className="photography">
                
                <ButtonOne name={'photography'}/>
              </div>
          </div>

      </div>
    );
  }
}

export default Options;
