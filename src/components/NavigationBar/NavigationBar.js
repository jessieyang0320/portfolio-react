import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style'


class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer >
        <NavItem to='/home'>Home</NavItem>
        <NavItem to='/projects'>Projects</NavItem>
        <NavItem to='/me'>About Me</NavItem>
        <NavItem to='/contact'>Contact</NavItem>

      </NavigationContainer>
    );
  }
}

export default NavigationBar;
