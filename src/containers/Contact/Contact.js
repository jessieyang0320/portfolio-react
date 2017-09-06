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
                      <a href="https://www.linkedin.com/in/jessie-lijie-yang/" target="_blank"><button className="btn first">LinkeIn</button></a>
                      <a href="https://github.com/jessieyang0320" target="_blank"><button className="btn second">Github</button></a>
                      <a href="../../assets/Jessie Yang Resume.pdf" target="_blank"><button className="btn third">Resume</button></a>
                      
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
