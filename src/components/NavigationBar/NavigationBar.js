import React, { Component } from 'react';
import './NavBar.css'

class NavigationBar extends Component {
  render() {
    return (
        <div className = "navbar">
          <ul>
              <li><a href="/">Home </a></li>
              <li><a href="/projects" >Projects </a></li>
              <li><a href="/me" >About </a></li>
              <li><a href="/contact" >Contact </a></li>
          </ul>
        </div>
    );
  }
}

export default NavigationBar;
