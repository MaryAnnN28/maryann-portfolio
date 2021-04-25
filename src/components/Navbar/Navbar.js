import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import Logo from '../../images/MN1.png';
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaMediumM, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
    return (
      <IconContext.Provider value={{color: 'rgb(212, 91, 109)'}}>

      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo" width="130px"/> 
        </div>

        <div className="navbar-center">
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/projects'>PROJECTS</Link>
          <Link to='https://maryann-navarrete.medium.com/'>BLOG</Link>
          <Link to='/contact'>CONTACT</Link>
         
        </div>

          <div className="navbar-right">
            <a href="https://www.linkedin.com/in/maryannnavarrete/">
              <FaLinkedinIn size={25} />
            </a>
            <a href="https://github.com/MaryAnnN28">
              <FaGithub size={25} /> 
            </a>
            <a href="https://maryann-navarrete.medium.com/">
              <FaMediumM size={25} /> 
            </a>
            <a href="https://twitter.com/MaryAnnN28">
              <FaTwitter size={25} />
            </a>

        </div>

      </div>
      </IconContext.Provider>
    )
  }; 

export default Navbar
