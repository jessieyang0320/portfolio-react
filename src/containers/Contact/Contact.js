import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Footer from '../../components/Footer/Footer';
import {Container} from '../../theme/grid';
import './Contact.css'


class Contact extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>

        <Container>

        <div className='buttons'>
            <button className="btn first">Button 1</button>
            <button className="btn second">Button 2</button>
            <button className="btn third">Button 3</button>
            <button className="btn fourth">Button 4</button>
            <button className="btn fifth">Button 5</button>
            <button className="btn sixth">Button 6</button>
        </div>
       </Container>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
