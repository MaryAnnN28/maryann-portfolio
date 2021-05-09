import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SocialBar from './components/SocialBar/SocialBar'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {BrowserRouter as Router } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollTopArrow from './components/ScrollTopArrow'



function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <Router>
        <div className="Home"> 
          <Navbar />
          <SocialBar />
          <ScrollTopArrow />
            <section id='header'><Header /></section>
            <section id='about'><About/></section>
            <section id='projects'><Projects/></section>
            <section id='contact'><Contact/></section>
        </div>
      </Router>

      </>
  );
}

export default App;
