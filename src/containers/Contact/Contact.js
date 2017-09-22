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
              

              <div className="contactBkg">
                  <div className="contactWrapper">
                    <h2>Get in Touch</h2>

                      If you`re looking for developers who don't need hand-holding, who are coachable, driven, and thrive on ownership and initiative. <br/><br/>
                      
                      <div className="submitBtnBkg">
                  <a href="mailto:jessieyang0320@gmail.com"><div className="submitBtnNew">SEND AN EMAIL</div></a>
                  </div>

                  <div className='buttons'>
                      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/jessie-lijie-yang/" target="_blank"><button className="btn first">LinkeIn</button></a>
                      <a rel="noopener noreferrer" href="https://github.com/jessieyang0320" target="_blank"><button className="btn second">Github</button></a>
                      <a rel="noopener noreferrer" href="https://resume.creddle.io/resume/b6cdr3eng69" target="_blank"><button className="btn third">Resume</button></a>
                      
                      
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
