import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Nav = (props) => {
  return (
    <div className={`navbar-grid ${props.theme}`}>
      <div className="mascots">
        <div className="mascot-1 image"></div>
        <div className="mascot-2 image"></div>
      </div>
      <nav className={`nav-flex-container ${props.theme}`}>
        <a className={`home ${props.theme}`} href="#home">
          Home
        </a>
        <a className={`about ${props.theme}`} href="#about">
          About
        </a>
        <a className={`work ${props.theme}`} href="#work">
          Work
        </a>
        <a className={`contact ${props.theme}`} href="#contact">
          Contact
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/boydduffiev/"
          target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="github"
          href="https://github.com/boydDuffie"
          target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>
    </div>
  );
};
