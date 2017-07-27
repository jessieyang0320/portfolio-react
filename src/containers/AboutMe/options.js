import React, { Component } from 'react';
import './options.css';
import ClickHereCircle from '../../components/clickHere/clickHere';
import { red } from '../../theme/variables';



class Options extends Component {


  render() {

    return (
      <div>
          <p>Sure,
          <br/>
          click on bubbles below to get to know more about me:</p>
          <p> use a donut chart maybe</p>

          <div className="travel">
            <p>Travel</p>
            <ClickHereCircle color={red} className="clickHere"/>
          </div>

          <div className="entrepreneurial">
            <p>entrepreneurial</p>
          </div>

          <div className="coding-skills">
            <span>coding-skills</span>
          </div>

          <div className="photography">
            <span>photography</span>
          </div>

      </div>
    );
  }
}

export default Options;
