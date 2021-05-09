import React, { useEffect } from 'react'
import './Contact.css'
import { IconContext } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      // alignItems: 'center',
      height: '100vh'
    }}
    >
      <IconContext.Provider value={{color: '#efefef'}}>
      
      <div className="contact-page">
        <h1 className="contact-header" data-aos="fade-down">Get In Touch</h1>
          <p className="contact-info" data-aos="fade-up">
            <a href="mailto:maryann.navarrete@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail size={50}/></a>
            <a href="https://www.linkedin.com/in/maryannnavarrete/" target="_blank" rel="noreferrer"><FaLinkedinIn size={50} /></a>
          </p>
          <div className="contact-form">
            <form>
              
            </form>  
          </div>
      </div>
      </IconContext.Provider>
  </div>
  )
}

export default Contact
