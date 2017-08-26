import React, { Component } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Footer from '../../components/Footer/Footer';
import './Contact.css'


class Contact extends Component {
  render() {
    return (
      <div>
            <NavigationBar/>

            <div>
              <a id="contact"></a>

              <div className="contactBkg">
                  <div className="contactWrapper">
                    <h2>get in touch</h2>
                      I am currently looking for opportunities, send me an email<br/><br/>
                      
                      <div className="submitBtnBkg">
                  <a href="mailto:jessieyang0320@gmail.com"><div className="submitBtnNew">SEND AN EMAIL</div></a>
                  </div>

                  <div className='buttons'>
                      <button className="btn first">LinkeIn</button>
                      <button className="btn second">Github</button>
                      <button className="btn third">Resume</button>
                      <button className="btn fourth">Button 4</button>
                      <button className="btn fifth">Button 5</button>
                  </div>
                      
              </div>
            </div>
               
            <Footer/>
      </div>
       
      </div>
    );
  }
}

export default Contact;
