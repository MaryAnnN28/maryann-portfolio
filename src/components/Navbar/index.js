import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/MN1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

// import { Nav, NavLink, Bars, NavMenu } from './NavBarElements';

const Navbar = () => {

  
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false); 


  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <IconContext.Provider value={{ color: '#efefef' }}>
        
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
             <img src={Logo} alt="logo" width="100px"/> 
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>


          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <AnchorLink href='#header'>
              <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
              </li>
            </AnchorLink>
            
            <AnchorLink href='#about'>
              <li className="nav-item">
                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>About</Link>
              </li>
            </AnchorLink>

            <AnchorLink href='#projects'>
              <li className="nav-item">
                <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>Projects</Link>
              </li>
            </AnchorLink>

            <li className="nav-item">
              <Link to='https://maryann-navarrete.medium.com/' className="nav-links" onClick={closeMobileMenu}>Blog</Link>
            </li>

            <AnchorLink href='#contact'>
              <li className="nav-item">
                <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>Contact</Link>
              </li>
            </AnchorLink>
          </ul>

        </div>
      </div>

      {/* <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" width="130px"/> 
        </NavLink>
        <Bars />
        <NavMenu>
          <AnchorLink href='#header'>
            <NavLink to="/" activeStyle>
              HOME
            </NavLink>
          </AnchorLink>
      
          <AnchorLink href='#about'>
            <NavLink to="/about" activeStyle>
              ABOUT
            </NavLink>
          </AnchorLink>
      
          <AnchorLink href='#projects'>
            <NavLink to="/projects" activeStyle>
              PROJECTS
            </NavLink>
          </AnchorLink>
      
          <NavLink to="https://maryann-navarrete.medium.com/" activeStyle>
            BLOG
          </NavLink>
      
          <AnchorLink href='#contact'>
            <NavLink to="/contact" activeStyle>
              CONTACT
            </NavLink>
          </AnchorLink>
        </NavMenu>
      
      </Nav> */}
    </IconContext.Provider>
    </>
  );
};

export default Navbar;
