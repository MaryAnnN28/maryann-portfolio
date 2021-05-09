import React, { useEffect } from 'react';
import NavCRM from '../../images/navcrm.jpeg'; 
import PlanetWarrior from '../../images/PlanetWarrior1.png'; 
import BiteBoard from '../../images/biteboard.jpeg'; 
import GolfLive from '../../images/golflive.jpeg'; 
import MemeShare from '../../images/memeshare.jpeg'; 
import './Projects.css';
import { IconContext } from 'react-icons';
import { FiGithub, FiVideo } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350vh'
      }}
    >
      <IconContext.Provider value={{ color: '#efefef' }}>
        
        <div className="grids">
          <div className="projects-header">
            <h2 data-aos="fade-down" className="projects-header-h2">Featured Projects</h2>
          </div>
        
          <div data-aos="fade-right" className="project-row">
            <div className="box">
              <div className="project-card">
                <img className="project-image" src={NavCRM} alt="NavCRM Dashboard" />
              </div>
              <div className="project-details">
                <h3 className="project-title">NavCRM</h3>
                <div className="description-container">
                  <p className="project-description">Data visualization CRM dashboard that helps users organize customers and tasks, while providing an insightful look at customer data. Add, edit, and sort through tasks.</p>
                  <p className="project-tech">
                    React Rails Chart.js OAuth2 Chakra-UI 
                  </p>
                    <div className="project-links">
                      <a href="https://www.youtube.com/watch?v=WXA3CnwTGfc" target="_blank" rel="noreferrer">
                        <FiVideo size={23} /> &nbsp; &nbsp;
                      </a>
                      <a href="https://github.com/MaryAnnN28/NavCRM-Frontend" target="_blank" rel="noreferrer">
                        <FiGithub size={20} />
                      </a>
                    </div>
                </div>
              </div>
            </div>
        </div>
         
     

        <div data-aos="fade-left" className="project-row">
          <div className="box">
              
              <div className="project-card-right">
                <img className="project-image" src={PlanetWarrior} alt="Planet Warrior App" />
              <div class="ribbon ribbon-top-right"><span>Winner</span></div>
              </div>
              <div className="project-details-left">
                <h3 className="project-title-planet">Planet Warrior</h3>
                <div className="description-container-planet">
                  <p className="project-description-planet">Planet Warrior, helps inspire individuals in helping make the planet be a cleaner and better place to live, by using a Google map feature to find environmentally-friendly tasks within the community. As you complete a task, you earn points and badges.</p>
                  <p className="project-tech-left">
                      React Rails JWT-Auth GoogleMapAPI MaterialUI 
                  </p>
                  <div className="project-links-left">
                    <a href="https://www.youtube.com/watch?v=MzysofEpV-k" target="_blank" rel="noreferrer">
                      <FiVideo size={23} /> &nbsp; &nbsp;
                    </a>
                    <a href="https://github.com/winstonchen-code/PlanetWarriors" target="_blank" rel="noreferrer">
                      <FiGithub size={20} />
                    </a>
                <p className="project-winner">WINNER OF BEST IMPLEMENTATION AND POTENTIAL FOR GROWTH AWARD AT HACKOR HACKATHON 2021.</p>
                  </div>
                </div>
              </div>
          </div>  
        </div>

          <div data-aos="fade-right" className="project-row">
            <div className="box">
              <div className="project-card">
                <img className="project-image" src={BiteBoard} alt="Bite Board Recipe Site"/>
                </div>
                <div className="project-details">
                <h3 className="project-title">BiteBoard</h3>
                <div className="description-container">
                  <p className="project-description">BiteBoard allows users to store recipes all in one place. Ability to sort or filter by category, difficulty, rating, & ingredients. Add, view and edit, as well as rate recipes. </p>
                  <p className="project-tech">
                    React Ruby-on-Rails HTML/CSS Chakra-UI 
                  </p>
                    <div className="project-links">
                      <a href="https://youtu.be/kjVjFT0aZMI" target="_blank" rel="noreferrer">
                        <FiVideo size={23} /> &nbsp; &nbsp;
                      </a>
                      <a href="https://github.com/MaryAnnN28/BiteBoard-Frontend" target="_blank" rel="noreferrer">
                        <FiGithub size={20} />
                      </a>
                    </div>
                </div>
              </div>

            </div>
        </div>

          <div data-aos="fade-left" className="project-row">
            <div className="box">
              <div className="project-card-right">
                <img className="project-image" src={GolfLive} alt="Golf Live"/>
                  </div>
                  <div className="project-details-left">
                  <h3 className="project-title-planet">Golf Live</h3>
                  <div className="description-container-planet">
                    <p className="project-description-planet">Golf Live is built for venues that provide golf lessons, allowing members to sign up, and be able to view and update all of their upcoming lessons all in a scheduling tool. Learn about the instructors at the venue, and select one to take a lesson with. </p>
                    <p className="project-tech-left">
                        Ruby Ruby-on-Rails Auth Bootstrap
                    </p>
                    <div className="project-links-left">
                      <a href="https://youtu.be/SQm-LHsoaX8" target="_blank" rel="noreferrer">
                        <FiVideo size={23} /> &nbsp; &nbsp;
                      </a>
                      <a href="https://github.com/rhago001/Top-Golf" target="_blank" rel="noreferrer">
                        <FiGithub size={20} />
                      </a>
        
                    </div>
                  </div>
                </div>

            </div>
        </div>

          <div data-aos="fade-right" className="project-row">
            <div className="box">
                <div className="project-card">
                  <img className="project-image" src={MemeShare} alt="Meme Share" />
                  </div>
                  <div className="project-details">
                  <h3 className="project-title">Meme Share</h3>
                  <div className="description-container">
                    <p className="project-description">A meme browsing and social sharing platform, allowing users to like, comment and add their favorite memes. Sort and filter by most viral, most liked and newest memes. </p>
                    <p className="project-tech">
                      Ruby-on-Rails JavaScript HTML/CSS Bulma 
                    </p>
                      <div className="project-links">
                        <a href="https://www.youtube.com/watch?v=YNdfQNBu2DI&list=PLyeEZadHmJI7vJDQ-0c3_aEOXtX90AnnG&index=2" target="_blank" rel="noreferrer">
                          <FiVideo size={23} /> &nbsp; &nbsp;
                        </a>
                        <a href="https://github.com/MaryAnnN28/Meme-Share" target="_blank" rel="noreferrer">
                          <FiGithub size={20} />
                        </a>
                      </div>
                  </div>
                </div>
            </div>
        </div>


      </div>

      </IconContext.Provider>
    </div>
  )
}

export default Projects
