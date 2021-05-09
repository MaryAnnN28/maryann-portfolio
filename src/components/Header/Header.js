import React, { useEffect } from 'react'
import './Header.css';
import { IconContext } from 'react-icons'; 
import Aos from 'aos';
import 'aos/dist/aos.css';


const Header = () => {

  useEffect(() => {
    Aos.init({ duration: 4000 });
  });
 
  return (
    <IconContext.Provider value={{color: 'rgb(123, 187, 199)'}}>
    <div
      style={{
        display: 'flex',
        height: '110vh'
      }}
    >
      <div className="header-container">
        
        <div className="header-container-left">
          <div className="main-header">
  
            <h1 className="main-h1" data-aos="fade-right">
              Building Enhanced
              Digital Experiences
            </h1>
            <h3 className="header-firstname-h3" data-aos="fade-up"> Meet MaryAnn</h3>
            
            
          </div>
        </div>

        <div className="header-container-right">
          
         
       
        </div>
            
  

      </div>

      
    </div>
    </IconContext.Provider>
  )
}

export default Header; 
