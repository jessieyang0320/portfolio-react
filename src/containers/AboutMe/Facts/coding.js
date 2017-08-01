import React, { Component } from 'react';
import './coding.css';
import CodingIcon from './codingIcons';

class Coding extends Component {

  render() {
    return (
      <div className="codingContainer">
        <h1 className="codingTitle">This is the Coding Skills Part</h1>
        <p className="codingArticle">
        2. coding skills: I started teaching myself coding when I realized
        I need a landing page for my business. I learn things online,
        youtube, medium, blog, so many new things to learn.
        Feels like a butterfly run into a flower garden.  these are tools what
        I have learnt to use:
        </p>

        <div className="skill-icons">

          <CodingIcon/>

        </div>

      </div>
    );
  }
}

export default Coding;
