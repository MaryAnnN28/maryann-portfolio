import React from 'react'
import './SocialBar.css'
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaMediumM, FaTwitter } from 'react-icons/fa';



const SocialBar = () => {
  


  return (
    <>
      <IconContext.Provider value={{color: '#efefef'}}>
      <div class="icon-bar" >
            <a href="https://www.linkedin.com/in/maryannnavarrete/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={25} />
            </a>
            <a href="https://github.com/MaryAnnN28" target="_blank"rel="noreferrer">
              <FaGithub size={25} /> 
            </a>
            <a href="https://maryann-navarrete.medium.com/" target="_blank" rel="noreferrer">
              <FaMediumM size={25} /> 
            </a>
            <a href="https://twitter.com/MaryAnnN28" target="_blank" rel="noreferrer">
              <FaTwitter size={25} />
            </a>
        
        </div>

        </IconContext.Provider>
    </>
  )
}

export default SocialBar
