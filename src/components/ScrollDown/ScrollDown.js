import React, { Component } from 'react';
import './ScrollDown.css'

class ScrollDown extends Component {


  render() {

    return (
      <div>
      	<div className="arrow-container animated fadeInDown">
			  <div className="arrow-2">
			    <i className="fa fa-angle-down"></i>
			  </div>
			  <div className="arrow-1 animated hinge infinite zoomIn"></div>
			</div>

        
      </div>
    );
  }
}

export default ScrollDown;