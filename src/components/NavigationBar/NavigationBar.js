import React, { Component } from 'react';
import './NavBar.css'

class NavigationBar extends Component {
  constructor(){
    super()
    this.state={
      menuHide:true
    }
  }

  showMenu(){
    this.setState({
      menuHide: !this.state.menuHide
    })
  }
  render() {
    return (
      <header>
        <div className = "navbar">
             <div className="navbar1">

                <ul>
                   
                    <li><a href="/">Home </a></li>
                    <li><a href="/projects" >Projects </a></li>
                    <li><a href="/me" >About </a></li>
                    <li><a href="/contact" >Contact </a></li>
                </ul>
              </div>

             <div className="navbar2">
                <div className="accordionButton" onClick={this.showMenu.bind(this)}>Menu</div>
                {!this.state.menuHide===true
                ? <div className="accordionContent">
                      <a href="/">HOME</a><br/>
                      <div className="divLine"></div>
                      <a href="/projects">Projects</a><br/>
                      <div className="divLine"></div>
                      <a href="/me">About</a><br/>
                      <div className="divLine"></div>
                      <a href="/contact">Contact</a><br/>
                                      
                </div>

                : null}
                
             </div>

        </div>
      </header>
    );
  }
}

export default NavigationBar;